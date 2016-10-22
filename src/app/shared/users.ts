import { UUID } from 'angular2-uuid';

export interface User {
  id: UUID,
  name: string
}

export interface Users extends Array<User> {}
