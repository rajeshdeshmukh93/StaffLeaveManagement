import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-hodupdate',
  templateUrl: './hodupdate.component.html',
  styleUrls: ['./hodupdate.component.css']
})
export class HodupdateComponent implements OnInit {
  public id: any = ''
  hodupdateForm !: FormGroup;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
    // this.hodupdateForm=this.fb.group({
    //   name:[''],
    //   status:['']
    // })
    this.route.paramMap.subscribe(params => {
      console.log(params);
      this.id = params.get('id');
    })
    this.editForm();
  }

  editForm() {
    this.api.getbyIdLeaveData(this.id).subscribe((result: any) => {
      console.log(result);
      this.hodupdateForm = this.fb.group({
        id:[result.id],
        name: [result.name],
        from_date:[result.from_date],
        to_date:[result.to_date],
        reason:[result.reason],
        status: [result.status]
      })
    })
  }

  updateForm() { 
    this.api.updateleaveData(this.id,this.hodupdateForm.value).subscribe( res => {
      console.log(res, "Data updated successfully");
      this.hodupdateForm.reset();
    })
  }

}
