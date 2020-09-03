import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: SocialAuthService, private router: Router, private sessionStorageService: SessionStorageService) { }

  ngOnInit(): void {
  }
  signOut(): any
  {
      this.authService.signOut();
      sessionStorage.clear();
  }

}
