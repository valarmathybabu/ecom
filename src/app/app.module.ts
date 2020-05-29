import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import {TruncatePipe} from './truncate.pipe'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { AppnavComponent } from './appnav/appnav.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    AppnavComponent,
    CartComponent,
    CheckoutComponent,
    PagenotfoundComponent,
    TruncatePipe,
    OrderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
