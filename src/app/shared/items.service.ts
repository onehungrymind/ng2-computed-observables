import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';

@Injectable()
export class ItemsService {

  constructor() { }

  getItems() {
    return items;
  }

}

export interface Item {
  id: UUID,
  name: string,
  userID: UUID
}

export interface Items extends Array<Item> {}


const items: Items = [
  {id: 1, name: 'Item 1', userID: 3},
  {id: 2, name: 'Item 2', userID: 2},
  {id: 3, name: 'Item 3', userID: 1}
];
