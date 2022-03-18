import { Component } from '@angular/core';

@Component({
  selector: 'ccd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


  //used to manipulate contents showing when filter has not loaded
  emptyPage(): boolean {
    const content = document.getElementById('wrapper')
    if(content){
      return false
    }
    else{
      return true
    }
  }
}
