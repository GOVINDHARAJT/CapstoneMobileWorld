import { Cart } from './../model/cart';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private url = 'http://localhost:8080/v1/cart';
  constructor(private http: HttpClient) { }


  createOrder(cart: Cart ): Observable<any> {
    return this.http.post(`${this.url}/createOrder`, cart).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }
deleteOrder(id : number): Observable<any>{
  return this.http.delete(`${this.url}/deleteOrder/${id}`).pipe(tap(data =>
    data), catchError(this.errorHandler));
}
  createMultipleOrder(cart: Cart ): Observable<any> {
    return this.http.post(`${this.url}/createMultipleOrders`, cart).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }
  getcartByUserEmail(userEmail: string): Observable<any> {
    return this.http.get(`${this.url}/retriveCartMobiles/CartByUserEmail/${userEmail}`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }
   errorHandler(error: HttpErrorResponse): any {
    return observableThrowError(error.message || 'Server Error');
  }
}
