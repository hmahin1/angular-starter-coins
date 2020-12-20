import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_services/authentication.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  orders: any = [];
  
  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
    this.getOrder();
  }
  getOrder(){
    this.authService.getUserOrder().subscribe(res => {
      //check for errors
      console.log(res,"Resssssss");
      if(res.code == 200){
        this.orders = res.data;
      }
    }, error => {
      console.error(error);
    } );
  }
}
