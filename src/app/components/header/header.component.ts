import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cartservice:CartService) { }

  ngOnInit(): void {
  }
  itemsCounts(){
    return this.cartservice.itemsCount()
  }

}
