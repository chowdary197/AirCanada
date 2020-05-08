import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FlightsComponent } from './flights/flights.component';
import { FlighthomepageComponent } from './flighthomepage/flighthomepage.component';
import { FlightService } from './services/flightsadd.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    FlightsComponent,
    FlighthomepageComponent
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule
    
  ],
  providers: [FlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
