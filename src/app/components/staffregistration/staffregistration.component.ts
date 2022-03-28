import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-staffregistration',
  templateUrl: './staffregistration.component.html',
  styleUrls: ['./staffregistration.component.css']
})
export class StaffregistrationComponent implements OnInit {

  signupForm !: FormGroup;
  constructor(private fb:FormBuilder, private http:HttpClient,private router:Router, private api:ApiService) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name:['',Validators.required],
      userName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      contact:['',Validators.required],
      password:['',Validators.required],
      role:['Staff']
    })
  }

  signUp(){
    console.log(this.signupForm.value);
    if(this.signupForm.valid){
      this.api.registerUser(this.signupForm.value).subscribe( res => {
        alert("SignUp Successfully");
        this.signupForm.reset();
        this.router.navigate(['login']);
      },err=>{
        alert("Something went wrong");
      })
    }
    
    // this.http.post<any>("http://localhost:3000/signupStaff",this.signupForm.value).subscribe( res => {
    //   alert("SignUp successfully");
    //   this.signupForm.reset();
    //   this.router.navigate(['login']);
    // }, err=> {
    //   alert("Something went wrong");
    // })
   
  }


}
