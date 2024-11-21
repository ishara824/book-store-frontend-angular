import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SignupService} from "./signup.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public submit: boolean = false;
  constructor(private signupService: SignupService, private router: Router) { }

  signupForm = new FormGroup({
    name: new FormControl("",Validators.required),
    email: new FormControl("",Validators.required),
    password: new FormControl("",[Validators.required,Validators.minLength(6)]),
    password_confirmation: new FormControl("",Validators.required)
  });

  onSubmit() {
    console.warn(this.signupForm.value);
    if (this.signupForm.valid) {
      this.submit = true;
      const formValues = this.signupForm.value;

    const signupPayload = {
      name: formValues.name || '',
      email: formValues.email || '',
      password: formValues.password || '',
      password_confirmation: formValues.password_confirmation || ''
    };
      this.signupService.signUp(signupPayload).subscribe(resuult=>{
        if (resuult.user) {
          this.router.navigateByUrl('/login');
        } else {
          this.router.navigateByUrl('/signup');
        }
      });

    }
  }

  ngOnInit(): void {
  }

}
