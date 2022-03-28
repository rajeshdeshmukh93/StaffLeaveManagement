import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HodComponent } from './components/hod/hod.component';
import { HodregistrationComponent } from './components/hodregistration/hodregistration.component';
import { HodupdateComponent } from './components/hodupdate/hodupdate.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StaffregistrationComponent } from './components/staffregistration/staffregistration.component';


const routes: Routes = [
  { path:'', component:LoginComponent},
  { path:'login', component:LoginComponent },
  { path:'hodreg', component:HodregistrationComponent },
  { path:'staffreg', component:StaffregistrationComponent},
  { path:'hod', component:HodComponent},
  { path:'hodupdate/:id',component:HodupdateComponent},
  // { path:'nav', component:NavComponent},
  { path:'', loadChildren:()=> import('./components/staff/staff.module').then(m => m.StaffModule)},
  { path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
