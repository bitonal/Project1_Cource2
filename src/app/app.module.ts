import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { ProductsModule } from './products/products.module';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsDatailsComponent } from './components/products-datails/products-datails.component';
import { CartsComponent } from './components/carts/carts.component';
import { LoginComponent } from './components/login/login.component';
import { FilterPipe } from './pipe/filter.pipe';
import { AdminComponent } from './components/admin/admin.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ViewItemComponent } from './components/view-item/view-item.component';
import { PayItemsComponent } from './components/pay-items/pay-items.component';
import { ChangePassComponent } from './components/change-pass/change-pass.component';
@NgModule({
  declarations: [
    AppComponent,
    AllProductsComponent,
    HeaderComponent,
    ProductsDatailsComponent,
    CartsComponent,
    LoginComponent,
    FilterPipe,
    AdminComponent,
    AddItemComponent,
    ViewItemComponent,
    PayItemsComponent,
    ChangePassComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, NgbModule ,FormsModule,
     ProductsModule,HttpClientModule
  ],
  providers: [    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
