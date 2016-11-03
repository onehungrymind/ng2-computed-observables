import { Item, User } from './shared';

export interface AppStore {
  users: User[],
  items: Item[]
}
