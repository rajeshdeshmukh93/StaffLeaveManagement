import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup} from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {

  leaveForm !: FormGroup;
  dataLeave:any =[];
  constructor(private fb : FormBuilder,private api:ApiService) { }

  ngOnInit(): void {
    this.leaveForm = this.fb.group({
      from_date:[''],
      to_date:[''],
      reason:[''],
      status:['Pending'],
      action:[''],
      userId:localStorage.getItem('userId'),
      userName:localStorage.getItem('userName'),
      name:[''],
    })
    this.leaveData();
  }

  addLeave(){
    console.log(this.leaveForm.value);
    this.api.applyLeave(this.leaveForm.value).subscribe( res => {
      console.log(res);
      if(this.leaveForm.value !== ''){
        alert("Added leave data");
        this.leaveForm.reset();
        //this.leaveForm.Close();
        this.leaveData();
      }
    })
  }

  leaveData(){
    this.api.getallleaveData().subscribe((res:any) => {
     //this.dataLeave=res;
     this.dataLeave = res.filter( (a:any) => {
        if(localStorage.getItem('userId') === a.userId){
          return a;
        }
     })
    })
  }
}
