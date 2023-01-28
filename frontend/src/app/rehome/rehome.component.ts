import { Component, OnInit } from '@angular/core';

declare const nextForm: any;
declare const previousForm: any;




@Component({
  selector: 'app-rehome',
  templateUrl: './rehome.component.html',
  styleUrls: ['./rehome.component.css']
})
export class RehomeComponent {

//url; //Angular 8
url: any; //Angular 11, for stricter type
msg = "";

//selectFile(event) { //Angular 8
selectFile(event: any) { //Angular 11, for stricter type
  if(!event.target.files[0] || event.target.files[0].length == 0) {
    this.msg = 'You must select an image';
    return;
  }

  var mimeType = event.target.files[0].type;

  if (mimeType.match(/image\/*/) == null) {
    this.msg = "Only images are supported";
    return;
  }

  var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);

  reader.onload = (_event) => {
    this.msg = "";
    this.url = reader.result;
  }
}
}
