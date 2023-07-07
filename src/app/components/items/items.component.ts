import { Component } from '@angular/core';
import { Item } from '../../models/item';
import { ItemService} from '../../services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
sevent: any;
DeleteItem(arg0: any) {
throw new Error('Method not implemented.');
}
  items:Item[] = [];
  total:number= 0;

  constructor(private itemService:ItemService) {}

  ngOnInit(): void {
    //this.items = [];
    this.items = this.itemService.getItems();
    this.getTotal();
  }
  deleteItem(item: Item) {
    this.items = [];
    this.getTotal();

  }

  toggleItem(item:Item){
    this.getTotal();
  }

  getTotal(){
    this.total = this.items
                .filter(item => !item.completed)
                .map(item => item.quantity * item.price)
                .reduce((acc, item) => acc += item, 0);
  }

}
