import { Injectable } from '@angular/core';
import { ActionReducer, Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { UUID } from 'angular2-uuid';
import { AppStore } from '../app-store.model';
import { User } from './user.model';

export const ADD_USER = 'ADD_USER';

@Injectable()
export class UsersService {

  constructor(private store: Store<AppStore>) { }

  getUsers(): Observable<User[]> {
    return this.store.select('users');
  }

  initializeNewUser(): User {
    return {id: UUID.UUID(), name: ''};
  }

  addUser(user): void {
    this.store.dispatch({type: ADD_USER, payload: user});
  }
}

export const initialUsers: User[] = [
  {id: '1', name: 'Victor Wooten'},
  {id: '2', name: 'Marcus Miller'},
  {id: '3', name: 'Jaco Pastorious'}
];

export const users: ActionReducer<User[]> = (state: User[] = initialUsers, action: Action) => {

  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload];
    default:
      return state;
  }
};
