import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';

@Injectable()
export class ItemsService {

  constructor() { }

}

export interface Item {
  id: UUID,
  name: string,
  userID: UUID
}
