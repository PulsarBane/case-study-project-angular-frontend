import { Component } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user/user.service';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  user: UserModel = {
    userID: 0,
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    email: "",
    usertype: ""
  }

  errorMessage: string = "";

  constructor(private userService: UserService, private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  register(){
    this.router.navigate(["user-register"])
  }

  login(): void{
    this.userService.login(this.user).subscribe((response)=>{
     if(response.userID != 0){
         this.authService.isLoggedIn = true;
         sessionStorage.setItem("userinfo", JSON.stringify(response))
         this.router.navigate(["cart-populate"]);
       }else{
         this.errorMessage = 'Invalid username/password';
   
       }
     });
    }
  }
