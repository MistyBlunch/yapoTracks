import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { SearchTracksComponent } from './components/search-tracks/search-tracks.component';
import { ListFavoritesTracksComponent } from './components/list-favorites-tracks/list-favorites-tracks.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IndexComponent } from './views/index/index.component';
import { CardTrackComponent } from './components/card-track/card-track.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchTracksComponent,
    ListFavoritesTracksComponent,
    NavbarComponent,
    IndexComponent,
    CardTrackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
