import { Component, OnInit } from '@angular/core';
import { SocialUser, SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';
import { SessionStorage, SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginFailssnackbarComponent } from 'src/app/snackBar/login-failssnackbar/login-failssnackbar.component';
import { LoginsnackbarComponent } from 'src/app/snackBar/loginsnackbar/loginsnackbar.component';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  user: SocialUser;
  durationInSeconds = 2;
  panelOpenState = false;
  @SessionStorage() sessionValue = `Hello ${+new Date()}`;

  constructor(
    private authService: SocialAuthService,
    private router: Router,
    private snackBar: MatSnackBar,
    private sessionStorageService: SessionStorageService
  ) {}

  imageObject: Array<object> = [
    {
      image: '../../../assets/o0.png', // Support base64 image
      thumbImage: '../../../assets/o0.png',
      alt: '', // Optional: You can use this key if want to show image with alt
    },
    {
      image: '../../../assets/o3.jpg',
      thumbImage: '../../../assets/o3.jpg',
      alt: '',
    },
    {
      image: '../../../assets/o4.jpg',
      thumbImage: '../../../assets/o4.jpg',
      alt: '',
    },
    {
      image: '../../../assets/o7.png', // Support base64 image
      thumbImage: '../../../assets/o7.png',
      alt: '', // Optional: You can use this key if want to show image with alt
    }
  ];
  sliderInfinite = true;
  sliderAutoSlide = true;
  sliderAnimationSpeed = 13;

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.userLogged(this.user);
      sessionStorage.setItem('UserName', this.user.firstName);
      sessionStorage.setItem('EmailId', this.user.email);
      sessionStorage.setItem('PhotoUrl', this.user.photoUrl);
    });
  }
  singIn(): any {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    //   this.snackBar.openFromComponent(LoginsnackbarComponent, {
    //    duration: this.durationInSeconds * 1000,
    //  });
    // this.router.navigate(['home']);
  }

  userLogged(user: SocialUser): any {
    if (user == null) {
      this.snackBar.openFromComponent(LoginFailssnackbarComponent, {
        duration: this.durationInSeconds * 1000,
        panelClass: ['success'],
      });
      this.router.navigate(['logout']);
    } else {
      this.snackBar.openFromComponent(LoginsnackbarComponent, {
        duration: this.durationInSeconds * 1000,
        panelClass: ['success-snackbar'],
      });
      this.router.navigate(['home']);
    }
  }

}
