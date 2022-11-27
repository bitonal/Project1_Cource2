import { Item } from './../add-item/add-items';
import { Observable, of } from "rxjs";

export class viewItemsService{
 
    public ItemsAdd=[
        {id:1,name:"banana",price:5, descriptions:"Fresh fruits - Caming from the farms-Banana",category:"Fruits" },
        {id:2,name:"pears",price:5, descriptions:"Fresh fruits - Caming from the farms- Pears",category:"Fruits"},
        {id:3,name:"grap",price:5, descriptions:"Fresh fruits - Caming from the farms-Grap",category:"Fruits"},
        {id:4,name:"pomegranate", descriptions:"Fresh fruits - Caming from the farms-Pomegranate",category:"Fruits"},
        {id:5,name:"strwbarry",price:5, descriptions:"Fresh fruits - Caming from the farms-Strwaberry",category:"Fruits"},
        {id:6,name:"kiwi ",price:5,descriptions:"Fresh fruits - Caming from the farms-Kewi",category:"Fruits"},
        {id:7,name:"tomato",price:5, descriptions:"Vegetable fruits - Caming from the farms-Tomato",category:"Vegetable"},
        {id:8,name:"strwbarry",price:5, descriptions:"Fresh fruits - Caming from the farms-Straberry",category:"Fruits"},
       
    
    ]
    
 AddNewItem(id:number,name: string,  price: number,  descriptions: string,category:string) {
    this.ItemsAdd.push({id:id,name: name, price: price, descriptions: descriptions, category: category
        
    });}

   
}


   



