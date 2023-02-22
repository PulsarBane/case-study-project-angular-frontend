import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMainComponent } from './components/header/header-main/header-main.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { UserRegisterComponent } from './components/user/user-register/user-register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderUserComponent } from './components/header/header-user/header-user.component';
import { DisplayProductsComponent } from './components/products/display-products/display-products.component';
import { CartCheckoutComponent } from './components/cart/cart-checkout/cart-checkout.component';
import { CartPopulateComponent } from './components/cart/cart-populate/cart-populate.component';
import { HistoryProductsComponent } from './components/products/history-products/history-products.component';


@NgModule({
  declarations: [

    
    AppComponent,
    HeaderMainComponent,
    UserLoginComponent,
    UserProfileComponent,
    UserRegisterComponent,
    HeaderUserComponent,
    DisplayProductsComponent,
    CartCheckoutComponent,
    CartPopulateComponent,
    HistoryProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
