import { admin } from './../admin.interface';
import { Injectable } from '@angular/core';
import { Product } from '../products/goods.interface';
import { Observable , of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'http://localhost:4200'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http : HttpClient) { }
  adminlogin(admin:admin){
    return this.http.post<any>(this.url+"/login", admin,{withCredentials: true});
  }
  updatePassword(admin: admin){
    return this.http.put<any>(`${this.url}admin/updatepassword/`,admin,{withCredentials: true});
  }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url)
      .pipe(
        tap(_ => this.log('fetched Productes')),
        catchError(this.handleError<Product[]>('getProductes', ))
      );
  }
  getProduct(id:number){
    return this.http.get<any>(this.url+"/getproducts",{withCredentials: true})
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  

 


  endusergetProduct(){
    return this.http.get<any>(this.url+"/products",{withCredentials: true})
    .pipe(map((res:any)=>{
      return res;
    }))
  }
   /* GET heroes whose name contains search term */
   searchProduct(term: string): Observable<Product[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Product[]>(`${this.url+"/products"}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found Productes matching "${term}"`) :
         this.log(`no Productes matching "${term}"`)),
      catchError(this.handleError<Product[]>('searchProduct', ))
    );
  }
  handleError<T>(arg0: string): (err: any, caught: Observable<Product[]>) => import("rxjs").ObservableInput<any> {
    throw new Error('Method not implemented.');
  }
  log(arg0: string): void {
    throw new Error('Method not implemented.');
  }





 
}
