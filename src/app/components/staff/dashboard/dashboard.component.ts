import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboardForm !:FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.dashboardForm = this.fb.group({
      from_date:[''],
      to_date:[''],
      reason:[''],
      status:[''],
      userId:localStorage.getItem("userId")
    })
  }

  showLeave(){
    
  }

}
