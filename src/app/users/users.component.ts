import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UsersService, Users, User } from '../shared';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Observable<Users> = this.usersService.getUsers();
  shouldShowNewUser: boolean = false;
  newUser: User = this.usersService.initializeNewUser();

  constructor(private usersService: UsersService) { }

  ngOnInit() {

  }

  toggleNewUser() {
    this.shouldShowNewUser = !this.shouldShowNewUser;

    if (!this.shouldShowNewUser)
      this.newUser = this.usersService.initializeNewUser();
  }

  addUser() {
    this.usersService.addUser(this.newUser);
    this.newUser = this.usersService.initializeNewUser();
  }
}
