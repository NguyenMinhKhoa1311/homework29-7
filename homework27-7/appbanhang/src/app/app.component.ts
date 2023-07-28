import { Component, Input } from '@angular/core';
import { Item } from './models/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'appbanhang';

  itemList: Item[] = [
    {
      id: 123,
      name: "HYS SKYHOLE BLACK TEE",
      price: 108000,
      description: 'Áo đẹp',
      imgSrc: "https://product.hstatic.net/200000031420/product/37_11ed326ab71a4a978ff4181b7393996e_grande.jpg",
    }
  ];
  addProduct(newItem: Item) {
    this.itemList.push(newItem);
    console.log(this.itemList)
    // console.log(newItem);
  }
  delete(value: number) {
    const index = this.itemList.findIndex(item => item.id === value);
    if (index !== -1) {
      this.itemList.splice(index, 1);
    }
  }
}
