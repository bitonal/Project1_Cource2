import { AddPService } from './../../addProducts.service';
import { Products } from './../../ViewProducts';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { viewItemsService } from './viewsItems.service';


@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css'],
  providers:[viewItemsService]
})
export class ViewItemComponent implements OnInit {


  constructor(private vi:AddPService,private route:Router ) { }
   ItemAdds: Products[] = [];
ItemAdd:{id:number,name:string,price:number,descriptions:string,category:string}[]= [];
  //ItemAdd: ItemsAdd[]=[];

  ngOnInit(): void {
   
    
    //this.viewtbl=this.kitchenservice.getItems();
   this.ItemAdds = this.vi.getItems()
  }
 
  deleteItem(name:string)
  {
    const index=this.ItemAdds.findIndex(
      item=>item.name===name
    )
    if(index>=0){
      this.ItemAdds.splice(index,1);
    }
  }
  onDelete(name:string)
    {
      if(window.confirm("delete"))
      {
        this.deleteItem(name);
        this.route.navigate(['/view']);
      }
    }
  
 
  
}
