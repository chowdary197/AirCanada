import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  fromaddr;
  toaddr;
  trdatetodisplay;
  DisUn;
  constructor(private router: Router, private ar: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.router.navigate(['/login']);
  }

  onRegister() {
    this.router.navigate(['/register']);
  }

  homepage(){
    this.router.navigate(['/flight']);
  }


}
