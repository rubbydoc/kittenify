import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-adoption',
  templateUrl: './adoption.component.html',
  styleUrls: ['./adoption.component.css']
})
export class AdoptionComponent {

cats : any;
$url :any = 'http://localhost:8000/storage/cats/';
constructor(private http:HttpClient){}

ngOnInit(): void {
  this.http.get('http://localhost:8000/api/cats')
  .subscribe(
    (response)=>{this.cats=response;},
    (error) => { console.log(error); }
  );

};

}
