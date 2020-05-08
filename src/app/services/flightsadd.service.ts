import { Injectable } from '@angular/core';
import { Flightdatalist } from '../model/filghtdata';

 
@Injectable()
export class FlightService{
   private flightslist:Flightdatalist[]=[
    {
        Flightname: "Air Canada",
        source: "Canada",
        destination: "Hyderabad",
        Price: "34567",
        class1: "Economy",
        cdate: 1588080368165,
        userid: "praveen@gmail.com",
        username: "praveen",
    },{
      Flightname: "Dubai Airlines",
      source: "Canada",
      destination: "USA",
      Price: "49991",
      class1: "Economy",
      cdate: 1588136165831,
      userid: "praveen@gmail.com",
      username: "praveen",
  },
  {
    Flightname: "Singapore Airlines",
    source: "Canada",
    destination: "Hyderabad",
    Price: "34567",
    class1: "Economy",
    cdate: 1588080368165,
    userid: "praveen@gmail.com",
    username: "praveen",
},{
  Flightname: "Indian Airlines",
  source: "Canada",
  destination: "USA",
  Price: "49991",
  class1: "Economy",
  cdate: 1588136165831,
  userid: "praveen@gmail.com",
  username: "praveen",
}
   ];

   getFlights():Flightdatalist[]{
   return this.flightslist;
   }

   save(flight:Flightdatalist){
       this.flightslist.push(flight);
   }
   deleteflight(flight){
    const i= this.flightslist.findIndex(e=>e.Flightname==flight.Flightname);
    console.log(i+"  "+flight.Flightname)
    if(i !==-1){
     this.flightslist.splice(i,1);
    }
}
}