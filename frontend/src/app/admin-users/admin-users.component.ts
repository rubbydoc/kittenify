import { UserService } from './../Services/user.service';
import { Component } from '@angular/core';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent {
  Users: any = [];
  constructor(public userService: UserService, public auth: AuthService) {}
  ngOnInit() {
    this.fetchUsers();
  }
  fetchUsers() {
    return this.userService.getUsers().subscribe((res: {}) => {
      this.Users = res;
    });
  }
  delete(id: any) {
    if (window.confirm('Really?')) {
      this.userService.deleteUser(id).subscribe((res) => {
        this.fetchUsers();
      });
    }}

    isSignedIn!: boolean;
 

  logout() {
    this.auth.doLogout();
  }
}
