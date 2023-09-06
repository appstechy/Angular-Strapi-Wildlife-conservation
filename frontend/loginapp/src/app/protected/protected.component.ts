import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { FetchFromStrapiService } from '../fetch-from-strapi.service';


@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.scss']
})
export class ProtectedComponent implements OnInit{
  localhost: string = "http://localhost:1337";

  currentDonation: number = 0;
  targetDonation: number = 0;
  incrementValue: number = 10; // The amount to increment by
  incrementInterval: number = 50; // Milliseconds between increments

  // working hour increment effect
  currentWorkingHour: number = 0;
  targetWorkingHour: number = 0;

  // participation in the campaign increment effect
  currentParticipation: number = 0;
  targetParticipation: number = 0;
  incrementValueForParticipation: number = 1;

// representative increment effect
  currentRepresentative: number = 0;
  targetRepresentative: number = 0;
  userDetails:any = [];
  eventsDetails:any = [];
  dashboard: any = [];

  constructor(private service: FetchFromStrapiService){}

  ngOnInit(): void {
      const token:any = jwt_decode(localStorage.getItem("jwt")!)
      console.log("TOKEN-",token.id);

      this.service.fetchUserDetails(token.id).subscribe((data)=>{

        this.userDetails = data;
        console.log("User details-",this.userDetails);
        this.targetDonation = this.userDetails.donation;
        this.targetWorkingHour = this.userDetails.volunteer_hours;
        this.targetParticipation = this.userDetails.participation;
        this.targetRepresentative = this.userDetails.representative;

          
        this.startIncreasingDonation();
        this.startIncreasingWorkingHour();
        this.startIncreasingParticipation();
        this.startIncreasingRepresentative();

      },(error)=>{
        console.log(error);
      })
      



      this.service.fetchEventsDetails().subscribe((data)=>{
        this.eventsDetails = data.data;
        console.log("Events-",this.eventsDetails);
      })


      this.service.fetchDetailsFromDashboard().subscribe((data)=>{
        this.dashboard = data.data[0];
      })
  }


  startIncreasingDonation(): void {
    const intervalId = setInterval(() => {
      if (this.currentDonation < this.targetDonation) {
        this.currentDonation += this.incrementValue;
      } else {
        clearInterval(intervalId); // Stop the interval when the target is reached
      }
    }, this.incrementInterval);
  }


  startIncreasingWorkingHour(): void {
    const intervalId = setInterval(() => {
      if (this.currentWorkingHour < this.targetWorkingHour) {
        this.currentWorkingHour += this.incrementValue;
      } else {
        clearInterval(intervalId); // Stop the interval when the target is reached
      }
    }, this.incrementInterval);
  }

  startIncreasingParticipation(): void {
    const intervalId = setInterval(() => {
      if (this.currentParticipation < this.targetParticipation) {
        this.currentParticipation += this.incrementValueForParticipation;
      } else {
        clearInterval(intervalId); // Stop the interval when the target is reached
      }
    }, this.incrementInterval);
  }

  startIncreasingRepresentative(): void {
    const intervalId = setInterval(() => {
      if (this.currentRepresentative < this.targetRepresentative) {
        this.currentRepresentative += this.incrementValueForParticipation;
      } else {
        clearInterval(intervalId); // Stop the interval when the target is reached
      }
    }, this.incrementInterval);
  }

}
