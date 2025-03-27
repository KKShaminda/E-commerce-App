import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products'; 
  private cartApiUrl = 'https://fakestoreapi.com/carts'; // ✅ Correct cart API URL
  cartAddedSubject: any;
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addToCart(obj : any) : Observable<any> {
    return this.http.post<any>(this.cartApiUrl, obj);
  }
}
