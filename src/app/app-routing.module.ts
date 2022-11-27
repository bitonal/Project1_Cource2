import { ChangePassComponent } from './components/change-pass/change-pass.component';
import { PayItemsComponent } from './components/pay-items/pay-items.component';
import { ViewItemComponent } from './components/view-item/view-item.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { CartsComponent } from './components/carts/carts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDatailsComponent } from './components/products-datails/products-datails.component'; 
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';



const routes: Routes = [
  {path:"products",component:AllProductsComponent},
  {path:"details/:productId",component:ProductsDatailsComponent},
  {path:"cart",component:CartsComponent},
  {path:"login",component:LoginComponent},
  {path:'admin', component:AdminComponent },
  {path:'add',component:AddItemComponent},
  {path:'view',component:ViewItemComponent},
  {path:"pay",component:PayItemsComponent},
  {path:"change",component:ChangePassComponent},
  {path:"**",redirectTo:"products",pathMatch:"full"},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
