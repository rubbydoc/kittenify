import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry, catchError, throwError } from 'rxjs';


export class User {
  id?: number;
  name?: string;
  email?: string;
  address?:string;
  phone?:string;
  role?: string;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  endpoint = 'http://localhost:8000/api';
  constructor(private httpClient: HttpClient) {}
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  getUsers(): Observable<User> {
    return this.httpClient
      .get<User>(this.endpoint + '/users')
      .pipe(retry(1), catchError(this.processError));
  }
  getSingleUser(id: any): Observable<User> {
    return this.httpClient
      .get<User>(this.endpoint + '/users/' + id)
      .pipe(retry(1), catchError(this.processError));
  }
  addUser(data: any): Observable<User> {
    return this.httpClient
      .post<User>(
        this.endpoint + '/users',
        JSON.stringify(data),
        this.httpHeader
      )
      .pipe(retry(1), catchError(this.processError));
  }
  updateUser(id: any, data: any): Observable<User> {
    return this.httpClient
      .put<User>(
        this.endpoint + '/users/' + id,
        JSON.stringify(data),
        this.httpHeader
      )
      .pipe(retry(1), catchError(this.processError));
  }
  deleteUser(id: any) {
    return this.httpClient
      .delete<User>(this.endpoint + '/users/' + id, this.httpHeader)
      .pipe(retry(1), catchError(this.processError));
  }
  processError(err: any) {
    let message = '';
    if (err.error instanceof ErrorEvent) {
      message = err.error.message;
    } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(() => {
      message;
    });
  }
}
