import { Component, OnInit } from '@angular/core';
import { UsersService, Users } from '../shared';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Users = this.usersService.getUsers();

  constructor(private usersService: UsersService) { }

  ngOnInit() {

  }

}
