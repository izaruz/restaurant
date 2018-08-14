import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  // Obtiene el menu del comercio
  getMenu() {
    return this.http.get('rest/pedidos/menu');
  }

  // Obtener informacion del cliente existente de acuerdo al numero de m1nt
  getCustomer(customer: any): Observable<any> {
    return this.http.get('rest/pedidos/tarjeta/'+customer);
  }

  // Obtener orden existente
  getOrder(order: any): Observable<any> {
    return this.http.get('rest/pedidos/orden/'+order.id+'/'+order.hash)
  }

  // Validar que la m1nt card corresponta con el numero de telefono
  validateCustomer(data: any): Observable<any>{
    const headers = new Headers({"Content-Type": "application/json"});
	  return this.http.post('rest/pedidos/verificar-telefono', data);
  }

  // Pago para cliente existente
  setOrder(orden: any): Observable<any>{
    // const headers = new Headers({"Content-Type": "application/json"});
	  return this.http.post('rest/pedidos/orden-pagar', orden);
  }

  // Pago para cliente nuevo
  setCustomerOrder(orden: any): Observable<any>{
    // const headers = new Headers({"Content-Type": "application/json"});
	  return this.http.post('rest/pedidos/pagocc', orden);
  }

  // Pago cliente nuevo a credomatic
  
}
