import { Component } from '@angular/core';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent {

  title:string='';
  price:number=0;
  quantity:number=0;

  constructor() {}

  ngOnInit(): void{
  }
}
