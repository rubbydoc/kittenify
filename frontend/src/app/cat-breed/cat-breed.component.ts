import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-cat-breed',
  templateUrl: './cat-breed.component.html',
  styleUrls: ['./cat-breed.component.css']
})
export class CatBreedComponent {
  constructor(private route:ActivatedRoute){}
name=null;
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
  }

}
