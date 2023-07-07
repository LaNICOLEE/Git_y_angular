import { Component, EventEmitter, Input } from '@angular/core';
import { Item } from 'src/app/models/item';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() item: Item = new Item();
  @output() deleteItem: EventEmitter<Item> = new EventEmitter();
  @output() toggleItem: EventEmitter<Item> = new EventEmitter();


  DeleteItem: any;

  constructor() {}

  ngOnInit(): void{
  }

  onDelete(item: Item) {
    this.DeleteItem.emit(Item);
  }

  onToggle(item: Item){
    item.completed =!item.completed;
    this.toggleItem.emit(item);
  }




}



