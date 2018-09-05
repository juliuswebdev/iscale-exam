import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {}

  getProduct() {
    return {
        'title' : 'Classic Tee',
        'price' : '75.00',
        'image' : 'assets/images/classic-tee.webp',
        'description' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lo PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lo PageMaker including versions of Lorem Ipsum.'
    }
  }

  getSizes() {
    return ['S', 'M', 'L'];
  }

}