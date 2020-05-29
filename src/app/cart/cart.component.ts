import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../services/productservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart = [];
  cartTotal=0;
  constructor(private productService:ProductserviceService) { }

  ngOnInit(): void {
    this.productService.getCart().subscribe(data=>{
      this.cart=[...data];
      this.cartTotal=this.cart.reduce((acc,curr)=>acc+Number(curr.price),0);

    })

    
  }
  removeItem(item)
    {
      return this.productService.removeFromCart(item._id);
    }

}
