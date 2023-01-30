import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import 'rxjs/Rx';

export interface Cat {
  id: Number,
  name: String,
  gender: String,
age: String,
color:String,
hair_length:String,
breed:String,
location:String,
spayed:String,
reason:String,
shots_upto_date:String,
story:String,
diet:String,
image:String
}

const API_URL: string = 'http://localhost:8000/api';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  headers: any;

  constructor(private http:HttpClient) {
  }


  getCats(): Observable<Cat[]> {
    return this.http.get(API_URL + '/cats')
    .pipe(map((res:any) => res.json().data));
}
}
