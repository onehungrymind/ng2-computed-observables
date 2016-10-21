import { Component, OnInit } from '@angular/core';
import { ItemsService, Items, UsersService, Users } from '../shared';

@Component({
  selector: 'app-users-items',
  templateUrl: './users-items.component.html',
  styleUrls: ['./users-items.component.css']
})
export class UsersItemsComponent implements OnInit {
  items: Items = this.itemsService.getItems();
  users: Users= this.usersService.getUsers();

  constructor(
    private itemsService: ItemsService,
    private usersService: UsersService
  ) { }

  ngOnInit() {
  }

}
