import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  productList: any [] = [];
  constructor(private productService: ProductService){

  }
  

  loadAllProducts(){
    this.productService.getAllProducts().subscribe((result: any)=>{
       this.productList = 
    }

    )
  }
}
