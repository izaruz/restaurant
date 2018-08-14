import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StorageServiceModule } from 'angular-webstorage-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartcheckoutComponent } from './cartcheckout/cartcheckout.component';
import { ResponseComponent } from './response/response.component';
import { OrderComponent } from './order/order.component';
import { DetailsService } from './service/details.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    FooterComponent,
    CartComponent,
    HeaderComponent,
    ProductdetailsComponent,
    CheckoutComponent,
    CartcheckoutComponent,
    ResponseComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StorageServiceModule,
    FormsModule,
    ReactiveFormsModule,
    NgProgressModule.forRoot(),
    NgProgressHttpModule
  ],
  providers: [
    DetailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
