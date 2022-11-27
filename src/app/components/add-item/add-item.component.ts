import { viewItemsService } from './../view-item/viewsItems.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
  providers:[viewItemsService]
})
export class AddItemComponent implements OnInit {
  [x: string]: any;
  idItem: number = 0;
  nameItem: string = ""
  priceItem: number =1;
  descItem: string = "";
  categoryItem: string="";
  constructor(private route:Router,private vi:viewItemsService,private aroute:ActivatedRoute) { }
  ngOnInit(): void {
    const routeParams = this. aroute.snapshot.paramMap;}

  AddNewItem() {
    this.vi.AddNewItem(this.idItem,this.nameItem,this.priceItem,this.descItem,this.categoryItem);
    console.log(this.vi.ItemsAdd)
    alert("The product is added")
    this.route.navigate(['./view'])
} 
/**
 *  onItemAdd(regForm:NgForm){
    let  a ={
    idItem:+this.item.id,
    nameItem:this.item.name,
    priceItem:+this.item.cost,
    descItem:+this.item.desc,
     categoryItem:+this['categ']
      
    }
    this.items.push(a);
      console.log(a);
    alert("Item added");
    this.route.navigate(['./view']);
  }
 */
 
}
