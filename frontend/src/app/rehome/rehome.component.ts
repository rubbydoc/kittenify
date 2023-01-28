import { Component, OnInit } from '@angular/core';

declare const nextButton: any;
declare const prevButton: any;



@Component({
  selector: 'app-rehome',
  templateUrl: './rehome.component.html',
  styleUrls: ['./rehome.component.css']
})
export class RehomeComponent {

  
  

 

  next(){
    nextButton();

  }

  previous(){
    prevButton();
  }
}
