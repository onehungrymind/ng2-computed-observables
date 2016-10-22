import { Injectable } from '@angular/core';
import { ActionReducer, Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { UUID } from 'angular2-uuid';
import { AppStore } from '../app-store';
import { User, Users } from './users';

@Injectable()
export class UsersService {

  constructor(private store: Store<AppStore>) { }

  getUsers(): Observable<Users> {
    return this.store.select('users');
  }

  initializeNewUser(): User {
    return {id: UUID.UUID, name: ''};
  }

  addUser(user): void {
    this.store.dispatch({type: ADD_USER, payload: user});
  }

}

export const ADD_USER: string = 'ADD_USER';

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
