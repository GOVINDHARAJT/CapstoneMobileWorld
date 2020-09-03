import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OpeningComponent } from 'src/app/snackBar/opening/opening.component';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  durationInSeconds = 1;
  panelOpenState = false;
  pattern = String;
  value:string;
  constructor( private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
    
  openBrand(brand: string ): any
  {
      this.snackBar.openFromComponent(OpeningComponent, {
    duration: this.durationInSeconds * 1000,
    panelClass: ['success']
  });
      this.router.navigate([{ outlets: { mobileOutlet: ['mobilebybrand', brand] }}], {relativeTo: this.route});
  }

  openRating(rating: number ): any
  {
      this.snackBar.openFromComponent(OpeningComponent, {
    duration: this.durationInSeconds * 1000,
    panelClass: ['success']
  });
      this.router.navigate([{ outlets: { mobileOutlet: ['mobilebyrating', rating] }}], {relativeTo: this.route});
  }
  openPrice(start: number, end: number): any
  {

  this.snackBar.openFromComponent(OpeningComponent, {
    duration: this.durationInSeconds * 1000,
    panelClass: ['success']
  });
  this.router.navigate([{ outlets: { mobileOutlet: ['mobilebybetweenprice', start,  'end', end] }}], {relativeTo: this.route});
  }
}
