import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { FlightslistComponent } from './flightslist/flightslist.component';

const routes: Routes = [
  {
    path: "",
    component: AdminComponent
    ,
    children: [
      {
        path: "admindashboard",
        component: FlightslistComponent
      }, 
      { path: "", redirectTo: "admindashboard", pathMatch: "full" }
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
