import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminPolicy } from '../admin-policy';
import { AdminPolicyService } from '../admin-policy.service';
@Component({
  selector: 'app-add-policy',
  templateUrl: './add-policy.component.html',
  styleUrls: ['./add-policy.component.css']
})
export class AddPolicyComponent implements OnInit {
  msg:string = "";
  policyRef = new FormGroup({
    policyid: new FormControl(),
    policyname: new FormControl(),
    category: new FormControl(),
    amount: new FormControl(),
    features: new FormControl()
  })

  // policy:Array<AdminPolicy>=[];
  constructor(public aps: AdminPolicyService,
    public reouter:Router) { }

  ngOnInit(): void {
  }

  storePolicy() {
    let policy = this.policyRef.value;
    this.aps.addPolicyData(policy).subscribe({
      next:(result:any)=>this.msg="New Policy Added Succesfully",
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })

    this.policyRef.reset();
  }

   goBack(){
    this.reouter.navigate(["admin-dashboard"]);
   }

}
