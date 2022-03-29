import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup;
  public roles!:string[];
  constructor(private fb:FormBuilder,private http:HttpClient, private router:Router,private api:ApiService) { 
    this.roles = [
      'HOD',
      'Staffs'
    ]
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required],
      // role:['']
    })
  }

  login(){
    let flag = false;
    console.log(this.loginForm);
    this.http.get<any>("http://localhost:3000/signupUser").subscribe(res=>{
       const user = res.filter( (a:any) => {
        console.log(a);
        flag=true;
          return ((a.email === this.loginForm.value.email) && (a.password === this.loginForm.value.password)) 
      })
      if(user.length > 0){
        alert("Login Successfully");
        this.loginForm.reset();
        localStorage.setItem("userId",user[0].id);
        localStorage.setItem("userName",user[0].name);
        localStorage.setItem('role',user[0].role);
        // this.router.navigate(['staff']);
        // alert(`login as ${user[0].role}`);
        if(user[0].role === "Staff"){
          this.router.navigate(['leave']);
          alert(`login as ${user[0].role}`);
        }else{
          this.router.navigate(['hod']);
          alert(`login as ${user[0].role}`);
        }

      }else{
        alert("User not found");
        // this.router.navigate(['login']);
      }
      
      
    })
    
   
  }

}
