import { Items } from './items';

export interface UserItem {
  userName: string,
  items: Items
}

export interface UsersItems extends Array<UserItem> {}
