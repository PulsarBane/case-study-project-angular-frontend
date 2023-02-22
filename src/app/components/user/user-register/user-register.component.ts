import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  newUser: UserModel = {
    userID: 0,
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    email: "",
    usertype: ""
  }


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  loadLogin(): void {
    this.router.navigate(["user-login"]);
  }

  addUser(): void{
    this.userService.register(this.newUser).subscribe((response)=>{
      console.log(response);
      this.loadLogin();
    })
  }

}
