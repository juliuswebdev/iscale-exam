import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  @Input() itemCart = Object.keys;
  @Input() itemCount;
  isSelected = false;
  
  toggleClass(count) {
    this.isSelected = (count == 0) ? false : !this.isSelected;
  }

  ngOnInit() {}

}