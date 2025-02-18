import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = "https://my-json-server.typicode.com/luismiguel-fernandez/examen/"

  private songs:any[] = []
  private artists:any[] = []
  private playlists:any[] = []

  constructor(private http:HttpClient) {
    this.http.get(this.baseUrl + "songs").subscribe(
      (json:any) => {
        this.songs = json
      }
    )
    this.http.get(this.baseUrl + "artists").subscribe(
      (json:any) => {
        this.artists = json
      }
    )
    this.http.get(this.baseUrl + "playlists").subscribe(
      (json:any) => {
        this.playlists = json
      }
    )
  }

  addToPlaylist(song:any) {
    if (!this.isAlreadyInPlaylist(song)) {
      this.playlists[this.playlists.length-1].songs.push(song.id)
    }
  }

  getArtistById(id:number) {
    return this.artists.find( a => a.id == id )
  }

  getPlaylists() {
    return this.playlists
  }

  getSongs() {
    return this.songs
  }

  isAlreadyInPlaylist(song:any) {
    return this.playlists[this.playlists.length-1].songs.find( (s:number) => s == song.id )
  }

  removeFromPlaylist(song:any) {
    let position = this.playlists[this.playlists.length-1].songs.findIndex( (s:number) => s == song.id )
    this.playlists[this.playlists.length-1].songs.splice(position,1)
  }
}
