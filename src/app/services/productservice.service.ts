import { Injectable } from '@angular/core';
import {BehaviorSubject, from} from 'rxjs'
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  _products=[];
  _productsSub;
  _cart=[];
_cartSub;
  constructor(private http: HttpClient) {
    this._productsSub=new BehaviorSubject<any[]>(this._products);
    this._cartSub=new BehaviorSubject<any[]>(this._cart);

   }
  fetchProducts()
  {
    this.http.get<any[]>('/api/products').subscribe((data)=>{    
    this._products=[...data];
    this._productsSub.next([...this._products]);
  });
  }
  getProducts()
  {
    return this._productsSub.asObservable();
  }
  addItemToCart(id)
  { const product = this.findItemInProducts(id);
    if (product.length !== 0) {
      if (this.findItemInCart(id).length) {
        this.removeFromCart(id);
      } else {
        this._cart.push(product[0]);
      }
      this._cartSub.next([...this._cart]);
    }

  }
  removeFromCart(id) {
    if (this.findItemInCart(id).length) {
      const item = this.findItemInCart(id)[0];
      const index = this._cart.indexOf(item);
      this._cart.splice(index, 1);
    }
    this._cartSub.next([...this._cart]);
}
findItemInCart(id) {
  const item = this._cart.filter(product => product._id === id);
  return item;
}
findItemInProducts(id) {
  const item = this._products.filter(product => product._id === id);
  return item;
}
  getCart()
  {
    return this._cartSub.asObservable();
  }
  checkout(data)
  {
     
       return this.http.post('/api/checkout', data);

  }
  clearCart()
  {
    this._cartSub.next([]);
  }


}
