import { Injectable } from '@angular/core';
import { ActionReducer, Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { UUID } from 'angular2-uuid';
import { AppStore } from '../app-store';
import { Item } from './items';

export const ADD_ITEM = 'ADD_ITEM';

@Injectable()
export class ItemsService {

  constructor(private store: Store<AppStore>) { }

  getItems(): Observable<Item[]> {
    return this.store.select('items');
  }

  initializeNewItem(): Item {
    return {id: UUID.UUID(), name: '', userID: undefined};
  }

  addItem(user): void {
    this.store.dispatch({type: ADD_ITEM, payload: user});
  }

}

export const initialItems: Item[] = [
  {id: 1, name: 'Item 1', userID: 3},
  {id: 2, name: 'Item 2', userID: 2},
  {id: 3, name: 'Item 3', userID: 1}
];

export const items: ActionReducer<Item[]> = (state: Item[] = initialItems, action: Action) => {

  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
};
