import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UsersItems, UsersItemsService } from '../shared';

@Component({
  selector: 'app-users-items',
  templateUrl: './users-items.component.html',
  styleUrls: ['./users-items.component.css']
})
export class UsersItemsComponent implements OnInit {
  usersItems$: Observable<UsersItems> = this.usersItemsService.getUsersItems();

  constructor(private usersItemsService: UsersItemsService) { }

  ngOnInit() {
  }

}
