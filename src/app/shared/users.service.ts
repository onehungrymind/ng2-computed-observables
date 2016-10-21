import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';

@Injectable()
export class UsersService {

  constructor() { }

  getUsers() {
    return users;
  }

}

export interface User {
  id: UUID,
  name: string
}

export interface Users extends Array<User> {}

const users: Users = [
  {id: 1, name: 'Victor Wooten'},
  {id: 2, name: 'Marcus Miller'},
  {id: 3, name: 'Jaco Pastorious'}
];
