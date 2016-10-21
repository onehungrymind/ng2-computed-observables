import { Injectable } from '@angular/core';
import { ActionReducer, Action, Store } from '@ngrx/store';
import { UUID } from 'angular2-uuid';
import { AppStore } from '../app-store';

@Injectable()
export class UsersService {

  constructor(private store: Store<AppStore>) { }

  getUsers() {
    return this.store.select('users');
  }

}

export interface User {
  id: UUID,
  name: string
}

export interface Users extends Array<User> {}

const initialState: Users = [
  {id: 1, name: 'Victor Wooten'},
  {id: 2, name: 'Marcus Miller'},
  {id: 3, name: 'Jaco Pastorious'}
];

export const users: ActionReducer<Users> = (state: Users = initialState, action: Action) => {

  switch (action.type) {
    default:
      return state;
  }
};
