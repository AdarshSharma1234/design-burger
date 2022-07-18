import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NearbyStoreComponent } from './nearby-store/nearby-store.component';
import { OrderDealsComponent } from './order-deals/order-deals.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NearbyStoreComponent,
    OrderDealsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
