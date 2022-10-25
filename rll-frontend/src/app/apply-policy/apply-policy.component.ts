import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminPolicyService } from '../admin-policy.service';
import { UserPolicyService } from '../user-policy.service';
@Component({
  selector: 'app-apply-policy',
  templateUrl: './apply-policy.component.html',
  styleUrls: ['./apply-policy.component.css']
})
export class ApplyPolicyComponent implements OnInit {

  msg:string = "";
  userPolicyRef = new FormGroup({
    userid: new FormControl(),
    policyname: new FormControl(),
    name: new FormControl(),
    applieddate: new FormControl()
  })

  // policy:Array<AdminPolicy>=[];
  constructor(public ups: UserPolicyService,
    public reouter:Router) { }

  ngOnInit(): void {
  }

  storeUserPolicy() {
    let policy = this.userPolicyRef.value;
    this.ups.addUserPolicyData(policy).subscribe({
      next:(result:any)=>this.msg="Applied Successfully, please check ur status !!!",
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })

    this.userPolicyRef.reset();
  }

   goBack(){
    this.reouter.navigate(["user-dashboard"]);
   }


}
