import { LostFoundService } from './../Services/lost-found.service';
import { LostFound } from './../lostfound.model';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-lostnfound',
  templateUrl: './lostnfound.component.html',
  styleUrls: ['./lostnfound.component.css']
})
export class LostnfoundComponent {

form!: FormGroup;
files:any;
lostFounds$!: Observable<LostFound[]>;

  selectedId = 0;
  $url: any = 'http://localhost:8000/storage/lost_n_found/';


uploadImage(event){
  this.files = event.target.files[0];
}

constructor(private http:HttpClient,public fb: FormBuilder, private lostFoundService: LostFoundService, private route: ActivatedRoute
  ){
}

ngOnInit():void{
  this.createForm();

  this.lostFounds$ = this.route.paramMap.pipe(
    switchMap(params => {
      this.selectedId = parseInt(params.get('id')!);
      return this.lostFoundService.getLostFounds();
    })
  );


}

createForm(){
  this.form = this.fb.group({
    name: [''],
    location: [''],
    gender:[''],
    date:[''],
    description:[''],
    image:[null],
    status: [''],
  });




}

get f(){
  return this.form.controls;
}



onCreateFound(){
  var formData: any = new FormData();
  formData.append('name', 'Unknown');
  formData.append('location', this.form.get('location')?.value);
  formData.append('gender', this.form.get('gender')?.value);
  formData.append('date', this.form.get('date')?.value);
  formData.append('description', this.form.get('description')?.value);
  formData.append('image', this.files, this.files.name);
  formData.append('status', 'found');

  this.http
    .post('http://localhost:8000/api/lostnfound-cats', formData)
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
  formData.append('status', 'lost');


  this.http
    .post('http://localhost:8000/api/lostnfound-cats', formData)
    .subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });


}
}
