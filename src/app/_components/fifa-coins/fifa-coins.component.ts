import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fifa-coins',
  templateUrl: './fifa-coins.component.html',
  styleUrls: ['./fifa-coins.component.css']
})
export class FifaCoinsComponent implements OnInit {
  ps4: Array<any> = [];
  xbox: Array<any> = [];
  pc: Array<any> = [];


  constructor(public authService: AuthenticationService,public router: Router) {}

  ngOnInit() {
    this.getData('','ps4');
  }
  getData(event,params) {
    let param = 'product_type='+params;
    this.authService.getCoinsProduct(param).subscribe(res => {
      //check for errors
      if(res.code == 200){
        if(params == 'ps4'){
          this.ps4 = res.data;
        }
        
        if(params == 'xbox'){
          this.xbox = res.data;
        }
        
        if(params == 'pc'){
          this.pc = res.data;
        }
      }
    }, error => {
      console.error(error);
    } );
  }
  checkout(id){
    this.router.navigate(['checkout'],{ queryParams: { 'pro-id': id } });
  }
}
