import { Component, Input, OnInit } from '@angular/core';

import { Track } from 'src/app/interfaces/track';
import { TracksService } from 'src/app/services/tracks/tracks.service';

@Component({
  selector: 'app-card-track',
  templateUrl: './card-track.component.html',
  styleUrls: ['./card-track.component.sass'],
})
export class CardTrackComponent implements OnInit {
  @Input() tracks: Track[] = [];
  @Input() hasFavSelection: boolean = false;

  constructor(private trackService: TracksService) {}

  ngOnInit(): void {}
  
  async saveToFavs(track: Track) {
    await this.trackService.saveFavTrack(track);
  }
}
