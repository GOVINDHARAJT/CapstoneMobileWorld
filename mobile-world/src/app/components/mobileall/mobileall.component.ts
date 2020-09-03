import { Component, OnInit } from '@angular/core';
import {Mobile} from './../../model/mobile';
import { ActivatedRoute, Router } from '@angular/router';
import { MobileService } from 'src/app/service/mobile.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Cart } from 'src/app/model/cart';
import { SessionStorageService } from 'angular-web-storage';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddcartComponent } from 'src/app/snackBar/addcart/addcart.component';
import { CartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-mobileall',
  templateUrl: './mobileall.component.html',
  styleUrls: ['./mobileall.component.css']
})
export class MobileallComponent implements OnInit {
  private id: number;
  allmobile: Mobile[];
  mobile: Mobile;
  sessionValue = '';
  userName = '';
  email = '';
  durationInSeconds = 1;
  cart: Cart;
   hidden = false;
   panelOpenState = false;
  constructor(private route: ActivatedRoute, private mobileService: MobileService,
              private router: Router, config: NgbCarouselConfig,private cartService: CartService,private snackBar: MatSnackBar,public session: SessionStorageService) {
      // customize default values of carousels used by this component tree
      config.interval = 2000;
      config.wrap = true;
      config.keyboard = false;
      config.pauseOnHover = true;
    }
  ngOnInit(): void {
    this.getAllMobiles();

    this.userName = sessionStorage.getItem('UserName');
    this.email = sessionStorage.getItem('EmailId');
   
    this.route.paramMap.subscribe((params) => {
      this.id = +params.get('id');
      this.viewMobileDetails(this.id);
    });
  }
  viewMobileDetails(id: number): any {
    this.mobileService.getmobileById(id).subscribe((response) => (this.mobile = response));
  }

  // tslint:disable-next-line:ban-types
  getAllMobiles(): any {
    this.mobileService.getAllMobiles().subscribe((response) =>
      this.allmobile = response);
  }
  // onChoseLocation(event): any {
  //   this.latitude = event.coords.lat;
  //   this.longitude = event.coords.lng;
  //   this.locationChosen = true;
  // }

   toggleBadgeVisibility(): any {
     this.hidden = !this.hidden;
   }
  onClick(mobileId: number): any {
    this.router.navigate(['mobileSingleCard',mobileId]);
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
