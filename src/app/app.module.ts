// all angular imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {  CreateDummyComponent, EditDummyComponent, ShowDummyComponent } from './_components/dummy/index';

// all app modules
import { routing } from './app-routing.module';

// all guards
import { AuthGuard } from './_guards/auth.guard';

// all intercepters
import { JwtInterceptor, ErrorInterceptor } from './_helpers';

// all services
import { AuthenticationService, DummyService, FileService } from './_services/index';

// all components
import { AppComponent } from './_components/app.component';

import { AllDummyComponent } from './_components/dummy/all/all.component';
import { LoginComponent, RegisterComponent } from './_components/auth/index';
import { NavigationComponent } from './_components/navigation/navigation.component';
import { HomeComponent } from './_components/home/home.component';
import { HeaderComponent } from './_components/header/header.component';
import { SliderComponent } from './_components/slider/slider.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FaqComponent } from './_components/faq//faq.component';
import { AboutCoinFaqComponent } from './_components/about-coin-faq/about-coin-faq.component';
import { GetCoinFaqComponent } from './_components/get-coin-faq/get-coin-faq.component';
import { BuyCoinFaqComponent } from './_components/buy-coin-faq/buy-coin-faq.component';
import { HowToBuyComponent } from './_components/how-to-buy/how-to-buy.component';
import { FifaCoinsComponent } from './_components/fifa-coins/fifa-coins.component';
import { CoinsComponent } from './_components/coins/coins.component';
import { NewsComponent } from './_components/news/news.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CheckoutComponent } from './_components/checkout/checkout.component';

import { FooterComponent } from './_components/footer/footer.component';
import { OrderHistoryComponent } from './_components/order-history/order-history.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavigationComponent,
    HomeComponent,
    HeaderComponent,
    HomeComponent,
    SliderComponent,
    FaqComponent,
    HowToBuyComponent,
    FifaCoinsComponent,
    CoinsComponent,
    NewsComponent,
    CheckoutComponent,
    AboutCoinFaqComponent,
    GetCoinFaqComponent,
    BuyCoinFaqComponent,
    FooterComponent,
    AllDummyComponent, 
    CreateDummyComponent, 
    EditDummyComponent, 
    ShowDummyComponent, OrderHistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    CarouselModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AuthGuard,
    AuthenticationService,
    DummyService,
    FileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
