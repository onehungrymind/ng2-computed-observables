import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UsersService, Users } from '../shared';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Observable<Users> = this.usersService.getUsers();

  constructor(private usersService: UsersService) { }

  ngOnInit() {

  }

}
