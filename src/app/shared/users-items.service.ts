import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import { AppStore } from '../app-store';
import { Items } from './items';
import { Users } from './users';
import { UsersItems } from './users-items';

@Injectable()
export class UsersItemsService {

  constructor(private store: Store<AppStore>) { }

  getUsersItems(): Observable<UsersItems> {
    const users$: Observable<Users> = this.store.select('users');
    const items$: Observable<Items> = this.store.select('items');

    return Observable.combineLatest(users$, items$, (users, items) => {
      return users.map(user => Object.assign({}, user, {
        items: items.filter(item => item.userID == user.id)
      }));
    });
  }

}
