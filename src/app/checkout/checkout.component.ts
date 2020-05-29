import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../services/productservice.service';
import { FormBuilder, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
cart=[];
TotalCount=0;
checkoutForm =this.fb.group({
  firstName:['',Validators.required],
  lastName:['',Validators.required],
  email:['',Validators.required],
  addressone :['',Validators.required],
  addresstwo:[''],
  country:['',Validators.required],
  state:['',Validators.required],
  zip:['',Validators.required],
});
  constructor(private fb:FormBuilder, private productService:ProductserviceService,private http: HttpClient,private router : Router) { 
   
}

  ngOnInit(): void {
    this.productService.getCart().subscribe(data=>{
      this.cart = [...data];
      this.TotalCount=0;
     this.TotalCount=this.cart.reduce((acc,cur)=>acc+Number(cur.price),0);
     
  });
  }
  
  doCheckout()
  {
    const order ={...this.checkoutForm.value,item:this.cart};
    console.log(this.checkoutForm.value);
    this.productService.checkout(order).subscribe(res=>{
      const snackbar = document.getElementById('snackbar');
      snackbar.innerHTML = 'Order placed successfully';
      snackbar.className = 'show';
      setTimeout(() => {
        snackbar.className = snackbar.className.replace('show', '');
        this.productService.clearCart();
        this.router.navigate(['/products']);
      }, 3000);
    })
  }
    
  

}
