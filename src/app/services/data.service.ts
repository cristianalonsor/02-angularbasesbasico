import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }

  // tslint:disable-next-line: typedef
  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe( tap(console.log ));
  }
}
