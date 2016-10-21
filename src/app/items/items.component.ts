import { Component, OnInit } from '@angular/core';
import { ItemsService, Items } from '../shared';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Items = this.itemsService.getItems();

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
  }

}
