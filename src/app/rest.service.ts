import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(public http: HttpClient) { 
    console.log('Hello RestServiceProvider Provider');
  }

  getMovies(searchTerm) {
    return new Promise(resolve => {
      this.http.get('http://www.omdbapi.com/?s=%22'+searchTerm+'%22&type=%22movie%22&apikey=2a89c54e').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getMovieDetails(movie) {
    return new Promise(resolve => {
      this.http.get('http://www.omdbapi.com/?t=%22'+movie+'%22&plot=%22full%22&apikey=2a89c54e').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
