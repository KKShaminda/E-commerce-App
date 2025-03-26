import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports : [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  productList: any[] = [];
  cartObj : any = {
    "CartId": 0,
    "CustId": 1,
    "ProductId": 0,
    "Quantity": 0,
    "AddedDate": "2023-04-27T07:12:40.926Z"
  };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    debugger;
    this.loadAllProducts();
  }

  loadAllProducts() {
    this.productService.getAllProducts().subscribe({
      next: (result: any[]) => {
        this.productList = result; // ✅ API returns an array directly
      },
      error: (err) => console.error('Error fetching products:', err)
    });
  }
}
