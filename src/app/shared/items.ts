import { UUID } from 'angular2-uuid';

export interface Item {
  id: UUID,
  name: string,
  userID: UUID
}