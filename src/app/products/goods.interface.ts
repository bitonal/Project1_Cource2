
export interface Product{
    id?:number,
    name?:string,
    price?:number,
    photoURL?:string,
    descriptions?:string,
    category?: string
    
}


export const products = [
    {id:1,name:"banana",price:5,photoURL:"assets/4.jpg", descriptions:"Fresh fruits - Caming from the farms-Banana",category:"Fruits" },
    {id:2,name:"pears",price:5,photoURL:"assets/3.jpg", descriptions:"Fresh fruits - Caming from the farms- Pears",category:"Fruits"},
    {id:3,name:"grap",price:5,photoURL:"assets/a1.jpg", descriptions:"Fresh fruits - Caming from the farms-Grap",category:"Fruits"},
    {id:4,name:"pomegranate",price:5,photoURL:"assets/2.jpg", descriptions:"Fresh fruits - Caming from the farms-Pomegranate",category:"Fruits"},
    {id:5,name:"strwbarry",price:5,photoURL:"assets/8.jpg", descriptions:"Fresh fruits - Caming from the farms-Strwaberry",category:"Fruits"},
    {id:6,name:"kiwi ",price:5,photoURL:"assets/5.jpg", descriptions:"Fresh fruits - Caming from the farms-Kewi",category:"Fruits"},
    {id:7,name:"tomato",price:5,photoURL:"assets/7.jpg", descriptions:"Vegetable fruits - Caming from the farms-Tomato",category:"Vegetable"},
    {id:8,name:"strwbarry",price:5,photoURL:"assets/8.jpg", descriptions:"Fresh fruits - Caming from the farms-Straberry",category:"Fruits"}

];