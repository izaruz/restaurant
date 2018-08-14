import { Inject, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { Product } from '../product';

// key that is used to access the order in local storage
const STORAGE_KEY = 'local_order';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  public details = new Subject<any>();
  private quantity = new Subject<any>();
  private order = new Subject<any>();
  private response = new Subject<any>();
  private update = new Subject<any>();
  private pay = new Subject<any>();
  private storagedOrder : any;

  constructor(@Inject(SESSION_STORAGE) private storage:StorageService) { }

  public storeOnLocalStorage(order: any): void {
    //get array of orders from local storage
    this.storage.remove(STORAGE_KEY);
    const currentOrder = this.storage.get(STORAGE_KEY) || [];
    
    if (order){
      // push new order to array
      currentOrder.push({
        order: order
      });

      // insert updated array to local storage
      this.storage.set(STORAGE_KEY, currentOrder);
    }
        
  }

  public getLocalOrder() {
    this.storagedOrder = this.storage.get(STORAGE_KEY);
    if (this.storagedOrder){
      return this.storagedOrder[0].order;
    }
    
    return false;
  }

  onSetMessage(): Observable<any> {
      return this.details.asObservable();
  }
  setMessage(value: any) {
    console.log("detail service", value);
    this.details.next(value); 
  }

  // Update order
  onUpdateOrder(): Observable<any> {
    return this.update.asObservable();
  }
  updateOrder(value: any) {
  this.update.next(value); 
  }

  // Response
  onSetResponse(): Observable<any> {
    return this.response.asObservable();
  }
  setResponse(value: any) {
  this.response.next(value); 
  }

  // Update quantity in details component
  productQuantity() : Observable<any>{
    return this.quantity.asObservable();
  }

  setQuantity(itemId: any) {
    this.quantity.next(itemId);
  }

  // New order
  orderElements() : Observable<any>{
    return this.order.asObservable();
  }

  addOrderElements(order: any) {
    this.order.next(order);
  }

  // pay order
  payElements() : Observable<any>{
    return this.pay.asObservable();
  }

  addPayElements(pay: any) {
    this.pay.next(pay);
  }

  // Pay Data
  public storePayData(payData: any): void {
    //get array of orders from local storage
    const completeOrder = this.storage.get(STORAGE_KEY) || [];
    
    if (payData){
      // push new order to array
      completeOrder.push({
        mintCard: payData.mintCard,
        phoneNumer: payData.phoneNumer
      });

      // insert updated array to local storage
      this.storage.set(STORAGE_KEY, completeOrder);
    }
        
  }

}
