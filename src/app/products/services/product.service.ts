
import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get(environment.apiURL + 'products')
  }

  getAllCategorise(){
     return this.http.get(environment.apiURL + 'products/categories')
     
  }

  getProductByCategory(Keyword:any){
    return this.http.get(environment.apiURL + 'products/category/'+Keyword)

  }
}
