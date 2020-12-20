import { Component, OnInit } from '@angular/core';
import { FileService } from '../../_services/index';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../../_services/authentication.service';
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user;
  constructor( public fileService: FileService,public authService: AuthenticationService,public router: Router) {
    this.user = localStorage.getItem('name');

    this.getUser();
  }

  ngOnInit() {
    this.user = localStorage.getItem('name');
  }
  getUser(){
    this.fileService.getMessage().subscribe(message => {
      console.log(message.text,"message")
      if (message) {
        this.user = message.text;
      }else {

      }
    });
  }
  logout(){
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
