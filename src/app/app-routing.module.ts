import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent, LoginComponent } from './_components/auth/index';
import { HomeComponent } from './_components/home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { AllDummyComponent, CreateDummyComponent, EditDummyComponent, ShowDummyComponent } from './_components/dummy/index';
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
import { OrderHistoryComponent } from './_components/order-history/order-history.component';


const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
	{
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'faq',
        component: FaqComponent
      },
      {
        path: 'fifa-coins',
        component: FifaCoinsComponent
      },
      {
        path: 'how-to-buy',
        component: HowToBuyComponent
      },
      {
        path: 'checkout',
        component: CheckoutComponent
      },
      
      {
        path: 'order-history',
        component: OrderHistoryComponent,
        canActivate: [AuthGuard],
      },
    { path: 'dummies', canActivate: [AuthGuard],
    	children: [
    		{ path: '', redirectTo: 'all', pathMatch: 'full' },
			{ path: 'all', 
				children: [
		    		{ path: '', redirectTo: '1', pathMatch: 'full' },
					{ path: ':page_no', component: AllDummyComponent },
				]
			},
			{ path: 'create', component: CreateDummyComponent },
			{ path: 'edit/:id', component: EditDummyComponent },
			{ path: 'show/:id', component: ShowDummyComponent }
		]
	},
    { path: '', component: HomeComponent  },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);