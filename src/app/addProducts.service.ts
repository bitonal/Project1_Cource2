import { Injectable } from '@angular/core';
import{ Products} from './ViewProducts';

@Injectable({ providedIn: 'root' })
export class AddPService {
    public kitchen: Products[]= [
        {id:1,name:"banana",price:5, descriptions:"Fresh fruits - Caming from the farms-Banana",category:"Fruits" },
        {id:2,name:"pears",price:5, descriptions:"Fresh fruits - Caming from the farms- Pears",category:"Fruits"},
        {id:3,name:"grap",price:5, descriptions:"Fresh fruits - Caming from the farms-Grap",category:"Fruits"},
        {id:5,name:"strwbarry",price:5, descriptions:"Fresh fruits - Caming from the farms-Strwaberry",category:"Fruits"},
        {id:6,name:"kiwi ",price:5,descriptions:"Fresh fruits - Caming from the farms-Kewi",category:"Fruits"},
        {id:7,name:"tomato",price:5, descriptions:"Vegetable fruits - Caming from the farms-Tomato",category:"Vegetable"},
        {id:8,name:"strwbarry",price:5, descriptions:"Fresh fruits - Caming from the farms-Straberry",category:"Fruits"},
       
       
      ];
    getItems():Products[]
    {
        return this.kitchen;
    }
    getItem(id:number):Products |undefined
    {
        const item=this.getItems().find(item => item.id ===id );
        return item;
    }
   
}
   
