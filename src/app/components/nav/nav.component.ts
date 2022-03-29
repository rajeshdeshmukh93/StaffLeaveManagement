import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public show:boolean=true;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  isloggedIn(){
    return localStorage.getItem("userId");
  }

  logOut(){
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    localStorage.removeItem('role');
    this.router.navigate(['login']);
  }

}
