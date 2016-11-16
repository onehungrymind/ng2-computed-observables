/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { UsersService, initialUsers, ADD_USER, users } from './users.service';
import { AppStore } from '../app-store.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

const mockStore = {
  select: () => Observable.of(initialUsers),
  dispatch: () => {}
};

describe('Service: Users', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UsersService,
        {provide: Store, useValue: mockStore}
      ]
    });
  });

  it('should exist', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));

  it('#getUsers should select users from the store',
    inject([UsersService, Store], (service: UsersService, store: Store<AppStore>) => {
      const spy = spyOn(store, 'select');
      service.getUsers();

      expect(spy).toHaveBeenCalledWith('users');
    }));

  it('#getUsers should select users from the store', inject([UsersService], (service: UsersService) => {
    service.getUsers().subscribe(users => {
      expect(users).toEqual(initialUsers);
    });
  }));

  it('#initializeNewUser should return filled out user', inject([UsersService], (service: UsersService) => {
    const newUser = service.initializeNewUser();

    expect(newUser.id).toBeDefined();
    expect(newUser.name).toEqual('');
  }));

  it('reducer should return initial state by default', () => {
    const output = users(initialUsers, {type: 'DEFAULT', payload: {}});
    const expected = initialUsers;
    expect(output).toEqual(expected);
  });

  it('reducer should add user to state', inject([UsersService], (service: UsersService) => {
    let newUser = service.initializeNewUser();
    newUser.name = 'Test';

    const output = users(initialUsers, {type: ADD_USER, payload: newUser});
    const expected = [...initialUsers, newUser];
    expect(output).toEqual(expected);
  }));

  it('#addUser should dispatch an action to the reducer',
    inject([UsersService, Store], (service: UsersService, store: Store<AppStore>) => {
      const spy = spyOn(store, 'dispatch');
      service.addUser({});
      expect(spy).toHaveBeenCalledWith({type: ADD_USER, payload: {}});
    }));
});
