import { Injectable } from '@angular/core';
import { Items } from './items.service';

@Injectable()
export class UsersItemsService {

  constructor() { }

}

export interface UserItem {
  userName: string,
  items: Items
}
