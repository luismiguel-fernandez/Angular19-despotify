import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';
import { SecondsToMinSecsPipe } from '../seconds-to-min-secs.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-song-card',
  imports: [ SecondsToMinSecsPipe, RouterLink ],
  templateUrl: './song-card.component.html',
  styles: ``
})
export class SongCardComponent {
  @Input() song:any

  constructor(private data:DataService) {}

  addToPlaylist() {
    this.data.addToPlaylist(this.song)
  }
  
  getArtistById(id:number) {
    return this.data.getArtistById(id)
  }

  isAlreadyInPlaylist() {
    return this.data.isAlreadyInPlaylist(this.song)
  }

  removeFromPlaylist() {
    this.data.removeFromPlaylist(this.song)
  }
}
