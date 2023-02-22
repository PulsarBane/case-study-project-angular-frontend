import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseProductsUrl: string = "http://localhost:8080/e-commerce/products";

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<ProductModel[]> {
    return this.httpClient.get<ProductModel[]>(this.baseProductsUrl);
  }
}
