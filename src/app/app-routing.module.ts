import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartCheckoutComponent } from './components/cart/cart-checkout/cart-checkout.component';
import { CartPopulateComponent } from './components/cart/cart-populate/cart-populate.component';
import { DisplayProductsComponent } from './components/products/display-products/display-products.component';
import { HistoryProductsComponent } from './components/products/history-products/history-products.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { UserRegisterComponent } from './components/user/user-register/user-register.component';

const routes: Routes = [
  {
    path: "user-login",
    component: UserLoginComponent
  },
  {
    path: "user-register",
    component: UserRegisterComponent
  },
  {
    path: "user-profile",
    component: UserProfileComponent
  },
  {
    path: "display-products",
    component: DisplayProductsComponent
  },
  {
    path: "history-products",
    component: HistoryProductsComponent
  },
  {
    path: "cart-checkout",
    component: CartCheckoutComponent
  },
  {
    path: "cart-populate",
    component: CartPopulateComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
