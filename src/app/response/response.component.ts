import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../service/details.service';
import { Subject, Subscription } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss']
})
export class ResponseComponent implements OnInit {

  modalDetails : Object = {};
  errorDetails : Object = {};
  cartSubscription: Subscription;

  constructor(public detailsService: DetailsService) { }

  ngOnInit() {

    this.cartSubscription = this.detailsService.onSetResponse().subscribe(
      (message) => {
        this.modalDetails = message.error;
        if (!this.modalDetails){
          this.errorDetails = message;
        }
        $("#response").modal('show');
      }
    );
  }

  public close(){
    $("#response").modal('hide');
  }

}
