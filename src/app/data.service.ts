import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getSongs() {
    return this.http.get("https://my-json-server.typicode.com/luismiguel-fernandez/examen/songs")
  }
}
