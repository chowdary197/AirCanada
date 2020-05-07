import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent} from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FlightsComponent } from './flights/flights.component';

const routes: Routes = [
  {path:'nav',component:NavbarComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'flight',component:FlightsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
