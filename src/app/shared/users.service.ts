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

  initializeNewUser() {
    return {id: UUID.UUID, name: ''};
  }

  addUser(user) {
    this.store.dispatch({type: ADD_USER, payload: user});
  }

}

export interface User {
  id: UUID,
  name: string
}

export interface Users extends Array<User> {}

export const ADD_USER = 'ADD_USER';

const initialState: Users = [
  {id: 1, name: 'Victor Wooten'},
  {id: 2, name: 'Marcus Miller'},
  {id: 3, name: 'Jaco Pastorious'}
];

export const users: ActionReducer<Users> = (state: Users = initialState, action: Action) => {

  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload];
    default:
      return state;
  }
};
