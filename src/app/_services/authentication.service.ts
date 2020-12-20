import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { FileService } from '../_services/index';

@Injectable()
export class AuthenticationService {
    public token: string;
   
    public readonly apiUrl = environment.apiUrl;
    public readonly baseUrl = environment.baseUrl;
    //public header = new  HttpHeaders().set("token", localStorage.getItem('token'));
    
    constructor(public http: HttpClient,public fileService: FileService) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('user'));
        this.token = currentUser && currentUser.token;
    }

    isLoggedIn() {
        if (localStorage.getItem('user')) {
           return true;
       }       
       return false;
    }
    createLoginHeader(headers: HttpHeaders) {
        
        return headers.append('auth_token', localStorage.getItem('token'));  
    }
    createAuthorizationHeader(headers: HttpHeaders) {
        // console.log(this.localstorage.getToken());
        const token = localStorage.getItem('token');
        console.log(token);
        if (token) {
          return headers.append('Authorization', token);
        } else {
          return headers;
        }
      }
    login(data): Observable<any> {
        return this.http.post(this.apiUrl+'/login', { email: data.email, password: data.password })
            .pipe(
                map((response: Response) => {
                    // login successful if there's a jwt token in the response
                    this.token = response['data']['token'];
                    //let expiresIn = response['expires_in'];
                    if (this.token) {
                        // store expiresIn and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('token', this.token);
                        localStorage.setItem('user_type', response['data']['user_type']);
                        
                        localStorage.setItem('name', response['data']['name']);
                    }
                    return response;
                })
            );
    }

    register(data): Observable<any> {
        return this.http.post(this.apiUrl+'/sign-up', { email: data.email, name: data.name, password: data.password })
            .pipe(
                map((response: Response) => {
                    // register successful if there's a jwt token in the response
                    this.token = response['token'];
                    
                    if (this.token) {
                        // store expiresIn and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('token', this.token);
                        localStorage.setItem('user_type', response['data']['user_type']);
                        
                        localStorage.setItem('name', response['data']['name']);
                    }
                   // let expiresIn = response['expires_in'];
                    /* if (this.token) {
                        // store expiresIn and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('user', 
                            JSON.stringify({ expires_in: expiresIn, token: this.token }));
                    } */
                    return response;
                })
            );
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        localStorage.removeItem('user_type');
    }


    logoutapi(): Observable<any>  {
        const headers = this.createLoginHeader(new HttpHeaders());
        return this.http.post(this.apiUrl+'/logout', '', {
            headers: headers})
            .pipe(
                map((response: Response) => {
                    return response;
                })
            );
    }
    sendPasswordResetEmail(email: string): Observable<any>  {
        return this.http.post(this.apiUrl+'/auth/recovery', { email: email})
            .pipe(
                map((response: Response) => {
                    return response;
                })
            );
    }

    placeOrder(data): Observable<any> {
        return this.http.post(this.apiUrl+'/place-order', {product_id:data.product_id ,search:data.search,auth_token:localStorage.getItem('token')})
            .pipe(
                map((response: Response) => {
                    return response;
                })
            );
    }

    payWithPaypal(data): Observable<any> {
        return this.http.post(this.apiUrl+'/paypal', {order_id:data ,auth_token:localStorage.getItem('token')})
            .pipe(
                map((response: Response) => {
                    return response;
                })
            );
    }

    getCoinsProduct(params): Observable<any> {
        return this.http.get(this.apiUrl+'/products?'+params)
            .pipe(
                map((response: Response) => {
                    return response;
                })
            );
    }
    getCoin(id): Observable<any> {
        return this.http.get(this.apiUrl+'/products/'+id)
            .pipe(
                map((response: Response) => {
                    return response;
                })
            );
    }
    
    getUserOrder(): Observable<any> {
        let token =localStorage.getItem('token');
        return this.http.get(this.apiUrl+'/order-list?auth_token='+token)
            .pipe(
                map((response: Response) => {
                    return response;
                })
            );
    }
    getlistExtraCharges(): any {
        let url = this.apiUrl+'/logout';
        const headers = this.createAuthorizationHeader(new HttpHeaders());
        
        console.log(headers,"headasdas");
        return this.http.post(this.apiUrl+'/logout', '',{ headers: headers });
      }
}