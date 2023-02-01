import { Component } from '@angular/core';
import { CatService } from '../Services/cat.service';


@Component({
  selector: 'app-adoption-list',
  templateUrl: './adoption-list.component.html',
  styleUrls: ['./adoption-list.component.css']
})
export class AdoptionListComponent {
  $url!: 'http://localhost:8000/storage/cats';

  constructor(private catService: CatService){
    this.getCats();
  }

  cats: any;
getCats(){
this.catService.getCats().subscribe(
  (response)=>{this.cats=response;},
    (error) => { console.log(error); }
);

}
}
