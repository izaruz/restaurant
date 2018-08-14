import { Component, OnInit, Input  } from '@angular/core';
import { DetailsService } from '../service/details.service';
import { Subject, Subscription } from 'rxjs';
import { Product } from '../product';
declare var $: any;

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {

  @Input() list : Subject<any>;
  fulldetails : Product[];
  upproducts : Product[] = [];
  private quantity : any = 1;
  quantitySubscription: Subscription;
  updateOrder: Subscription;
  private removed : any = false;

  constructor(public detailsService: DetailsService) { }

  ngOnInit() {
    this.list.subscribe(
      det => {
        this.fulldetails = det; 

        this.quantitySubscription = this.detailsService.productQuantity().subscribe(
          (message) => {
            this.removed = true;
          }
        );

        this.updateOrder = this.detailsService.onUpdateOrder().subscribe(
          (update) => {
            this.fulldetails = update;
            this.quantity = update.cantidad;
          }
        );

        if (this.removed) {
          det.cantidad = 0;
          this.quantity = det.cantidad;
          this.removed = false;
        } else{
          this.quantity = det.cantidad;
          this.removed = false;
        }

        if (this.quantity == 0){
          this.quantity++;
        }
        
        $("#detailProduct").modal('show'); 
      },
      error => {
        console.log("Modal error: ",error);
      } 
    );

  }

  addQuantity(){
    this.quantity += 1;
  }

  removeQuantity(){
    if(this.quantity > 0){
      this.quantity -= 1;
    }
  }

  updateQuantity(item){
    item.cantidad = this.quantity;
    this.detailsService.addOrderElements(item);
    $("#detailProduct").modal('hide');
  }

}
