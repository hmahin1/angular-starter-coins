import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../_services/authentication.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileService } from '../../../_services/index';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email: string = '';
  public password: string = '';
  public warningMessage: string;
  loginForm: FormGroup;
  
  constructor(public authService: AuthenticationService, public router: Router,
    private formBuilder: FormBuilder,
    public fileService: FileService) { 
      this.createForm();
  }

  ngOnInit() {
  }

  login() {
    console.log(this.loginForm.value,"Aaaaaaaaa");
    this.authService.login(this.loginForm.value)
    .subscribe(res => {
      //check for errors
      this.warningMessage = '';
      if(Array.isArray(res)) {
        this.warningMessage += res[0];
      } 
      // if not errors - navigate to home
      if(!this.warningMessage)
      this.fileService.sendMessage(res.data);
        this.router.navigate(['/']);
    }, error => {
      this.warningMessage = "Invalid Credentials!";
      console.error(error);
    } );
  }

  
  private createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }
}
