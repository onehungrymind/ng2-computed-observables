import { UUID } from 'angular2-uuid';
import { Item } from './items';

export interface UserItems {
  id: UUID,
  name: string
  items: Item[]
}