import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';
import { WikipediaResponse } from './wikipedia-response';
import { Search } from './search';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  pages:Search[]=[];
  constructor(private service:WikipediaService){}
  onTerm(term:string){
 this.service.search(term).subscribe(res=>{this.pages=res.query.search

})   
  }
}


