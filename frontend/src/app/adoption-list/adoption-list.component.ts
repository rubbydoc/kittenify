import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Cat } from '../cat.model';
import { AuthService } from '../Services/auth.service';
import { CatService } from '../Services/cat.service';

@Component({
  selector: 'app-adoption-list',
  templateUrl: './adoption-list.component.html',
  styleUrls: ['./adoption-list.component.css']
})
export class AdoptionListComponent {
  cats!: Cat[];

  cats$!: Observable<Cat[]>;
  $url: any = 'http://localhost:8000/storage/cats/';
  constructor(private http: HttpClient, private catService: CatService,  private route: ActivatedRoute, public auth: AuthService,) {}

  ngOnInit() {
    this.cats$ = this.route.paramMap.pipe(
      switchMap(params => {
        return this.catService.getCats();
      })
    );
  }

  isSignedIn!: boolean;



  logout() {
    this.auth.doLogout();
  }

}
