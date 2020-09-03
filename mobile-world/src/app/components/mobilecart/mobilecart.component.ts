import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { OrderService } from 'src/app/service/order.service';
import { SessionStorageService } from 'angular-web-storage';
import { BuyorderComponent } from 'src/app/snackBar/buyorder/buyorder.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Order } from 'src/app/model/order';

@Component({
  selector: 'app-mobilecart',
  templateUrl: './mobilecart.component.html',
  styleUrls: ['./mobilecart.component.css']
})
export class MobilecartComponent implements OnInit {

  allcart:Cart[];
  order : Order;
  email: string;
  userName:string;
  hidden = false;
  panelOpenState = false;
  id : number;
  durationInSeconds=1;
 constructor(private route: ActivatedRoute, private cartService: CartService,private orderService: OrderService,private snackBar: MatSnackBar, private router: Router,public session: SessionStorageService) { }
 ngOnInit(): void {
  this.userName = sessionStorage.getItem('UserName');
   this.route.paramMap.subscribe(params => {
     this.email = sessionStorage.getItem('EmailId');
     this.getmobileByUserEmail(this.email);
   }
   );
   this.reloadData();
 }
  reloadData() {
    this.cartService.getcartByUserEmail(sessionStorage.getItem('EmailId')).subscribe((response) =>
    this.allcart = response);;
  }

 getmobileByUserEmail(email: string): any {
   this.cartService.getcartByUserEmail(email).subscribe((response) =>
     this.allcart = response);
 }


 toggleBadgeVisibility(): any {
   this.hidden = !this.hidden;
 }
 buyorder(cartId : number,
   cartMobileLogourl : string,
  cartMobileBrand : string,
  cartMobileModel : string,
  cartMobileImageurl : string,
  cartMobilePrice : number): any
{

  const orderObj = new Order(0, cartMobileLogourl,cartMobileBrand, cartMobileModel, cartMobileImageurl,cartMobilePrice,'', this.email , this.userName);



  this.snackBar.openFromComponent(BuyorderComponent, {
    duration: this.durationInSeconds * 3000,
    panelClass: ['success']
  });

  this.orderService.createOrder(orderObj).subscribe((response) =>
this.order = response);
this.deleteById(cartId);
}

 deleteById(id : number){
  this.cartService.deleteOrder(id).subscribe((response) =>{
  this.allcart = response;
  this.reloadData();
});
  
 }

}
