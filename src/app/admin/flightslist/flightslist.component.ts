import { Component, OnInit } from '@angular/core';
import { Flightdatalist } from '../../model/filghtdata';
import { FlightService } from '../../services/flightsadd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flightslist',
  templateUrl: './flightslist.component.html',
  styleUrls: ['./flightslist.component.css']
})
export class FlightslistComponent implements OnInit {

  flightslst: Flightdatalist[];
  constructor(private router: Router,private _flightsService: FlightService) { 
    this.flightslst = this._flightsService.getFlights();
  }

  ngOnInit(): void {
   
  }

}
