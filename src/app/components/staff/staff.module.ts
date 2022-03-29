import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeaveComponent } from './leave/leave.component';
import { Router, RouterModule,Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './../../auth/auth.guard';


const staffRoutes: Routes = [
  { path:'', children:[
    {path:'dashboard', canActivate:[AuthGuard] ,component:DashboardComponent},
    {path:'leave', canActivate:[AuthGuard], component:LeaveComponent}
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
