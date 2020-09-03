import { Component, OnInit } from '@angular/core';
import { Mobile } from 'src/app/model/mobile';
import { ActivatedRoute, Router } from '@angular/router';
import { MobileService } from 'src/app/service/mobile.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from 'src/app/service/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cart } from 'src/app/model/cart';
import { SessionStorageService } from 'angular-web-storage';
import { AddcartComponent } from 'src/app/snackBar/addcart/addcart.component';

@Component({
  selector: 'app-mobilebybrand',
  templateUrl: './mobilebybrand.component.html',
  styleUrls: ['./mobilebybrand.component.css']
})
export class MobilebybrandComponent implements OnInit {

  allmobile:Mobile[];
  brand: string;
  hidden = false;
  panelOpenState = false;
  private id: number;
  mobile: Mobile;
  sessionValue = '';
  userName = '';
  email = '';
  durationInSeconds = 1;
  cart: Cart;

  constructor(private route: ActivatedRoute, private mobileService: MobileService,
              private router: Router, config: NgbCarouselConfig,private cartService: CartService,private snackBar: MatSnackBar,public session: SessionStorageService) {
      // customize default values of carousels used by this component tree
      config.interval = 2000;
      config.wrap = true;
      config.keyboard = false;
      config.pauseOnHover = true;
    }
 ngOnInit(): void {
  this.userName = sessionStorage.getItem('UserName');
  this.email = sessionStorage.getItem('EmailId');
   this.route.paramMap.subscribe(params => {
     this.brand = params.get('brand');
     this.getmobileByBrand(this.brand);
   }
   );

 }


 // tslint:disable-next-line:ban-types
 getmobileByBrand(brand: string): any {
   this.mobileService.getmobileByBrand(brand).subscribe((response) =>
     this.allmobile = response);
 }


 toggleBadgeVisibility(): any {
   this.hidden = !this.hidden;
 }
 onClick(mobileId: number): any {
   this.router.navigate(['mobileSingleCard', mobileId]);
 }

 submit(cartMobileLogourl : string,
  cartMobileBrand : string,
  cartMobileModel : string,
  cartMobileImageurl : string,
  cartMobilePrice : number): any
{

  const cartObj = new Cart(0, cartMobileLogourl,cartMobileBrand, cartMobileModel, cartMobileImageurl,cartMobilePrice,'', this.email , this.userName);



  this.snackBar.openFromComponent(AddcartComponent, {
    duration: this.durationInSeconds * 1000,
    panelClass: ['success']
  });

  this.cartService.createOrder(cartObj).subscribe((response) =>
this.cart = response);
}

}
