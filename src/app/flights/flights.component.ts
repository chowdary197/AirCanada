import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from '../services/flightsadd.service';
import { Flightdatalist } from '../model/filghtdata';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  FlightList;
  flightslst: Flightdatalist[];
  nopassangers: number;
  triptype: string;
  sourcefrom: string;
  destinationto: string;
  traveldate: string;
  show: boolean = false;
  fromaddr;
  toaddr;
  trdatetodisplay;
  DisUn;
  constructor(private router: Router, private _flightsService: FlightService) { }

  ngOnInit(): void {
  }
  flightsFindClick() {

    if (this.sourcefrom && this.destinationto && this.traveldate && this.triptype && this.nopassangers) {

      this.flightslst = this._flightsService.getFlights();
      this.show = true;
      this.fromaddr = this.sourcefrom;
      this.toaddr = this.destinationto ;
      this.trdatetodisplay = new Date(this.traveldate);
    } else {
      alert("Please select From, To,Travel date,Trip type and no.of Passangers");
    }


  }

  flightsindetails(flgt) {
    localStorage.setItem('flightSelect', JSON.stringify(flgt));
    this.router.navigate(['flightdetails']);

  }
}
