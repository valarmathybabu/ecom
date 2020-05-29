import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../services/productservice.service';

@Component({
  selector: 'app-appnav',
  templateUrl: './appnav.component.html',
  styleUrls: ['./appnav.component.css']
})
export class AppnavComponent implements OnInit {
cart=[];
  constructor(private productService : ProductserviceService) 
  {


  }

  ngOnInit(): void {
    this.productService.getCart().subscribe(data=>{
      this.cart =[...data];
    })
  }

}
