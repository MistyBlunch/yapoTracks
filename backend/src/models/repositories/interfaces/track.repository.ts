import { Track } from '../../track'

export interface TrackRepositoryInterface {
  add(user: Track): Promise<void>
  findAll(): Promise<Track[]>
}
