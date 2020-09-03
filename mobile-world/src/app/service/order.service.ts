import { Order } from './../model/order';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private url = 'http://localhost:8080/v1/order';
  constructor(private http: HttpClient) { }


  createOrder(order: Order ): Observable<any> {
    return this.http.post(`${this.url}/createOrder`, order).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }
deleteOrder(id : number): Observable<any>{
  return this.http.delete(`${this.url}/deleteOrder/${id}`).pipe(tap(data =>
    data), catchError(this.errorHandler));
}
  createMultipleOrder(order: Order ): Observable<any> {
    return this.http.post(`${this.url}/createMultipleOrders`, order).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }
  getorderByUserEmail(userEmail: string): Observable<any> {
    return this.http.get(`${this.url}/retriveOrderMobiles/OrderByUserEmail/${userEmail}`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }
   errorHandler(error: HttpErrorResponse): any {
    return observableThrowError(error.message || 'Server Error');
  }
}
