import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFavoritesTracksComponent } from './components/list-favorites-tracks/list-favorites-tracks.component';
import { SearchTracksComponent } from './components/search-tracks/search-tracks.component';

const routes: Routes = [
  { path: 'favorite-tracks', component: ListFavoritesTracksComponent },
  { path: '', component: SearchTracksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
