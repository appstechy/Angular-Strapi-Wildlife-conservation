import { Component, OnInit } from '@angular/core';
import { FetchFromStrapiService } from '../fetch-from-strapi.service';


@Component({
  selector: 'app-ourteam',
  templateUrl: './ourteam.component.html',
  styleUrls: ['./ourteam.component.scss']
})
export class OurteamComponent implements OnInit{
  constructor(private service: FetchFromStrapiService){}

  ourTeamComponent: any = [];
  localhost: string = "http://localhost:1337";

  ngOnInit(): void {
    this.service.fetchDataFromOurTeamComponent().subscribe((data)=>{
      this.ourTeamComponent = data.data[0];

    })    
  }
}
