import { Component, OnInit } from '@angular/core';
import { CartModel } from 'src/app/models/cart.model';
import { UserModel } from 'src/app/models/user.model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'history-products',
  templateUrl: './history-products.component.html',
  styleUrls: ['./history-products.component.css']
})
export class HistoryProductsComponent implements OnInit {
  previousOrders: CartModel[] = [];


  userModel: UserModel =
  {
    userID: 0,
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    email: "",
    usertype: ""
  }

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.loadHistory();

  }

  loadHistory(): void {
    let userInfo: any = sessionStorage.getItem("userinfo")
    this.userModel = JSON.parse(userInfo)

    this.cartService.getHistory(this.userModel.userID).subscribe((response)=>{
      this.previousOrders = response;
    });
  }
}
