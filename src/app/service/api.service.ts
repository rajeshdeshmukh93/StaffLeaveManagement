import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL= "http://localhost:3000/leaveManage"
  constructor(private http:HttpClient) { }

 

  registerUser(registerForm:any){
    return this.http.post<any>("http://localhost:3000/signupUser", registerForm);
  }

  applyLeave(leaveForm:any){
    return this.http.post<any>("http://localhost:3000/leaveManage",leaveForm)
  }

  getallleaveData(){
    return this.http.get<any>("http://localhost:3000/leaveManage");
  }

  getbyIdLeaveData(id:any){
    return this.http.get<any>(`${this.baseURL}/${id}`);
  }

  updateleaveData(id:any,data:any){
    return this.http.put(`${this.baseURL}/${id}`,data)
  }

   // registerStaff(registerForm:any){
  //   return this.http.post<any>("http://localhost:3000/signupStaff", registerForm);
  // }

  // registerUser(token:any){
  //     localStorage.setItem("token", token.jwt);
  // }

  //calling server to generate token
  // generateToken(loginForm:any){
  //   return this.http.post<any>("http://localhost:3000/signupHOD", loginForm );
  // }

  // doLogin(){
  //   return this.http.get<any>(`${environment.baseUrl}login`);
  // }

//(token)
  // loginUser(token:any){
  //   localStorage.setItem("token",token);
  //   return true;
  // }

  //To check user login or not
  // isLoggedIn(){
  //   let token=localStorage.getItem('token');
  //   if(token!='' && token!=null){
  //     return false;
  //   }else{
  //     return true;
  //   }
  // }

  //For logout purpose
  // logOut(){
  //   localStorage.removeItem("token");
  //   return true;
  // }

  //To get the token
  // getToken(){
  //   return localStorage.getItem('token');
  // }

}
