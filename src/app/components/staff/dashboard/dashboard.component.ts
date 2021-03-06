import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboardForm !:FormGroup
  
  data:any[]=[];
  totalLeave=0;
  rejectedleave=0;
  approveLeave:number=0;
  pendingLeave:number=0;

  constructor(private fb:FormBuilder, private api:ApiService) {
    var count:number=0;
   }

  ngOnInit(): void {
    this.dashboardForm = this.fb.group({
      from_date:[''],
      to_date:[''],
      reason:[''],
      status:[''],
      // userId:localStorage.getItem("userId")
    })
    this.getallLeave();
  }

  getallLeave(){
    this.api.getallleaveData().subscribe((res:any) => {
     //console.log(res);
     //Total leave
     
      this.data=res.filter( (a:any) => {
        if(localStorage.getItem('userId') === a.userId){
          console.log("Dashboard data:",a);
          console.log("Status:",a.status);
          return a;
        }
      })
      this.totalLeave=this.data.length;
      this.data.forEach( (d:any) => {
        if(d.status === 'Approve'){
          this.approveLeave++
        }else if(d.status === "Pending"){
          this.pendingLeave++
        }else if(d.status === "Reject"){
          this.rejectedleave++
        }
      })
      
    })
  }

}
