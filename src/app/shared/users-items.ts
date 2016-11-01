import { Items } from './items';
import { User } from './users';

export interface UserItem extends User {
  items: Items
}

export interface UsersItems extends Array<UserItem> {}
