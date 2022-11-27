import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css'],


})
export class CartsComponent implements OnInit {
  items = this.cartService.getItems();
  
  constructor(private cartService: CartService, private modalService: NgbModal) { }
  

  ngOnInit(): void {
    
  }
  itemsCounts(){
    return this.cartService.itemsCount()
  }
  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted');
   
  }

  clearCart(){
    this.items = [];
    return this.items;
  }
	

}
