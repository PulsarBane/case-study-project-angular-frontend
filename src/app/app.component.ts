import { Component } from '@angular/core';
import { AuthService } from './services/authentication/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular.ecommerce.project';

  constructor(private authService: AuthService){
    
  }

  retrieveIsUserLoggedIn(): boolean{
    return this.authService.isLoggedIn;
  }
}

