import { Component } from '@angular/core';

import { Track } from 'src/app/interfaces/track';
import { TracksService } from 'src/app/services/tracks/tracks.service';

@Component({
  selector: 'app-search-tracks',
  templateUrl: './search-tracks.component.html',
  styleUrls: ['./search-tracks.component.sass'],
})
export class SearchTracksComponent {
  title: string = 'Busca canciones de cualquier banda';
  band: string = '';
  tracks: Track[] = [];

  constructor(private trackService: TracksService) {}

  async searchTracks(band: string) {
    this.tracks = await this.trackService.getTracksByBand(band);
  }
}
