import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flightsdetails',
  templateUrl: './flightsdetails.component.html',
  styleUrls: ['./flightsdetails.component.css']
})
export class FlightsdetailsComponent implements OnInit {

  selectedFlight:any;
  constructor() {

    this.selectedFlight = JSON.parse(localStorage.getItem("flightSelect"));
  }

  ngOnInit(): void {
  }

}
