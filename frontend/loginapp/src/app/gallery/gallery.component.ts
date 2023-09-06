import { Component, OnInit } from '@angular/core';
import { FetchFromStrapiService } from '../fetch-from-strapi.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  galleryComponent: any = [];
  localhost: string = "http://localhost:1337";


  constructor(private service:FetchFromStrapiService){

  }

  ngOnInit(): void {
      this.service.fetchDataFromGalleryComponent().subscribe((data)=>{
        this.galleryComponent = data.data[0];
        console.log(this.galleryComponent);
        console.log(this.galleryComponent.attributes.gallery)
      })
  }
}
