import { Component, OnInit, Inject } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { DetailsService } from '../service/details.service';
import { Product } from '../product';
import { Router } from "@angular/router";
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

declare var $: any;
// key that is used to access the order in local storage
const STORAGE_KEY = 'local_order';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  private cart: Product[] = [];
  cartSubscription: Subscription;
  private matchProduct: any; //Variable booleana que verifica si fue posible actualizar el producto
  private total:number = 0;
  private deleteItem: any = false;
  selectedProduct : Subject<any> = new Subject;
  private localOrder: any;

  constructor(public detailsService:DetailsService, private router: Router, @Inject(SESSION_STORAGE) private storage:StorageService) { }

  ngOnInit() {
    this.localOrder = this.detailsService.getLocalOrder();
    if(this.localOrder){
      this.cart = this.detailsService.getLocalOrder();
      for(let c = 0; c < this.cart.length; c++){
        this.detailsService.setQuantity(this.cart[c].idProducto);
      }
      this.totalPrice(this.cart);
    }

    this.cartSubscription = this.detailsService.orderElements().subscribe(
      (message) => {    

        if(message.cantidad > 0){
          if(this.cart.length > 0){
            this.matchProduct = false;

            // Valida si existe un producto que pueda actualizar la cantidad
            for (let i = 0; i < this.cart.length; i++) {
              if(message.idProducto == this.cart[i].idProducto) {
                this.cart[i].cantidad = message.cantidad;
                this.matchProduct = true;
                break;
              }
            }
            // Si no encontro un producto que actualizar hace push a la orden
            if ( !this.matchProduct ){
              this.cart.push(message);
            }
          } else{
            this.cart.push(message);
          }
        }

        /**
         * En caso que la cantidad enviada por el modal sea igual a cero
         * se validara si en el carrito existe un item con ese codigo
         * y en caso de que exista se eliminara del carrito porque el cliente
         * redujo a cero la cantidad de productos del item seleccionado.
         * @param {object} message - El objeto contiene el item enviado del componente productdetails.
         */
        if (message.cantidad == 0 || this.deleteItem === true){
          for (let i = 0; i < this.cart.length; i++) {
            if(message.idProducto == this.cart[i].idProducto) {
              this.cart.splice(i, 1);
              break;
            }
          }
        }
        
        this.totalPrice(this.cart);       
      }
    );
  }

  totalPrice(cart: any){
    this.total = 0;
    for(var i=0;i<cart.length;i++){
      this.total += (cart[i].precio * cart[i].cantidad);
    }
  }

  public updateItem(item: any){
    this.detailsService.updateOrder(item);
    this.detailsService.setQuantity(item.idProducto);
    this.selectedProduct.next(item);
    $("#detailProduct").modal('show');
  }

  public deleteOrderItem(itemId: any, item: any){
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
    item.cantidad = 0;
    this.detailsService.setQuantity(itemId);

    this.totalPrice(this.cart);
  }

  public newOrder() {
    this.storage.remove(STORAGE_KEY);
    window.location.reload();
  }

  public checkoutOrder(order){
    this.detailsService.storeOnLocalStorage(order);
  }

}
