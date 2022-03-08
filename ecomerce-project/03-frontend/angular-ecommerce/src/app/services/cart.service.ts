import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from '../common/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  

  cartItems: CartItem[] = [];
  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  constructor() { }

  addToCart(theCartItem: CartItem){
    // check if we already have the item in our cart
    let alreadyExistsInCart:boolean = false;
    let existingCartItem: CartItem = undefined
    if(this.cartItems.length>0){
      // find the item based on the item id
      existingCartItem = this.cartItems.find(tempCartItem => tempCartItem.id == theCartItem.id);
      // check if we found it
      alreadyExistsInCart = (existingCartItem != undefined);
    }
    if(alreadyExistsInCart){
      // increment quantity
      existingCartItem.quanity++;
    }
    else{
      //add item to array
      this.cartItems.push(theCartItem);
    }

    //compute cart total price and total quantity
    this.computeCartTotals();
  }

  computeCartTotals(){
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for(let currentCartItem  of this.cartItems){
      totalPriceValue += currentCartItem.quanity * currentCartItem.unitPrice;
      totalQuantityValue += currentCartItem.quanity;
    }

    // publish the new values .. all subscribers will recieve the new data
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

    // log cart data for debugging purposes
    this.logCartData(totalPriceValue, totalQuantityValue);
  }

  logCartData(totalPriceValue: number, totalQuantityValue:number){
    for (let tempCartItem of this.cartItems){
      const subTotalPrice = tempCartItem.quanity * tempCartItem.unitPrice;
      console.log( `Name: ${tempCartItem.name}, quantity=${tempCartItem.quanity}, price=${tempCartItem.unitPrice}, subTotalPrice=${subTotalPrice}`);
    }
    console.log(`totalPrice:${totalPriceValue.toFixed(2)}, totalQuantity:${totalQuantityValue}`);
    console.log('----');
  }

  decrementQuantity(theCartItem: CartItem) {
    theCartItem.quanity--;
    if(theCartItem.quanity == 0){
      this.remove(theCartItem);
    }
    else{
      this.computeCartTotals();
    }
  }

  remove(theCartItem: CartItem){
    //get index of item in the array
    const itemIndex = this.cartItems.findIndex(tempCartItem => tempCartItem.id == theCartItem.id)

    //if found, remove the item from the array at the given index
    if (itemIndex > -1){
      this.cartItems.splice(itemIndex, 1);
      this.computeCartTotals();
    }
  }
}
