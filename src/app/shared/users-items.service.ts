import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import { AppStore } from '../app-store.model';
import { Item } from './item.model';
import { User } from './user.model';
import { UserItems } from './user-items.model';

@Injectable()
export class UsersItemsService {

  constructor(private store: Store<AppStore>) { }

  getUsersItems(): Observable<UserItems[]> {
    const users$: Observable<User[]> = this.store.select('users');
    const items$: Observable<Item[]> = this.store.select('items');

    return Observable.combineLatest(users$, items$, (users, items) => {
      return users.map(user => Object.assign({}, user, {
        items: items.filter(item => item.userId === user.id)
      }));
    });
  }
}
