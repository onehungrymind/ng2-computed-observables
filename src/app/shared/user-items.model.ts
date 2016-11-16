import { Item } from './item.model';

export interface UserItems {
  id: string,
  name: string
  items: Item[]
}