import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "./login.service";
import {Router} from "@angular/router";
import {SessionService} from "../auth/session.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public errorMessage:string = "";
  public submit:boolean = false;
  constructor(private loginService: LoginService,private router: Router, private sessionService: SessionService) {}

  loginForm = new FormGroup(
    {
      email: new FormControl<string>('', [Validators.required, Validators.email]),
      password: new FormControl<string>('', [Validators.minLength(5),Validators.required])
    }
  );


  onSubmit() {
    if (this.loginForm.valid) {
      this.submit = true;
      const formValues = this.loginForm.value;

    const loginPayload = {
      email: formValues.email || '',
      password: formValues.password || ''
    };
      this.loginService.login(loginPayload).subscribe(result=>{
        // console.log(result);
        if (result.status === 200) {
          
          this.sessionService.handle(result.body);
          if (result.body.user.role == "ADMIN") {
            this.router.navigateByUrl('/admin-dashboard');
          } else if (result.body.user.role == "AUTHOR") {
            this.router.navigateByUrl('/author-dashboard');
          }
          
        } else if (result.error) {
          this.router.navigateByUrl('/login');
        }

      },error => {
        console.log(error.error.message);
        this.errorMessage = error.error.message;
        this.submit = false;
      })

    }
  }


}
