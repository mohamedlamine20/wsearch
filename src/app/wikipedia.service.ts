import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pluck } from 'rxjs';
import { WikipediaResponse } from './wikipedia-response';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private http:HttpClient) { }

  search(term:string):Observable<WikipediaResponse>{
    return this.http.get<WikipediaResponse>('https://en.wikipedia.org/w/api.php',{params:{
      action:'query',
      format:'json',
      list:'search',
      utf8:'1',
      srsearch:term,
      origin:'*'
    }})
  }
}
