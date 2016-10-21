import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ItemsService, UsersService, Items, Item, Users } from '../shared';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Observable<Items> = this.itemsService.getItems();
  users: Observable<Users> = this.usersService.getUsers();
  shouldShowNewItem: boolean = false;
  newItem: Item = this.itemsService.initializeNewItem();

  constructor(
    private itemsService: ItemsService,
    private usersService: UsersService
  ) { }

  ngOnInit() {
  }

  toggleNewItem() {
    this.shouldShowNewItem = !this.shouldShowNewItem;

    if (!this.shouldShowNewItem)
      this.newItem = this.itemsService.initializeNewItem();
  }

  addItem() {
    this.itemsService.addItem(this.newItem);
    this.newItem = this.itemsService.initializeNewItem();
  }

}
