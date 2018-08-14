import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  private orderParams$: Object;
  private order$: Object;
  private orderPickupTime : String = '';
  private orderId$: String = '';
  private cliente: String = '';
  private tarjeta: String = '';

  constructor(private route: ActivatedRoute, private data: DataService, private router: Router) {
    this.route.params.subscribe( params => this.orderParams$ = params );
  }

  ngOnInit() {
    this.data.getOrder(this.orderParams$).subscribe(
      (message) => {
        this.order$ = message;
        this.cliente = message.tarjeta.cliente.nombres + " " + message.tarjeta.cliente.apellidos;
        this.tarjeta = message.tarjeta.codigoCorto;

        var pickupTime = new Date(message.fecha);
        var pickupTimeHour = pickupTime.getHours() + 1;
        var pickupTimeMinutes = (pickupTime.getMinutes()<10?'0':'') + pickupTime.getMinutes();
        this.orderPickupTime = String(pickupTimeHour) + ':' + String(pickupTimeMinutes) + ' hrs';
      },
      error => {
        this.router.navigate(['/']);
      }
    );
  }

  public newOrder(){
    this.router.navigate(['/']);
  }

}
