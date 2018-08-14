import { Component, OnInit, Inject } from '@angular/core';
import { DetailsService } from '../service/details.service';
import { Router } from "@angular/router";
import { DataService } from '../data.service';
import { Product } from '../product';
import { Card } from '../interface/card';
import { Subscription } from 'rxjs';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

// key that is used to access the order in local storage
const STORAGE_KEY = 'local_order';

@Component({
  selector: 'app-cartcheckout',
  templateUrl: './cartcheckout.component.html',
  styleUrls: ['./cartcheckout.component.scss']
})
export class CartcheckoutComponent implements OnInit {

  private payDataCustomer : Object;
  private ccCardData : Card;
  private checkout: Object = [];
  private cart: Product[] = [];
  private total:number = 0;
  private message: Object = {};
  payDataSubscription: Subscription;
  private validCustomer : boolean = true;
  private payType : number;

  constructor(public detailsService:DetailsService, public dataService:DataService, private router: Router, @Inject(SESSION_STORAGE) private storage:StorageService) { }

  ngOnInit() {
    this.cart = this.detailsService.getLocalOrder();
    
    if (this.cart){
      this.totalPrice(this.cart);
    }
    
    this.ccCardData = {
      cc_number : '',
      cc_name : '',
      cc_expiryMonth : '',
      cc_expiryYear : '',
      cc_cvv : ''
    };

    this.payDataSubscription = this.detailsService.payElements().subscribe(
      (message) => {
        
        this.validCustomer = message.validCustomer;
        this.payType = message.payType;

        // Cliente existente con una m1nt card valida
        if ( message.payType == 1 ){
          this.payDataCustomer = message;
        }

        // Datos para un cliente nuevo, que se le creeara una m1nt card
        if ( message.payType == 2 ){
          // datos de tarjeta de pago
          this.ccCardData.cc_number = message.ncCardnumber;
          this.ccCardData.cc_name = message.ncCardName;
          this.ccCardData.cc_expiryMonth = message.ncExpMonth;
          this.ccCardData.cc_expiryYear = message.ncExpYear;
          this.ccCardData.cc_cvv = message.ncCvv;

          // datos de facturacion
          this.payDataCustomer = {
            nombres: message.ncName,
            apellidos: message.ncLastname,
            razonSocial: message.ncSocial,
            nit: message.ncNit,
            email: message.ncEmail,
            telefono: message.ncPhone
          }
        }
      }
    );
  }

  totalPrice(cart: any){
    this.total = 0;
    for(var i=0;i<cart.length;i++){
      this.total += (cart[i].precio * cart[i].cantidad);
    }
  }

  deleteOrderItem(itemId: any){
    /**
     * Eliminar todos los productos de un id en especifico, del carrito.
     * @param {any} itemId - Elemento seleccionado a eliminar.
     */
    if (itemId > 0){
      for (let i = 0; i < this.cart.length; i++) {
        if(itemId == this.cart[i].idProducto) {
          this.cart.splice(i, 1);
          break;
        }
      }
    }

    this.detailsService.setQuantity(itemId);

    if (this.cart && Object.keys(this.cart).length > 0){
      this.detailsService.storeOnLocalStorage(this.cart);
      this.totalPrice(this.cart);
    } else {
      this.storage.remove(STORAGE_KEY);
      this.router.navigate(['/']);
    }
    
  }

  checkoutOrder(){
    
    if(this.payType == 1){
      this.checkout = {
        order: this.cart,
        client: this.payDataCustomer
      }
      this.dataService.setOrder(this.checkout).subscribe(
        (message) => {
          if (message.status == 1){
            // En caso de orden exitosa elimina el local storage de la orden y luego redirije a ver la orden
            this.storage.remove(STORAGE_KEY);
            this.router.navigate(['/order', message.idOrden, message.order_viewhash]);
          }
          if (message.status == 0){
            this.setResponse(message);
          }
        },
        error => {
          console.log("Order error: ",error);
          this.setResponse(error);
        }
      );
    }

    if(this.payType == 2){
      this.checkout = {
        order: this.cart,
        client: this.payDataCustomer,
        payment : this.ccCardData
      }
      this.dataService.setCustomerOrder(this.checkout).subscribe(
        (message) => {
          if (message.result){

            var data  = message;

            // Hacer el post a Credomatic
            var formfields  =  [
                {name:'type', value:'auth'},
                {name:'key_id', value: data.key_id} ,
                {name:'hash', value: data.hash},
                {name:'time', value: data.time},
                {name:'redirect', value: data.redirect_url },
                {name:'ccnumber', value: this.ccCardData.cc_number },
                {name:'ccexp', value: String(this.ccCardData.cc_expiryMonth) + String(this.ccCardData.cc_expiryYear) },
                {name:'cvv', value: this.ccCardData.cc_cvv },
                {name:'amount', value: this.total },
                {name:'orderid', value:  data.order_id },
                {name:'email', value: '' }
            ];
            
            var f = document.createElement('form');
            f.action="https://credomatic.compassmerchantsolutions.com/api/transact.php";
            f.method='POST';
            f.autocomplete = 'off';

            for ( var j = 0; j < formfields.length ; j++ ){
                var i=document.createElement('input');
                i.type='hidden';
                i.name= formfields[j].name;
                i.value= formfields[j].value;
                f.appendChild(i);
            }
            
            document.body.appendChild(f);
            // Elimina la orden del local storage antes de enviar el formulario a credomatic
            this.storage.remove(STORAGE_KEY);
            f.submit();
          } else if (!message.status){
            this.setResponse(message);
          }
          
        },
        error => {
          console.log("Order error: ",error);
          this.setResponse(error);
        }
      );
    }
  }

  setResponse(response: any) {
    this.detailsService.setResponse(response);
  }

}
