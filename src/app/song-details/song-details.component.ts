import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { SecondsToMinSecsPipe } from '../seconds-to-min-secs.pipe';

@Component({
  selector: 'app-song-details',
  imports: [ SecondsToMinSecsPipe ],
  templateUrl: './song-details.component.html',
  styles: ``
})
export class SongDetailsComponent {

  song:any

  constructor(private route:ActivatedRoute,
              private data:DataService) { }  
  
  getArtistNameById(id:number) {
    return this.data.getArtistById(id).name
  }

  ngOnInit() {  
    let songId = this.route.snapshot.paramMap.get('id') || "";
    this.song = this.data.getSongById(parseInt(songId))
  }  
}
