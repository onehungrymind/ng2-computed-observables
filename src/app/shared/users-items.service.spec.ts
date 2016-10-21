/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UsersItemsService } from './users-items.service';

describe('Service: UsersItems', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersItemsService]
    });
  });

  it('should ...', inject([UsersItemsService], (service: UsersItemsService) => {
    expect(service).toBeTruthy();
  }));
});
