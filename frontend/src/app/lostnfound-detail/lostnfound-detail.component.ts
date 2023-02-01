import { LostFound } from './../lostfound.model';
import { LostFoundService } from './../Services/lost-found.service';
import { Component } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-lostnfound-detail',
  templateUrl: './lostnfound-detail.component.html',
  styleUrls: ['./lostnfound-detail.component.css']
})
export class LostnfoundDetailComponent {
  selectedId = 0;
  lostFound$!: Observable<LostFound>;
  $url = 'http://localhost:8000/storage/lost_n_found/';


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: LostFoundService,

  ) {}

  ngOnInit() {
    this.lostFound$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getLostFound(params.get('id')!))
    );
  }

}
