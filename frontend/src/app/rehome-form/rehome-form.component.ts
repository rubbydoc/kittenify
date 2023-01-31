import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rehome-form',
  templateUrl: './rehome-form.component.html',
  styleUrls: ['./rehome-form.component.css']
})
export class RehomeFormComponent {

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
      image:[null],
    });
  
  
  
  }
  
  get f(){
    return this.form.controls;
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
    formData.append('image', this.files, this.files.name);
  
    this.http
      .post('http://localhost:8000/api/cats', formData)
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => console.log(error),
      });
  
  
  }
  successNotification() {
    Swal.fire('Hi', 'We have been informed!', 'success');
  }

}
