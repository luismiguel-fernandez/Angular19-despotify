import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';
import { SecondsToMinSecsPipe } from '../seconds-to-min-secs.pipe';

@Component({
  selector: 'app-song-row',
  imports: [ SecondsToMinSecsPipe ],
  templateUrl: './song-row.component.html',
  styles: ``
})
export class SongRowComponent {

  @Input() song:any

  constructor(private data:DataService) {}

  getArtistById(id:number) {
    return this.data.getArtistById(id)
  }
}
