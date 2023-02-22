import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartModel } from 'src/app/models/cart.model';
import { ProductModel } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'cart-populate',
  templateUrl: './cart-populate.component.html',
  styleUrls: ['./cart-populate.component.css']
})
export class CartPopulateComponent {
  allProducts: ProductModel[] = [];

  cart: CartModel = {
    orderNo: 0,
    userID: 0,
    orderDate: "",
    orderStatus: false,
    orderItems: [],
    allProducts: []
  }

  constructor(private productService: ProductService, 
              private router: Router,
              private cartService: CartService
              ) {}

  

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void{
    this.productService.getAllProducts().subscribe((response)=>{
      this.allProducts=response;
    }); 
  }
populateCart(sku: any, name: any, image: any, quantity: any, price: any) {
  // Getting User ID that is making the order
  let userInfo: any = sessionStorage.getItem("userinfo")
  let user = JSON.parse(userInfo)

  // Registering userID is cartID
  this.cart.userID = user.userID

  // Registering allProducts in CartID (supposedly)
  this.cart.allProducts[0] = { 
    productSku: sku,
    productName: name,
    productImage: image,
    productQuantity: quantity,
    productPrice: price
  }
  this.cartService.addToCart(this.cart).subscribe((response)=>{
  sessionStorage.setItem("productinfo", JSON.stringify(response))
  this.router.navigate(["cart-checkout"])
})
}
}
