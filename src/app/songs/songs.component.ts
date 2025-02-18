import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { SongCardComponent } from '../song-card/song-card.component';
import { FormsModule } from '@angular/forms';
import { SongRowComponent } from "../song-row/song-row.component";

@Component({
  selector: 'app-songs',
  imports: [SongCardComponent, FormsModule, SongRowComponent],
  templateUrl: './songs.component.html',
  styles: ``
})
export class SongsComponent {
  
  view:boolean = true

  constructor(private data:DataService) {}
  
  getSongs() {
    return this.data.getSongs()
  }
}
