import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserItems, UsersItemsService } from '../shared';

@Component({
  selector: 'app-users-items',
  templateUrl: './users-items.component.html',
  styleUrls: ['./users-items.component.css']
})
export class UsersItemsComponent {
  usersItems$: Observable<UserItems[]> = this.usersItemsService.getUsersItems();

  constructor(private usersItemsService: UsersItemsService) { }

}
