import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.css']
})
export class HeaderUserComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.isLoggedIn = false;
    this.router.navigate(["user-login"])
  }

  display(){
    this.router.navigate(["cart-populate"])
  }

  profile(){
    this.router.navigate(["user-profile"])
  }

  cart(){
    this.router.navigate(["cart-checkout"])
  }

  history(){
    this.router.navigate(["history-products"])
  }
}
