/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { ItemsService, initialItems, ADD_ITEM, items } from './items.service';
import { Store } from '@ngrx/store';
import { AppStore } from '../app-store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

const mockStore = {
  select: () => Observable.of(initialItems),
  dispatch: () => {}
};

describe('Service: Items', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ItemsService,
        {provide: Store, useValue: mockStore}
      ]
    });
  });

  it('should exist', inject([ItemsService], (service: ItemsService) => {
    expect(service).toBeTruthy();
  }));

  it('#getItems should select items from the store',
    inject([ItemsService, Store], (service: ItemsService, store: Store<AppStore>) => {
      const spy = spyOn(store, 'select');
      service.getItems();

      expect(spy).toHaveBeenCalledWith('items');
    }));

  it('#getItems should select items from the store', inject([ItemsService], (service: ItemsService) => {
    service.getItems().subscribe(items => {
      expect(items).toEqual(initialItems);
    });
  }));

  it('#initializeNewItem should return filled out item', inject([ItemsService], (service: ItemsService) => {
    const newItem = service.initializeNewItem();

    expect(newItem.id).toBeDefined();
    expect(newItem.name).toEqual('');
  }));

  it('reducer should return initial state by default', () => {
    const output = items(initialItems, {type: 'DEFAULT', payload: {}});
    const expected = initialItems;
    expect(output).toEqual(expected);
  });

  it('reducer should add item to state', inject([ItemsService], (service: ItemsService) => {
    let newItem = service.initializeNewItem();
    newItem.name = 'Test';

    const output = items(initialItems, {type: ADD_ITEM, payload: newItem});
    const expected = [...initialItems, newItem];
    expect(output).toEqual(expected);
  }));

  it('#addItem should dispatch an action to the reducer',
    inject([ItemsService, Store], (service: ItemsService, store: Store<AppStore>) => {
      const spy = spyOn(store, 'dispatch');
      service.addItem({});
      expect(spy).toHaveBeenCalledWith({type: ADD_ITEM, payload: {}});
    }));
});
