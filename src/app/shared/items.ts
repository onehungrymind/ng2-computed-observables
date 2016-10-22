import { UUID } from 'angular2-uuid';

export interface Item {
  id: UUID,
  name: string,
  userID: UUID
}

export interface Items extends Array<Item> {}
