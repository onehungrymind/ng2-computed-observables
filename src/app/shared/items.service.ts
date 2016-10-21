import { Injectable } from '@angular/core';
import { ActionReducer, Action, Store } from '@ngrx/store';
import { UUID } from 'angular2-uuid';
import { AppStore } from '../app-store';

@Injectable()
export class ItemsService {

  constructor(private store: Store<AppStore>) { }

  getItems() {
    return this.store.select('items');
  }

}

export interface Item {
  id: UUID,
  name: string,
  userID: UUID
}

export interface Items extends Array<Item> {}

const initialState: Items = [
  {id: 1, name: 'Item 1', userID: 3},
  {id: 2, name: 'Item 2', userID: 2},
  {id: 3, name: 'Item 3', userID: 1}
];

export const items: ActionReducer<Items> = (state: Items = initialState, action: Action) => {

  switch (action.type) {
    default:
      return state;
  }
};
