import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UsersService, Users, User } from '../shared';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users$: Observable<Users> = this.usersService.getUsers();
  shouldShowNewUser: boolean = false;
  newUser: User = this.usersService.initializeNewUser();

  constructor(private usersService: UsersService) { }

  toggleNewUser(): void {
    this.shouldShowNewUser = !this.shouldShowNewUser;

    if (!this.shouldShowNewUser)
      this.newUser = this.usersService.initializeNewUser();
  }

  addUser(): void {
    this.usersService.addUser(this.newUser);
    this.newUser = this.usersService.initializeNewUser();
  }
}
