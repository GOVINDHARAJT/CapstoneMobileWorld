import { Component, OnInit } from '@angular/core';
import { Mobile } from 'src/app/model/mobile';
import { ActivatedRoute, Router } from '@angular/router';
import { MobileService } from 'src/app/service/mobile.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from 'src/app/service/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SessionStorageService } from 'angular-web-storage';
import { Cart } from 'src/app/model/cart';
import { AddcartComponent } from 'src/app/snackBar/addcart/addcart.component';

@Component({
  selector: 'app-mobilebybetweenprice',
  templateUrl: './mobilebybetweenprice.component.html',
  styleUrls: ['./mobilebybetweenprice.component.css']
})
export class MobilebybetweenpriceComponent implements OnInit {

  allmobile:Mobile[];
  start: number;
  end: number;
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
      this.start = +params.get('start');
      this.end = +params.get('end');
      this.getmobileBewteenPrice(this.start, this.end);
    }
    );

  }


  // tslint:disable-next-line:ban-types
  getmobileBewteenPrice(start: number, end: number): any {
    this.mobileService.getmobilePriceBetween(start, end).subscribe((response) =>
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
