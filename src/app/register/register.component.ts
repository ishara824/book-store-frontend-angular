import { Component } from '@angular/core';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';
import { SessionService } from '../auth/session.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public emailError:string = "";
  public passwordError: string = "";
  public submit:boolean = false;

  constructor(private registerService: RegisterService,private router: Router, private sessionService: SessionService) {}

  registrationForm = new FormGroup(
    {
      name: new FormControl<string>('', Validators.required),
      email: new FormControl<string>('', Validators.required),
      password: new FormControl<string>('', [Validators.minLength(6),Validators.required]),
      password_confirmation: new FormControl<string>('', [Validators.minLength(6),Validators.required])
    }
  );

  onSubmit() {
    if (this.registrationForm.valid) {
      this.submit = true;
      const formValues = this.registrationForm.value;

    const registrationPayload = {
      name: formValues.name || '',
      email: formValues.email || '',
      password: formValues.password || '',
      password_confirmation: formValues.password_confirmation || ''
    };
      this.registerService.register(registrationPayload).subscribe(response=>{
        if (response.status === 200) {
          alert("Registerd Successfully.");
          this.router.navigateByUrl('/login');
        }
      },error => {
        this.emailError = error.error.errors.email[0];
        this.passwordError = error.error.errors.password[0];
        this.submit = false;
        
      })

    }
  }

}
