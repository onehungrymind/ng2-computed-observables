/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { UsersItemsService } from './users-items.service';
import { initialUsers } from './users.service';
import { initialItems } from './items.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

const mockStore = {
  select: (entity) => {
    const store = {
      users: initialUsers,
      items: initialItems
    };

    return Observable.of(store[entity]);
  },
  dispatch: () => {}
};

describe('Service: UsersItems', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UsersItemsService,
        {provide: Store, useValue: mockStore}
      ]
    });
  });

  it('should exist', inject([UsersItemsService], (service: UsersItemsService) => {
    expect(service).toBeTruthy();
  }));

  it('should combine users and items into new format', inject([UsersItemsService], (service: UsersItemsService) => {
    const output = service.getUsersItems();
    const expected = initialUsers.map(user => Object.assign({}, user, {
      items: initialItems.filter(item => item.userID === user.id)
    }));

    output.subscribe(usersItems => expect(usersItems).toEqual(expected));
  }));
});
