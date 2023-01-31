import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cat } from '../cat.model';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  

  constructor(private http:HttpClient) { }



getCats(): Observable<Cat[]> {
  const headers = new HttpHeaders({'Content-Type': 'application/json'});
  return this.http.get<Cat[]>('http://localhost:8000/api/cats', {headers: headers});
     }


     getCat(id: number | string) {
      return this.getCats().pipe(
        map((cats: Cat[]) => cats.find(cat => cat.id === +id)!)
      );
    }
  }

