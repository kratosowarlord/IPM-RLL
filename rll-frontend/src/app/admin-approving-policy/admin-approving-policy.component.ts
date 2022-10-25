import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminPolicyService } from '../admin-policy.service';
import { UserPolicyService } from '../user-policy.service';
@Component({
  selector: 'app-admin-approving-policy',
  templateUrl: './admin-approving-policy.component.html',
  styleUrls: ['./admin-approving-policy.component.css']
})
export class AdminApprovingPolicyComponent implements OnInit {

  msg:string = "";
  policyRef = new FormGroup({
    userid: new FormControl(),
    
    status: new FormControl()
  })
  constructor(public aps: UserPolicyService,
    public reouter:Router) { }

  ngOnInit(): void {
  }
  updateUserStatus() {
    let policy = this.policyRef.value;
    this.aps.updateStatus(policy).subscribe({
      next:(result:any)=>this.msg="Status is updated",
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })

    this.policyRef.reset();
  }

   goBack(){
    this.reouter.navigate(["admin-checking-apply-policy"]);
   }

}
