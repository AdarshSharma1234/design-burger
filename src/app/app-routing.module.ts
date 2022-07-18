import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { NearbyStoreComponent } from './nearby-store/nearby-store.component';
import { OrderDealsComponent } from './order-deals/order-deals.component';

const routes: Routes = [
  {path:'',component:NavbarComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'nearby-store',component:NearbyStoreComponent},
  {path:'order-deals',component:OrderDealsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
