import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../_services/authentication.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  param;
  prod;
  card_type;
  constructor(private route: ActivatedRoute,public authService: AuthenticationService) {}

  ngOnInit() {
    this.getQueryParams();
  }
  getQueryParams(){ 
  this.route.queryParams.subscribe(params => {
    this.param = params['id'];
    console.log(this.param,"parmssssss");
    if(this.param){
      this.getProduct(this.param);
    }
});
}
getProduct(id){
  this.authService.getCoin(id).subscribe(res => {
    //check for errors
    console.log(res,"Resssssss");
    if(res.code == 200){
     this.prod = res.data;
    }
  }, error => {
    console.error(error);
  } );
}
card(type){
  console.log(type,"typeeeee");
  this.card_type = type;
}
checkout(){
  let obj = {};
  obj['product_id'] = this.param;
  this.authService.placeOrder(obj).subscribe(res => {
    //check for errors
    console.log(res,"Resssssss");
    if(res.code == 200){
      this.payWithPaypal(res.data.id);
    }
  }, error => {
    console.error(error);
  } );
}
payWithPaypal(id){
  this.authService.payWithPaypal(id).subscribe(res => {
    //check for errors
    console.log(res,"Resssssss");
    if(res.code == 200){
      window.location.href = res.url

      //this.payWithPaypal(res.data.id);
    }
  }, error => {
    console.error(error);
  } );
}
}
