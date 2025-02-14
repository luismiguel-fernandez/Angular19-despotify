import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-songs',
  imports: [],
  templateUrl: './songs.component.html',
  styles: ``
})
export class SongsComponent {
  private songs:any[] = []
  
  constructor(private data:DataService) {
    this.getSongsFromApi()
  }
  
  getSongsFromApi() {
    this.data.getSongs().subscribe(
      json => {
        let temp:any = json
        this.songs = temp
        console.log(this.songs)
      }
    )
  }

  getSongs() {
    return this.songs
  }
}
