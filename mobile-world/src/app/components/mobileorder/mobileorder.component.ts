import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/service/order.service';
import { SessionStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-mobileorder',
  templateUrl: './mobileorder.component.html',
  styleUrls: ['./mobileorder.component.css']
})
export class MobileorderComponent implements OnInit {

  allorder : Order[];
  email: string;
  userName:string;
  hidden = false;
  panelOpenState = false;
  id : number;
  durationInSeconds=1;
 constructor(private route: ActivatedRoute,private orderService: OrderService, private router: Router,public session: SessionStorageService) { }
 ngOnInit(): void {
  this.userName = sessionStorage.getItem('UserName');
   this.route.paramMap.subscribe(params => {
     this.email = sessionStorage.getItem('EmailId');
     this.getmobileByUserEmail(this.email);
   }
   );
  //  this.reloadData();
 }
  // reloadData() {
  //   this.orderService.getorderByUserEmail(sessionStorage.getItem('EmailId')).subscribe((response) =>
  //   this.allorder = response);;
  // }

 getmobileByUserEmail(email: string): any {
   this.orderService.getorderByUserEmail(email).subscribe((response) =>
     this.allorder = response);
 }


 toggleBadgeVisibility(): any {
   this.hidden = !this.hidden;
 }
//  buyorder(cartMobileLogourl : string,
//   cartMobileBrand : string,
//   cartMobileModel : string,
//   cartMobileImageurl : string,
//   cartMobilePrice : number): any
// {

//   const orderObj = new Order(0, cartMobileLogourl,cartMobileBrand, cartMobileModel, cartMobileImageurl,cartMobilePrice,'', this.email , this.userName);



//   this.snackBar.openFromComponent(BuyorderComponent, {
//     duration: this.durationInSeconds * 3000,
//     panelClass: ['success']
//   });

//   this.orderService.createOrder(orderObj).subscribe((response) =>
// this.order = response);
// }

//  deleteById(id : number){
//   this.cartService.deleteOrder(id).subscribe((response) =>{
//   this.allcart = response;
//   this.reloadData();
// });
  
//  }

}
