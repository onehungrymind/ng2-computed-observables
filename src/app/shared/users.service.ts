import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';

@Injectable()
export class UsersService {

  constructor() { }

}

export interface User {
  id: UUID,
  name: string
}

export interface Users extends Array<User> {};
