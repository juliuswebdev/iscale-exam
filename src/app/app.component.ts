import { Component, Input } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  cartData;
  count = 0;
  value = 'Product';
  cont = ' | Product Content';
  constructor(private titleService?: Title, product?: ProductService) {
    this.value = product.getProduct().title;
  }
  
  ngOnInit( newTitle = this.value ) {
    this.titleService.setTitle(newTitle + this.cont);
  }

  getDataCart(itemData) {
      var qty = 1;
      var newData = [];
      var ctr = true;
      for ( let x = 0; x < itemData.length; x++ ) {
          for (let y = 0; y < newData.length; y++) {
            if ( itemData[x].size == newData[y].size ) {
              ctr = false;
              newData[y].qty = newData[y].qty + 1;
              break;
            } else {
              ctr = true;
            }
          }
          if(ctr){
            var item = {
              'title' : itemData[x].title,
              'size'  : itemData[x].size,
              'price' : itemData[x].price,
              'image' : itemData[x].image,
              'qty'   : qty
            }
            newData.push(item);
            ctr = false;
          }
      }
      this.cartData = newData;
      this.count = itemData.length;
  }
}