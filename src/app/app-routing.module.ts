import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent} from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FlightsComponent } from './flights/flights.component';
import { FlightsdetailsComponent } from './flightsdetails/flightsdetails.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'flight',component:FlightsComponent},
  {path:'flightdetails',component:FlightsdetailsComponent},
  { path: "", redirectTo: "flight", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
