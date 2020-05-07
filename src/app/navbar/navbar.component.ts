import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
showFlightSearch:boolean=true;
showLogin:boolean=false;
showRegister:boolean=false;
  constructor(private router:Router,private ar:ActivatedRoute) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.showFlightSearch=false;
    this.showLogin=true;
   // this.router.navigate(['login']);
  }

  onRegister(){
    this.showFlightSearch=false;
    this.showRegister=true;
  }

  back(){
    this.showLogin=false;
    this.showFlightSearch=true;
  }
   
  backRegister(){
    this.showRegister=false;
    this.showFlightSearch=true;
  }
}
