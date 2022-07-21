import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackgroungPageComponent } from './backgroung-page/backgroung-page.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NearbyStoreComponent } from './nearby-store/nearby-store.component';
import { OrderDealsComponent } from './order-deals/order-deals.component';

const routes: Routes = [
  {path:'',component:BackgroungPageComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'nearby-store',component:NearbyStoreComponent},
  {path:'order-deals',component:OrderDealsComponent},
  {path:'background-page',component:BackgroungPageComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
