import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {

  constructor(private data:DataService) {}

  getNumberOfSongs() { return this.data.getSongs().length }
  getNumberOfPlaylists() { return this.data.getPlaylists().length }
  getAverageSongsInPlaylists() {
    let avg = 0
    //en construccion
    return avg
  }

}
