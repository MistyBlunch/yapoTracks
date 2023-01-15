import express from 'express'
import axios from 'axios'
import NodeCache from 'node-cache'

import { TrackRepository } from '../models/repositories/track.repository'
import { BaseController } from './base.controller'

import { Config } from '../config/config'

export class TrackController implements BaseController {
  public router: express.Router
  private trackRepository: TrackRepository
  private tracksCache: NodeCache
  private config: Config

  constructor(trackRepository: TrackRepository, config: Config) {
    this.router = express.Router()
    this.tracksCache = new NodeCache()
    this.trackRepository = trackRepository

    this.config = config

    this.router.post('/track', this.addTrack)
    this.router.get('/tracks', this.findAllTracks)

    this.router.get('/tracksByApi', this.getTracksByAPI)
  }

  getTracksByAPI = async (
    req: express.Request,
    res: express.Response
  ) => {
    const bandName = req.query.term as string
    if (this.tracksCache.has(bandName)) {
      res.send(this.tracksCache.get(bandName))
      return
    }
    const url = `${this.config.api.url}${bandName}`
    const tracksPromise = await axios.get(url)
    let tracks = await tracksPromise.data
    const albums = new Set<string>()
    tracks.results = tracks.results.map((rawTrack: any) => {
      const track = {
        name: rawTrack.trackName || '',
        collectionName: rawTrack.collectionName,
        previewUrl: rawTrack.previewUrl,
        releaseDate: rawTrack.releaseDate,
        trackPrice: rawTrack.trackPrice,
        imageUrl100: rawTrack.artworkUrl100,
        primaryGenreName: rawTrack.primaryGenreName
      }
      albums.add(track.collectionName)
      return track
    })
    tracks.albumCount = albums.size
    tracks.albums = Array.from(albums)
    this.tracksCache.set(bandName, tracks, 3600)
    res.send(tracks)
  }

  findAllTracks = async (
    req: express.Request,
    res: express.Response
  ) => {
    res.send(await this.trackRepository.findAll())
  }

  addTrack = async (req: express.Request, res: express.Response) => {
    await this.trackRepository.add(req.body)
    res.send()
  }
}
