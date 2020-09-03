import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { MobileComponent } from './components/mobile/mobile.component';
import {MobilecartComponent} from './components/mobilecart/mobilecart.component'
import { MobileallComponent } from './components/mobileall/mobileall.component';
import { MobilesinglecardComponent } from './components/mobilesinglecard/mobilesinglecard.component';
import { MobilebyratingComponent } from './components/mobilebyrating/mobilebyrating.component';
import { MobilebybrandComponent } from './components/mobilebybrand/mobilebybrand.component';
import { MobilebybetweenpriceComponent } from './components/mobilebybetweenprice/mobilebybetweenprice.component';
import { MobileorderComponent } from './components/mobileorder/mobileorder.component';

const routes: Routes = [
  {path: '', component: LoginpageComponent},//LandingpageComponent},
  {path: 'home', component: LandingpageComponent},
  {path: 'logout', component: LoginpageComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'contactus', component: ContactusComponent},
  {path: 'yourorders',component: MobileorderComponent},
  {path: 'mobileSingleCard/:id', component: MobilesinglecardComponent },
  {path: 'cart',component: MobilecartComponent},
  {path: 'mobile', component: MobileComponent,
  children: [
    {path: '', component: MobileallComponent, outlet: 'mobileOutlet'},
    { path: 'mobilebyrating/:rating', component: MobilebyratingComponent, outlet: 'mobileOutlet'},
    { path: 'mobilebybrand/:brand', component: MobilebybrandComponent, outlet: 'mobileOutlet'},
    { path: 'mobilebybetweenprice/:start/end/:end', component: MobilebybetweenpriceComponent, outlet: 'mobileOutlet' }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
