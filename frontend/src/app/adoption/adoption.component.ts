import { CatService } from './../Services/cat.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Cat } from '../cat.model';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-adoption',
  templateUrl: './adoption.component.html',
  styleUrls: ['./adoption.component.css'],
})
export class AdoptionComponent {
  cats!: Cat[];

  cats$!: Observable<Cat[]>;
  selectedId = 0;
  $url: any = 'http://localhost:8000/storage/cats/';
  constructor(private http: HttpClient, private catService: CatService,  private route: ActivatedRoute) {}

  ngOnInit() {
    this.cats$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!);
        return this.catService.getCats();
      })
    );
  }

 
}
