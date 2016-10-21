import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ItemsService, Items, UsersService, Users, User, UserItem } from '../shared';

@Component({
  selector: 'app-users-items',
  templateUrl: './users-items.component.html',
  styleUrls: ['./users-items.component.css']
})
export class UsersItemsComponent implements OnInit {
  items: Observable<Items> = this.itemsService.getItems();
  users: Observable<any>;

  constructor(
    private itemsService: ItemsService,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    // Temporary
    this.users = this.usersService.getUsers()
      .map((users: any) => {
        return users
          .map(user => Object.assign({}, user, {userName: user.name, items: this.items}));
      });
  }

}
