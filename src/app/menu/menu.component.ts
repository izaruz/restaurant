import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subject, Subscription } from 'rxjs';
import { DetailsService } from '../service/details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu$: Object;
  menuTest$: Object;
  modalBody$: Object;

  selectedProduct : Subject<any> = new Subject;
  total:number = 0;
  private order: any;
  orderSubscription: Subscription;
  quantitySubscription: Subscription;
  
  constructor(private data: DataService, public detailsService:DetailsService) { }

  showModal(modalBody:Object) {
    console.log("Modal: ", modalBody);
  }

  ngOnInit() {
    this.data.getMenu().subscribe(
      data => this.menu$ = data 
    );

    this.orderSubscription = this.detailsService.orderElements().subscribe(
      (message) => {
        this.order = message;
      }
    );

    this.quantitySubscription = this.detailsService.productQuantity().subscribe(
      (message) => {
        this.menu$ = this.menu$;
      }
    );
  }

  public titleCaseWord(word: string) {
    if (!word) return word;
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }
  
  public getpopup(det) {
    this.selectedProduct.next(det);
  }

  setMessage(product: any) {
    this.detailsService.setMessage(product);
  }

}
