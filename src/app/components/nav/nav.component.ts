import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public show:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  isloggedIn(){
    return localStorage.getItem("userId");
  }

  logOut(){
    localStorage.removeItem('userId');
  }

}
