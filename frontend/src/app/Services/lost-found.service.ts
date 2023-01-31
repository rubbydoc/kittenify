import { LostFound } from './../lostfound.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LostFoundService {

  constructor(private http:HttpClient) { }



getLostFounds(): Observable<LostFound[]> {
  const headers = new HttpHeaders({'Content-Type': 'application/json'});
  return this.http.get<LostFound[]>('http://localhost:8000/api/lostnfound-cats', {headers: headers});
     }


     getLostFound(id: number | string) {
      return this.getLostFounds().pipe(
        map((lostFounds: LostFound[]) => lostFounds.find(lostFound => lostFound.id === +id)!)
      );
    }
}
