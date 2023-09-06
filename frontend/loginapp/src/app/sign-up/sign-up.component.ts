import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FetchFromStrapiService } from '../fetch-from-strapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  signupForm: FormGroup;
  constructor(private fb: FormBuilder, private service: FetchFromStrapiService, private router: Router){
    this.signupForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  signup() {
    if (this.signupForm.valid) {
      // Form is valid, submit your data here
      const formData = this.signupForm.value;
      console.log('Form Data:', formData);

      const userDetails = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        fullname: formData.fullName,
        }

      console.log(userDetails);

      this.service.registerUser(userDetails).subscribe((data)=>{
        alert("Sucessfully registered");
        console.log(data);

        localStorage.setItem("jwt",data.jwt);
        this.router.navigate(["/protected"]);
        setTimeout(() => {
          location.reload();
        }, 100);


      },(error)=>{
        console.log(error);
      })

    } else {
      // Form is invalid, display error messages
      // You can access individual form controls and their errors using this.signupForm.get('controlName')
    }
  }
}
