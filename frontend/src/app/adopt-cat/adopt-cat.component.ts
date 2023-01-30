import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-adopt-cat',
  templateUrl: './adopt-cat.component.html',
  styleUrls: ['./adopt-cat.component.css']
})
export class AdoptCatComponent {




constructor(private http:HttpClient, private activatedRoute: ActivatedRoute){}




}
