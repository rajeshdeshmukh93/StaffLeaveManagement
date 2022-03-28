import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-hodregistration',
  templateUrl: './hodregistration.component.html',
  styleUrls: ['./hodregistration.component.css']
})
export class HodregistrationComponent implements OnInit {

  signupForm !: FormGroup
  constructor(private fb: FormBuilder, private http:HttpClient, private router:Router, private api:ApiService) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name:['',Validators.required],
      userName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      number:['',Validators.required],
      department:[''],
      password:['', Validators.required],
      role:['HOD']
    })
  }

  signUp(){
    console.log(this.signupForm.value);
    // this.http.post<any>("http://localhost:3000/signupHOD",this.signupForm.value).subscribe(res=> {
    //   alert("Signup Successfully");
    //   this.signupForm.reset();
    //   this.router.navigate(['login']);
    // }, err => {
    //   alert("Something went wrong");
    // })
    if(this.signupForm.valid){
      this.api.registerUser(this.signupForm.value).subscribe( res => {
        alert("SignUp Successfully");
        this.signupForm.reset();
        this.router.navigate(['login']);
      },err => {
        alert("Something went Wrong");
      })
    }
    

  }

}
