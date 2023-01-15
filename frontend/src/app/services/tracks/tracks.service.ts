import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';

import { environment } from '../../environments/environment';

import { Track } from 'src/app/interfaces/track';

@Injectable({
  providedIn: 'root',
})
export class TracksService {
  constructor(private http: HttpClient) {}

  async getFavTracks(): Promise<Track[]> {
    const source = this.getFavTracksRequest();
    const tracks = await firstValueFrom(source);
    return tracks;
  }

  getFavTracksRequest(): Observable<Track[]> {
    return this.http.get<Track[]>(`${environment.apiUrl}/tracks`);
  }

  async getTracksByBand(band: string): Promise<Track[]> {
    const source = this.getTracksByBandRequest(band);
    const tracks = await firstValueFrom(source);
    return tracks.results;
  }

  getTracksByBandRequest(band: string): Observable<{ results: Track[] }> {
    return this.http.get<{ results: Track[] }>(
      `${environment.apiUrl}/tracksByApi`,
      { params: { term: band } }
    );
  }

  async saveFavTrack(track: Track): Promise<void> {
    await this.saveFavTrackRequest(track);
  }

  async saveFavTrackRequest(track: Track) {
    await firstValueFrom(
      this.http.post<Track>(`${environment.apiUrl}/track`, track)
    );
  }
}
