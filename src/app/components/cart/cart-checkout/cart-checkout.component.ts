import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartModel } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.css']
})
export class CartCheckoutComponent {
  orderItem: CartModel = {
    orderNo: 0,
    userID: 0,
    orderDate: "",
    orderStatus: false,
    orderItems: [],
    allProducts: []
  }

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {

    let productInfo: any = sessionStorage.getItem("productinfo")
    this.orderItem = JSON.parse(productInfo)
    
  }

  checkOut(userID: number){
    this.cartService.checkout(this.orderItem).subscribe((response)=>{
      this.router.navigate(["cart-populate"])
      this.orderItem = {
        orderNo: 0,
        userID: 0,
        orderDate: "",
        orderStatus: false,
        orderItems: [],
        allProducts: []
      }
    })
  }
}
