import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminPolicyService } from '../admin-policy.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-update-policy',
  templateUrl: './update-policy.component.html',
  styleUrls: ['./update-policy.component.css']
})
export class UpdatePolicyComponent implements OnInit {
  msg:string = "";
  policyRef = new FormGroup({
    policyid: new FormControl(),
    policyname: new FormControl(),
    category: new FormControl(),
    amount: new FormControl(),
    features: new FormControl()
  })
  constructor(public aps: AdminPolicyService,
    public reouter:Router, private _loc: Location) { }

  ngOnInit(): void {
  }
  updatePolicy() {
    let policy = this.policyRef.value;
    this.aps.updatePolicyData(policy).subscribe({
      next:(result:any)=>this.msg="Policy Update Successfully",
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })

    this.policyRef.reset();
  }

   goBack(){
    this._loc.back();
   }

}
