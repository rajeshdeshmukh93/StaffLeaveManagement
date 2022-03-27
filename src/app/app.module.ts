import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HodregistrationComponent } from './components/hodregistration/hodregistration.component';
import { StaffregistrationComponent } from './components/staffregistration/staffregistration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ApiService } from './service/api.service';
import { StaffModule } from './components/staff/staff.module';
import { HodComponent } from './components/hod/hod.component';
import { HodupdateComponent } from './components/hodupdate/hodupdate.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HodregistrationComponent,
    StaffregistrationComponent,
    PageNotFoundComponent,
    HodComponent,
    HodupdateComponent,
    
  ],
  imports: [
    BrowserModule,
    StaffModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log("App module");
  }
}
