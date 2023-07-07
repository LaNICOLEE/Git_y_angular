import { Component, EventEmitter, Input } from '@angular/core';
import { Item } from 'src/app/models/item';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() item: Item = new Item();
  @output() onDelteItem: EventEmitter<Item> = new EventEmitter();
  DelteItem: any;

  constructor() {}

  ngOnInit(): void{
  }

  onDelete(item: Item) {
    this.DelteItem.emit(Item);
  }

  onToggle(item: Item){
    item.completed !item.completed;
  }


}

