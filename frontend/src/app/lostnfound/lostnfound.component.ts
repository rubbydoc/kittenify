import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lostnfound',
  templateUrl: './lostnfound.component.html',
  styleUrls: ['./lostnfound.component.css']
})
export class LostnfoundComponent {

form!: FormGroup;
files:any;
  
uploadImage(event){
  this.files = event.target.files[0];
}

constructor(private http:HttpClient,public fb: FormBuilder
  ){
    

   



}

ngOnInit():void{
  this.createForm();
}

createForm(){
  this.form = this.fb.group({
    name: [''],
    location: [''],
    gender:[''],
    date:[''],
    description:[''],
    image:[null],
  });

  


}

get f(){
  return this.form.controls;
}



onCreateFound(){
  var formData: any = new FormData();
  formData.append('location', this.form.get('location')?.value);
  formData.append('gender', this.form.get('gender')?.value);
  formData.append('date', this.form.get('date')?.value);
  formData.append('description', this.form.get('description')?.value);
  formData.append('image', this.files, this.files.name);

  this.http
    .post('http://localhost:8000/api/found-cats', formData)
    .subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });


}

onCreateLost(){
  var formData: any = new FormData();
  formData.append('name', this.form.get('name')?.value);
  formData.append('location', this.form.get('location')?.value);
  formData.append('gender', this.form.get('gender')?.value);
  formData.append('date', this.form.get('date')?.value);
  formData.append('description', this.form.get('description')?.value);
  formData.append('image', this.files, this.files.name);

  this.http
    .post('http://localhost:8000/api/lost-cats', formData)
    .subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });


}
}
