import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FlightslistComponent } from './flightslist/flightslist.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AdminComponent, FlightslistComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
