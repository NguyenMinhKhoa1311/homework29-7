import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  item1: Item = {
    id: 123,
    name: "HYS RACING TEE",
    description: 'Áo đẹp',
    price: 168000,
    imgSrc: "https://product.hstatic.net/200000031420/product/hys_racing_5_mau_246bcc5d516d4dd1817700927647d6d9_grande.png",
  }

  item2: Item = {
    id: 123,
    name: "HYS SKYHOLE BLACK TEE",
    price: 108000,
    description: 'Áo đẹp',
    imgSrc: "https://product.hstatic.net/200000031420/product/37_11ed326ab71a4a978ff4181b7393996e_grande.jpg",

  }
  @Output() newItemEvent = new EventEmitter<number>();
  @Input('itemList')
  itemList!: Item[];
  ngOnInit(): void {
    // this.itemList.push(this.item1);
    // this.itemList.push(this.item2)
  }

  delete(value: number){
    this.newItemEvent.emit(value);
  }


}
