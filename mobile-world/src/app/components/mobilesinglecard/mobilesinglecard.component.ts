import { Component, OnInit } from '@angular/core';
import {Mobile} from './../../model/mobile';
import { ActivatedRoute, Router } from '@angular/router';
import { MobileService } from 'src/app/service/mobile.service';
import { CartService } from 'src/app/service/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SessionStorageService } from 'angular-web-storage';
import { Cart } from 'src/app/model/cart';
import { AddcartComponent } from 'src/app/snackBar/addcart/addcart.component';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mobilesinglecard',
  templateUrl: './mobilesinglecard.component.html',
  styleUrls: ['./mobilesinglecard.component.css']
})
export class MobilesinglecardComponent implements OnInit {

  private id: number;

  hidden = false;
  panelOpenState = false;
  mobile: Mobile;
  starClassName = 'star-rating-blank';
  //name: string;
  sessionValue = '';
  userName = '';
  email = '';
  durationInSeconds = 1;
  cart: Cart;

  constructor(
    private route: ActivatedRoute,
    private mobileService: MobileService,
    private router: Router,
    private snackBar: MatSnackBar,
    private cartService: CartService,
    config: NgbCarouselConfig,
     public session: SessionStorageService 
  ) {}

  ngOnInit(): any {
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

  viewNextMobile(): any {
    this.id = this.id + 1;
    this.router.navigate(['mobileSingleCard', this.id]);
    this.router.navigate([{ outlets: { mobileOutlet: ['mobileSingleCard', this.id] } }], { relativeTo: this.route });
  }
  toggleBadgeVisibility(): any {
    this.hidden = !this.hidden;
  }
  backList(): any {
    this.router.navigate(['mobile']);
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
