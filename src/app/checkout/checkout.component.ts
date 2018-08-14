import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from "@angular/router";
import { DetailsService } from '../service/details.service';
import { Product } from '../product';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// key that is used to access the order in local storage
const STORAGE_KEY = 'local_order';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  private cart: Product[] = [];
  private storagedOrder :any;
  checkSubscription: Subscription;
  values: String = '';
  private location: boolean = false;
  private selectedLocation : any = 0;
  private locationMessage : String = '';
  private newCustomerState : boolean = false;
  private payData: Object = {};
  private mintData: Object = {};
  private validCard : boolean = true;
  private customer$: Object;
  private callAction: boolean = false;
  private customerName: String = '';
  private customerPhone: String = '';
  private errorValidate : String = '';
  private validCustomer : boolean = false;
  private errorMint : String = '';
  private total:number = 0;
  public form: FormGroup;
  public locationOne: boolean = false;
  public locationTwo: boolean = false;
  public locationThree: boolean = false;

  constructor(public el: ElementRef, public detailsService:DetailsService, private data: DataService, private router: Router, @Inject(SESSION_STORAGE) private storage:StorageService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.detailsService.storePayData(this.payData);
    this.cart = this.detailsService.getLocalOrder();

    if (this.cart && Object.keys(this.cart).length > 0){
      this.totalPrice(this.cart);
    } else {
      this.router.navigate(['/']);
    }

    this.form = this.formBuilder.group({
      ncName : [
        '', 
        [ Validators.required ]
      ],
      ncLastname : [
        '', 
        [ Validators.required ]
      ],
      ncEmail: [
        '', 
        [ Validators.required, Validators.email ]
      ],
      ncPhone : [
        '', 
        [ Validators.required, Validators.minLength(8), Validators.maxLength(8) ]
      ],
      ncSocial : [
        '', 
        [ Validators.required ]
      ],
      ncNit : [
        '', 
        [ Validators.required ]
      ],
      ncCardnumber : [
        '', 
        [ Validators.required, Validators.pattern("^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$") ]
      ],
      ncCardName : [
        '', 
        [ Validators.required ]
      ],
      ncExpMonth : [
        '', 
        [ Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(1), Validators.maxLength(2) ]
      ],
      ncExpYear : [
        '', 
        [ Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(1), Validators.maxLength(2) ]
      ],
      ncCvv : [
        '', 
        [ Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(3), Validators.maxLength(3) ]
      ],
    });
    
  }

  totalPrice(cart: any){
    this.total = 0;
    for(var i=0;i<cart.length;i++){
      this.total += (cart[i].precio * cart[i].cantidad);
    }
  }

  onKey(event: any) { // without type info
    this.values = event.target.value;
  }

  orderLocation(event: Event){
    let elementId: string = (event.target as Element).id;
    this.values = elementId;
    this.location = !this.location;

    if (this.values == "local") {
      this.selectedLocation = 1;
      this.locationOne = true;
      this.locationTwo = false;
      this.locationThree = false;
    } else if (this.values == "reforma"){
      this.selectedLocation = 2;
      this.locationOne = false;
      this.locationTwo = true;
      this.locationThree = false;
    } else if (this.values == "avenida"){
      this.selectedLocation = 3;
      this.locationOne = false;
      this.locationTwo = false;
      this.locationThree = true;
    }
  }

  newCustomer(){
    this.newCustomerState = true;
  }

  public phoneNumber(input) {
    var number = input || '';
    number = number.trim().replace(/[-\s\(\)]/g, '');
    if(number.length === 8) {      
      this.data.validateCustomer(this.payData).subscribe(
        (message) => {
          // Existing customer pay type = 1
          if (message.status == 1){
            this.errorValidate = '';
            this.validatePayData(this.payData,false,1);
            this.el.nativeElement.querySelector('#mintNumber').focus();
          } else {
            this.validatePayData(this.payData,true,1);
            this.errorValidate = "Teléfono inválido";
          }
        },
        error => {
          console.log("Validate error: ",error);
          this.errorValidate = "Teléfono inválido";
        }
      );
    }
  }

  public mintCard(input: string){
    var card = input || '';
    if (card.length == 6){
      this.callAction = true;
    }

    if( this.callAction ){
      this.data.getCustomer(input).subscribe(
        data => {
          this.errorMint = '';
          this.customer$ = data;
          this.customerName = data.cliente.name;
          this.customerPhone = data.cliente.telefono;
          if(data.activa){
            this.validCard = false;
          }
        },
        error => {
          console.log("Card error: ",error);
          this.validCard = true;
          this.customer$ = '';
          this.customerName = '';
          this.customerPhone = '';
          this.errorMint = "Numero de tarjeta invalido";
        }
      );
      this.callAction = false;
    }
  }

  public validateNewCustomer(){
    if (Object.keys(this.form.value).length == 11){
      // New customer pay type = 2;
      this.validatePayData(this.form.value,false,2);
    }
  }

  public formStatus(){
    if (!this.form.invalid) {
      this.validateNewCustomer();
    }
  }

  public payMint(){
    this.newCustomerState = false;
  }

  /**
   * Cuando sea un cliente existente e ingrese una tarjeta que se valide con el numero de telefono,
   * o cuando sea un cliente nuevo y complete todos los campos del formulario de cliente nuevo correctamente
   * se llamara a la funcion, esta funcion se encarga de enviar al servicio la informacion de pago de acuerdo al caso,
   * tambien envia que el formulario es valido para habilitar el boton de pago y envia el tipo de cliente que
   * realizara la transaccion para saber que metodo de pago utilizar.
   * @param {object} payData - El objeto contiene los valores de pago, en caso de sea un cliente nuevo incluye todos los valores
   * para crear una tarjeta nueva. Se agrega la locacion seleccionada para pickup y en caso de que sea necesario un mensaje
   * de indicaciones para el comercio.
   * @param {boolean} valid - Envia false si el formulario es valido, esto hace que disable=false para el boton de comprar
   * @param {number} type - Envia 1 si el cliente es un cliente existente y envia 2 si es un cliente nuevo
   */
  public validatePayData(payData, valid, type){
    if(this.selectedLocation == 1){
      payData.location = "Local";
    } else if(this.selectedLocation == 2){
      payData.location = "Reforma";
    } else if(this.selectedLocation == 3){
      payData.location = "1 Avenida";
    } else{
      payData.location = "No definido";
    }
    payData.message = this.locationMessage;
    payData.validCustomer = valid;
    payData.payType = type;
    this.detailsService.addPayElements(payData);
  }

}
