import { Component, OnInit } from '@angular/core';
import { Track } from 'src/app/interfaces/track';
import { TracksService } from 'src/app/services/tracks/tracks.service';

@Component({
  selector: 'app-list-favorites-tracks',
  templateUrl: './list-favorites-tracks.component.html',
  styleUrls: ['./list-favorites-tracks.component.sass'],
})
export class ListFavoritesTracksComponent implements OnInit {
  tracks: Track[] = [];
  title = 'Tus canciones favoritas';
  noTracks =
    'Aún no tienes ninguna canción en favoritos. Haz click en la estrella del card de la canción para agregar.';

  constructor(private trackService: TracksService) {}

  async ngOnInit() {
    this.tracks = await this.getFavTracks();
  }

  async getFavTracks(): Promise<Track[]> {
    return await this.trackService.getFavTracks();
  }
}
