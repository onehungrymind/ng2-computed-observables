import { Injectable } from '@angular/core';
import { ActionReducer, Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { UUID } from 'angular2-uuid';
import { AppStore } from '../app-store.model';
import { Item } from './item.model';

export const ADD_ITEM = 'ADD_ITEM';

@Injectable()
export class ItemsService {

  constructor(private store: Store<AppStore>) { }

  getItems(): Observable<Item[]> {
    return this.store.select('items');
  }

  initializeNewItem(): Item {
    return {id: UUID.UUID(), name: '', userId: undefined};
  }

  addItem(item): void {
    this.store.dispatch({type: ADD_ITEM, payload: item});
  }
}

export const initialItems: Item[] = [
  {id: '1', name: 'Item 1', userId: '3'},
  {id: '2', name: 'Item 2', userId: '2'},
  {id: '3', name: 'Item 3', userId: '1'}
];

export const items: ActionReducer<Item[]> = (state: Item[] = initialItems, action: Action) => {

  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
};
