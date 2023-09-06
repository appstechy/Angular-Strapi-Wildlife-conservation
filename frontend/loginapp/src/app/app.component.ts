import { Component, OnInit } from '@angular/core';
import { FetchFromStrapiService } from './fetch-from-strapi.service';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { OneSignal } from 'onesignal-ngx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  headerComponent: any = [];

  isUserAuthenticated: boolean = false;

  title = 'loginapp';
  websiteLogo: string = ""!;
  websiteName: string = ""!;
  localhost: string = "http://localhost:1337";
  footerComponent: any = [];

  
  constructor(private service: FetchFromStrapiService, private authServive: AuthService, private router: Router, private os: OneSignal){
    this.os.init({
      appId: environment.APP_ID!,
      serviceWorkerPath: '/OneSignalSDKWorker.js',
      allowLocalhostAsSecureOrigin: true,
    })
  }


  ngOnInit(): void {
      this.service.fetchDataFromHeaderComponent().subscribe((data)=>{
        this.headerComponent = data.data[0];
        console.log("HEADER",this.headerComponent.attributes.image.data[0].attributes.url);
        this.websiteLogo = this.headerComponent.attributes.image.data[0].attributes.url;
        console.log("LOGO",this.websiteLogo);
        this.websiteName = this.headerComponent.attributes.name;
      })

      this.service.fetchDataFromFooterComponent().subscribe((data)=>{
        this.footerComponent = data.data[0]
      })


      this.isUserAuthenticated = this.authServive.isAuthenticated();


      
  }

  logout(){

    localStorage.removeItem("jwt");
    alert("lOGGED OUT");
    this.ngOnInit();
    setTimeout(() => {
      location.reload();
    }, 100);
  }


  navigateTo(){
    this.router.navigate(["/protected"]);
  }

  // unsubscribeFromNotification() {
  //   console.log("Unsubscribed");
  //   this.service.addPushSubscriber().subscribe((data)=>{
  //     console.log(data);
  //   }, (error)=> console.log(error))

  // }
  
}
