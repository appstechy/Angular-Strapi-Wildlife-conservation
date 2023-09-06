import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { authGuard } from './auth/auth.guard';
import { ProtectedComponent } from './protected/protected.component';


const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch:"full"},
  { path: "about-us", component: AboutusComponent},
  { path: "gallery", component: GalleryComponent},
  { path: "our-team", component: OurteamComponent},
  { path: "contact-us", component: ContactusComponent},
  { path: "sign-up", component: SignUpComponent},
  { path: "sign-in", component: SignInComponent},
  { path: "protected", component: ProtectedComponent, canActivate:[authGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
