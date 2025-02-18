import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsToMinSecs'
})
export class SecondsToMinSecsPipe implements PipeTransform {

  transform(totalSeconds: number): string {
    let minutes = Math.floor(totalSeconds / 60)
    let seconds = totalSeconds % 60
    let secondsString = seconds < 10 ? "0" + seconds : seconds
    return minutes + ":" + secondsString;
  }

}
