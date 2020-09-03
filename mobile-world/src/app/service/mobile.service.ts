import { Injectable } from '@angular/core';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  private url = 'http://localhost:8080/v1/mobiles';
  constructor(private http: HttpClient) { }


  getAllMobiles(): Observable<any> {
    return this.http.get(`${this.url}/retriveMobiles`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }
  getmobileById(id: number): Observable<any> {
    return this.http.get(`${this.url}/retriveMobiles/MobileById/${id}`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }
  getmobileByBrand(mobileBrand: string): Observable<any> {
    return this.http.get(`${this.url}/retriveMobiles/MobileByBrand/${mobileBrand}`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }
  getmobileByModel(mobileModel: string): Observable<any> {
    return this.http.get(`${this.url}/retriveMobiles/MobileByModel/${mobileModel}`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }
  getmobileByPrice(mobilePrice: number): Observable<any> {
    return this.http.get(`${this.url}/retriveMobiles/MobileByPrice/${mobilePrice}`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }
  getmobileByRating(mobileRating: number): Observable<any> {
    return this.http.get(`${this.url}/retriveMobiles/MobileByRating/${mobileRating}`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }
  getmobileBrandAndMobileModel(brand: string, model: string): any {
    return this.http.get(`${this.url}/mobileBrandAndmobileModel/MobileBrand/${brand}/MobileModel/${model}`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }
  // getmobileBrandAndMobilePrice(brand: string, price: number): any {
  //   return this.http.get(`${this.url}/mobileBrandAndmobilePrice/MobileBrand/${brand}/MobilePrice/${price}`).pipe(tap(data =>
  //     data), catchError(this.errorHandler));
  // }
  // getmobileModelAndMobilePrice(model: string, price: number): any {
  //   return this.http.get(`${this.url}/mobileModelAndmobilePrice/MobileModel/${model}/MobilePrice/${price}`).pipe(tap(data =>
  //     data), catchError(this.errorHandler));
  // }
  getmobileModelAndPriceBetween(mobileModel: string, start: number, end: number): any {
    return this.http.get(`${this.url}/retriveMobiles/MobileModelAndPriceBetween/${mobileModel}/start/${start}/between/end/${end}`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }
  getmobileBrandAndPriceBetween(mobileBrand: string, start: number, end: number): any {
    return this.http.get(`${this.url}/retriveMobiles/MobileBrandAndPriceBetween/${mobileBrand}/start/${start}/between/end/${end}`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }
  getmobileByPriceLessThanEqual(price: number): Observable<any> {
    return this.http.get(`${this.url}/retriveMobiles/MobilePriceLessThanEqual/${price}`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }
  getmobileByPriceGreaterThanEqual(price: number): Observable<any> {
    return this.http.get(`${this.url}/retriveMobiles/MobilePriceGreaterThanEqual/${price}`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }
  getmobileByRatingGreaterThanEqual(rating: number): Observable<any> {
    return this.http.get(`${this.url}/retriveMobiles/MobileRatingGreaterThanEqual/${rating}`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }
  getmobilePriceBetween(start: number, end: number): any {
    return this.http.get(`${this.url}/retriveMobiles/MobilePriceBetween/start/${start}/between/end/${end}`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error.message || 'Server Error');
  }
}
