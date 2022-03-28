import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeaveComponent } from './leave/leave.component';
import { Router, RouterModule,Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


const staffRoutes: Routes = [
  { path:'', children:[
    {path:'dashboard',component:DashboardComponent},
    {path:'leave', component:LeaveComponent}
  ]},
]

@NgModule({
  declarations: [
    DashboardComponent,
    LeaveComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(staffRoutes)
  ],
  exports:[DashboardComponent,LeaveComponent]
})
export class StaffModule { 
  constructor(){
    console.log("Staff Module");
  }
}
