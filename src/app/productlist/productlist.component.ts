import { Component, OnInit } from '@angular/core';
import {ProductserviceService} from '../services/productservice.service'


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
products=[];
  constructor(private productService :  ProductserviceService) { }

  ngOnInit(): void {
    this.productService.fetchProducts();
    this.productService.getProducts().subscribe(data=>{
      this.products=[...data]

    })
  }
  addItemToCart(item)
  {
    this.productService.addItemToCart(item._id);
  }
  itemInCart(item)
  {
 return this.productService.findItemInCart(item._id);
  }

}
