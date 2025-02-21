import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SongsComponent } from './songs/songs.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { Page404Component } from './page404/page404.component';
import { SongDetailsComponent } from './song-details/song-details.component';

export const routes: Routes = [
    { path: "home" , component: HomeComponent },
    { path: "songs" , component: SongsComponent },
    { path: "song/:id" , component: SongDetailsComponent },
    { path: "playlists" , component: PlaylistsComponent },
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "**", component: Page404Component }
];
