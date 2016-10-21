import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ItemsService, Items } from '../shared';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Observable<Items> = this.itemsService.getItems();

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
  }

}
