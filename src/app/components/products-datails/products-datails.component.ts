
import { Component, OnInit } from '@angular/core';
import {products, Product } from 'src/app/products/goods.interface';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service'; 

@Component({
  selector: 'app-products-datails',
  templateUrl: './products-datails.component.html',
  styleUrls: ['./products-datails.component.css']
})
export class ProductsDatailsComponent implements OnInit {
 product:Product|undefined;

  constructor(private route:ActivatedRoute,private cartservice:CartService) { }

  ngOnInit(): void {
      // First get the product id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));

  // Find the product that correspond with the id provided in route.
  this.product = products.find(product => product.id === productIdFromRoute);
  }
  AddToCart(product:Product){
    
    this.cartservice.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}
