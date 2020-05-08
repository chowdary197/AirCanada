import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent  {
  public title = "Flights Booking System";
  public ClickedMenu=" - FlightsAdd";
  showLoadingIndicator = true;
  public loginObject=JSON.parse(localStorage.getItem("loginObj"));
  public loginuser=this.loginObject.username;
  public loginrole=this.loginObject.role;

    constructor(private router: Router) {
     
  }

  onLogout() {
    localStorage.removeItem('token')
    this.router.navigate([''])
  }

  public MenuItemClicked(strMenuName) {
    this.ClickedMenu = strMenuName;
  }

}
