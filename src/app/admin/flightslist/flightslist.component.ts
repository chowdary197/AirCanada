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

  flights: Flightdatalist[];
  public loginObject = JSON.parse(localStorage.getItem("loginObj"));
  public username = this.loginObject.username;
  public userid = this.loginObject.userid;
  clickEditObj;
  showflightslist: boolean = true;
  showaddmodel: boolean = false;
  showdeletediv: boolean = false;
  showeditdiv: boolean = false;
  constructor(private router: Router, private _flightsService: FlightService) {
    this.loadDataSer();
  }

  ngOnInit(): void {

  }
  addflight() {
    
    this.showflightslist = false;
    this.showaddmodel = true;
    this.showdeletediv = false;
    this.showeditdiv = false;
  }
  loadDataSer() {
    this.flights = this._flightsService.getFlights();
  }

  onAdd(cD) {
    cD.cdate = new Date().getTime();
    cD.userid = this.userid;
    cD.username = this.username;
    console.log(cD);
    this._flightsService.save(cD);
    this.loadDataSer();
    this.showflightslist = true;
    this.showaddmodel = false;
    this.showdeletediv = false;
    this.showeditdiv = false;
  }
  dataToEdit = {
    'Flightid': 0,
    'Flightname': '',
    'Flightlocation': '',
    'source': '',
    'destination': '',
    'Price': '',
    'class1':''
  };

  editData(dataItem) {
    this.showflightslist = false;
    this.showaddmodel = false;
    this.showdeletediv = false;
    this.showeditdiv = true;
    this.dataToEdit = dataItem;
    this.clickEditObj = dataItem;
  }
  closeeditdiv(){
    this.showflightslist = true;
    this.showaddmodel = false;
    this.showdeletediv = false;
    this.showeditdiv = false;
  }

  onEdit(editedFlight) {
    editedFlight.docid = this.clickEditObj._id;
    this.closeeditdiv();
  }

  dataToDelete
  deletename;

  deleteData(dd) {
    this.dataToDelete = dd;
    this.deletename = dd.Flightname

  }

  onDelete() {
    this._flightsService.deleteflight(this.dataToDelete);
    this.loadDataSer();
  }
}
