import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { LostFound } from '../lostfound.model';
import { AuthService } from '../Services/auth.service';
import { LostFoundService } from '../Services/lost-found.service';

@Component({
  selector: 'app-lostnfound-list',
  templateUrl: './lostnfound-list.component.html',
  styleUrls: ['./lostnfound-list.component.css']
})
export class LostnfoundListComponent {
  lostFounds$!: Observable<LostFound[]>;
  constructor(private http:HttpClient,public fb: FormBuilder, private lostFoundService: LostFoundService, private route: ActivatedRoute,  public auth: AuthService,
    ){
  }
  $url: any = 'http://localhost:8000/storage/lost_n_found/';

  ngOnInit():void{
  
    this.lostFounds$ = this.route.paramMap.pipe(
      switchMap(params => {
        return this.lostFoundService.getLostFounds();
      })
    );
  
  
  }

  isSignedIn!: boolean;



  logout() {
    this.auth.doLogout();
  }

}
