import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  pages:{
    title:string,
    wordcount:string,
    snippet:string,
    pageid:number

  }[]=[];
  constructor(private service:WikipediaService){}
  onTerm(term:string){
 this.service.search(term).subscribe(res=>{this.pages=res.query.search;
console.log(res.query.search);
})   
  }
}


