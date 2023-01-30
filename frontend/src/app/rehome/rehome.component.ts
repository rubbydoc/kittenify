import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

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
// selectFile(event: any) {
//   if(!event.target.files[0] || event.target.files[0].length == 0) {
//     this.msg = 'You must select an image';
//     return;
//   }

//   var mimeType = event.target.files[0].type;

//   if (mimeType.match(/image\/*/) == null) {
//     this.msg = "Only images are supported";
//     return;
//   }

//   var reader = new FileReader();
//   reader.readAsDataURL(event.target.files[0]);

//   reader.onload = (_event) => {
//     this.msg = "";
//     this.url = reader.result;
//   }
// }
form: FormGroup;

uploadFile(event) {
  const file = (event.target as HTMLInputElement)?.files?.[0];
  this.form.patchValue({
    image: file,
  });
  // this.form.get('image')?.updateValueAndValidity();
}
constructor(private http:HttpClient,public fb: FormBuilder
  ){
    this.form = this.fb.group({
      name: [''],
      gender:[''],
      age:[''],
      color:[''],
      hair_length:[''],
      breed:[''],
      location:[''],
      spayed:[''],
      reason:[''],
      shots_upto_date:[''],
      story:[''],
      diet:[''],
      image:null,

    });
  }




onCreate(){
  var formData: any = new FormData();
  formData.append('name', this.form.get('name')?.value);
  formData.append('gender', this.form.get('gender')?.value);
  formData.append('age', this.form.get('age')?.value);
  formData.append('color', this.form.get('color')?.value);
  formData.append('hair_length', this.form.get('hair_length')?.value);
  formData.append('breed', this.form.get('breed')?.value);
  formData.append('location', this.form.get('location')?.value);
  formData.append('spayed', this.form.get('spayed')?.value);
  formData.append('reason', this.form.get('reason')?.value);
  formData.append('shots_upto_date', this.form.get('shots_upto_date')?.value);
  formData.append('story', this.form.get('story')?.value);
  formData.append('diet', this.form.get('diet')?.value);
  formData.append('image', this.form.controls['image'].value);

  this.http
    .post('http://localhost:8000/api/cats', formData)
    .subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });


}

}





