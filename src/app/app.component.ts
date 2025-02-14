import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SongsComponent } from "./songs/songs.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SongsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular19-despotify';
}
