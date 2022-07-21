import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NearbyStoreComponent } from './nearby-store/nearby-store.component';
import { OrderDealsComponent } from './order-deals/order-deals.component';
import { BackgroungPageComponent } from './backgroung-page/backgroung-page.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NearbyStoreComponent,
    OrderDealsComponent,
    BackgroungPageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
