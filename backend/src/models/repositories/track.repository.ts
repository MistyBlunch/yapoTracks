import { Track } from '../track'
import { TrackRepositoryInterface } from './interfaces/track.repository'

import { Schema, Model, model, Types } from 'mongoose'

export class TrackRepository implements TrackRepositoryInterface {
  schema: Schema
  model: Model<Track>

  constructor() {
    this.schema = new Schema<Track>({
      name: { type: String },
      collectionName: { type: String },
      previewUrl: { type: String },
      releaseDate: { type: String },
      trackPrice: { type: Number },
      imageUrl100: { type: String },
      primaryGenreName: { type: String },
    })

    this.model = model<Track>('Track', this.schema)
  }

  toObjectId(id: string): Types.ObjectId {
    try {
      return new Types.ObjectId(id)
    } catch {
      throw new Error('Invalid ID')
    }
  }

  public async add(track: Track): Promise<void> {
    const doc = new this.model(track)
    await doc.save()
  }

  public async findAll(): Promise<Track[]> {
    return await this.model.find()
  }
}
