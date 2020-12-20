import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../_services/authentication.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signupForm: FormGroup;
  public email: string = '';
  public name: string = '';
  public password: string = '';
  public warningMessage: string;

  constructor(public authService: AuthenticationService, public router: Router, private formBuilder: FormBuilder,
    ) {
      this.createForm();
     }

  ngOnInit() {
  }

  onRegister() {
    
    this.authService.register(this.signupForm.value)
    .subscribe(res => {
      console.log(res,"ressss")
        this.router.navigate(['home']);
    }, error => {
      this.warningMessage = "Invalid Credentials!";
      console.error(error);
    } );
  }

  private createForm() {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
}
