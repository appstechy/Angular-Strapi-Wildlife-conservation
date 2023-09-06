import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FetchFromStrapiService } from '../fetch-from-strapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  signinForm: FormGroup;
  constructor(private fb: FormBuilder, private service: FetchFromStrapiService, private router:Router){
    this.signinForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }


    signin() {
    if (this.signinForm.valid) {
      // Form is valid, submit your data here
      const formData = this.signinForm.value;
      console.log('Form Data:', formData);

      const userDetails = {
        identifier: formData.username,
        password: formData.password
        }

      console.log(userDetails);

      this.service.loginUser(userDetails).subscribe((data)=>{
        alert("Sucessfully logged in");
        console.log(data);
        localStorage.setItem("jwt",data.jwt);
        this.router.navigate(["/protected"]);
        setTimeout(() => {
          location.reload();
        }, 100);

        
      },(error)=>{
        alert("Username/Password is invalid!!!");
        console.log(error);
      })

    } else {
      // Form is invalid, display error messages
      // You can access individual form controls and their errors using this.signupForm.get('controlName')
    }
  }

}
