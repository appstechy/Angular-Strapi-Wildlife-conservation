import { Component, OnInit } from '@angular/core';
import { FetchFromStrapiService } from '../fetch-from-strapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor( private service: FetchFromStrapiService){
  }

  homeComponent: any = [];
  localhost: string = "http://localhost:1337"
  ngOnInit(): void {
      this.service.fetchDataFromHomeComponent().subscribe((data)=>{
        // console.log(data);
        this.homeComponent = data.data[0].attributes.section;
        console.log(this.homeComponent);

      },
      (error)=>{
        console.log(error);
      }
      )
  }



}
