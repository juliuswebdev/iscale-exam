import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
  
})
export class ContentComponent implements OnInit {

  product;
  sizes;
  currency;
  selectedSize: string;
  cart = [];
  @Output() addCartEvent = new EventEmitter();

  constructor(service: ProductService) {
    this.product = service.getProduct();
    this.sizes = service.getSizes();
  }

  getSize(value) {
    this.selectedSize = value;
  }

  addToCart() {
    if (!this.sizes.includes(this.selectedSize)) {
      this.selectedSize = "Please select a size!";
    } else {
      var newData = {
        'title': this.product.title,
        'size' : this.selectedSize,
        'price': this.product.price,
        'image': this.product.image
      };
      this.cart.push(newData);
      this.addCartEvent.emit(this.cart);
    }
    return false;
  }

  ngOnInit() {}

}