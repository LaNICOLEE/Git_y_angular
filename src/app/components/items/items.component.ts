import { Component } from '@angular/core';
import { item } from '../../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  items:item[] = [];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        id: 0,
        title: 'manzana', 
        price: 10.5,
        quantity: 5,
        completed: false
      },
      {
        id: 1,
        title: 'pan', 
        price: 3.5,
        quantity: 8,
        completed: true
      }
    ];
  }

}
