import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Pipe } from '@angular/core';
import { products, Product } from 'src/app/products/goods.interface'; 
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  product:Product[] = products;
  filterText:string = '';
 
  
  
  constructor( private serchService : ApiService ,private route: ActivatedRoute) { }

  ngOnInit(): void {
   
  }
  getProduct(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.serchService.getProduct(id)
      .subscribe(Product => this. product = Product);
  } 
 }