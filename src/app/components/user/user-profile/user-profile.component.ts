import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {

    let userInfo: any = sessionStorage.getItem("userinfo")
    this.userModel = JSON.parse(userInfo)
    
  }

}