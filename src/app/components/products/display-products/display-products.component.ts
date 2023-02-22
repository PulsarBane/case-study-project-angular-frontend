import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent {

  allProducts: ProductModel[] = [];

  constructor(private httpClient: HttpClient, 
              private productService: ProductService, 
              private AR: ActivatedRoute,
              private router: Router,
              private authService: AuthService
              ) { }

  ngOnInit(): void {
    this.loadProducts();
    
  }

  login(){
    this.authService.isLoggedIn = false;
    this.router.navigate(["user-login"])
  }

  loadProducts(): void{
    this.productService.getAllProducts().subscribe((response)=>{
      this.allProducts=response;
    });
  }

}
