import { CatService } from './../Services/cat.service';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Cat } from '../cat.model';

@Component({
  selector: 'app-adoption-detail',
  templateUrl: './adoption-detail.component.html',
  styleUrls: ['./adoption-detail.component.css']
})
export class AdoptionDetailComponent {
  cats$: any;
  selectedId = 0;
  cat$!: Observable<Cat>;
  $url: any = 'http://localhost:8000/storage/cats/';


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CatService
  ) {}

  ngOnInit() {
    this.cat$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getCat(params.get('id')!))
    );

  }
}
