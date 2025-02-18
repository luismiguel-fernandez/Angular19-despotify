import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SongsComponent } from "./songs/songs.component";
import { HeaderComponent } from "./header/header.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SongsComponent, HeaderComponent, NavBarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular19-despotify';
}
