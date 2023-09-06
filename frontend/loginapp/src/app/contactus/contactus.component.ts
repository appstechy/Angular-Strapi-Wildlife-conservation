import { Component, OnInit } from '@angular/core';
import { FetchFromStrapiService } from '../fetch-from-strapi.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit{
  
  contactUsComponent: any = [];
  mapQuery: string = "";
  
  mapUrl: SafeResourceUrl;

  contactusForm: FormGroup;

  constructor(private service:FetchFromStrapiService, private sanitizer: DomSanitizer, private fb: FormBuilder ){
    this.mapUrl=this.sanitizer.bypassSecurityTrustResourceUrl(`https://maps.google.com/maps?width=100%&height=600&hl=en&q=${this.mapQuery}&ie=UTF8&t=&z=14&iwloc=B&output=embed`);
    this.contactusForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['',[Validators.required]]
    });
  }



  ngOnInit(): void {
      this.service.fetchDataFromContactUsComponent().subscribe((data)=>{
        this.contactUsComponent = data.data[0];
        this.mapQuery = data.data[0].attributes.map;
        console.log(this.mapQuery);
        this.mapUrl=this.sanitizer.bypassSecurityTrustResourceUrl(`https://maps.google.com/maps?width=100%&height=600&hl=en&q=${this.mapQuery}&ie=UTF8&t=&z=14&iwloc=B&output=embed`);
      });
  }


  submitContactUsForm(){

    if(this.contactusForm.valid){
      const formData = this.contactusForm.value;
      const enteredData = {
        "data":{
          email:formData.email,
          message:formData.message
        }
      }

      this.service.submitContactUsForm(enteredData).subscribe((data)=>{
        alert("Sucessfully submitted.");
      },(error)=>console.log(error))
    } else{
      console.log("Invalid data");
    }
  }



}
