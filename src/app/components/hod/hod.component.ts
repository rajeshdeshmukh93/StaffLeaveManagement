import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-hod',
  templateUrl: './hod.component.html',
  styleUrls: ['./hod.component.css']
})
export class HodComponent implements OnInit {

  allleavedata : any =[];
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getallStaffLeave();
  }

  getallStaffLeave(){
    this.api.getallleaveData().subscribe((res:any) => {
      this.allleavedata=res;
      console.log(`HOD Data ${this.allleavedata}`);
    })
  }

}
