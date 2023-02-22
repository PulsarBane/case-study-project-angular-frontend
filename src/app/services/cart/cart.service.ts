import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartModel } from 'src/app/models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  createOrderUrl: string = "http://localhost:8080/e-commerce/orders/update";

  checkOutOrderUrl: string = "http://localhost:8080/e-commerce/orders/checkout"

  historyOrderUrl: string = "http://localhost:8080/e-commerce/orders/history"

  constructor(private httpClient: HttpClient
              ) {}


  addToCart(cart: CartModel): Observable<CartModel>{
      return this.httpClient.put<CartModel>(this.createOrderUrl, cart);
  }

  checkout(cart: CartModel): Observable<CartModel>{
      return this.httpClient.put<CartModel>(this.checkOutOrderUrl, cart);
  }

  getHistory(userID: number): Observable<CartModel[]>{
    return this.httpClient.get<CartModel[]>(this.historyOrderUrl+"/"+userID)
}

}
