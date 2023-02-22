import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  baseUserUrl: string = "http://localhost:8080/e-commerce/user_info";

    // Login
    login(user: UserModel): Observable<UserModel> {
      return this.httpClient.put<UserModel>(this.baseUserUrl, user)
    }
  
    // Register User
    register(newUser: UserModel): Observable<UserModel>{
      return this.httpClient.post<UserModel>(this.baseUserUrl, newUser);
    }

}


