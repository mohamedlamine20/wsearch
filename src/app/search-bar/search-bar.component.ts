import { Component ,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() submited=new EventEmitter<string>();
  term='';

  onInput(input:any){
    this.term=input.value
  }

  onFormSubmit(event:Event){
    event.preventDefault();
    this.submited.emit(this.term) 
    
  }

}
