import { Component, OnInit } from '@angular/core';
import { FetchFromStrapiService } from '../fetch-from-strapi.service';


@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit{
  localhost: string = "http://localhost:1337"
  aboutUsComponent: any = [];

  constructor(private service:FetchFromStrapiService){

  }

  ngOnInit(): void {
      
    this.service.fetchDataFromAboutUsComponent().subscribe((data)=>{
      this.aboutUsComponent = data.data[0];
    })
  }

}
