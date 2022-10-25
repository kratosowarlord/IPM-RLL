import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminPolicy } from '../admin-policy';
import { AdminPolicyService } from '../admin-policy.service';
import {FormGroup,FormControl} from '@angular/forms';
@Component({
  selector: 'app-user-policy',
  templateUrl: './user-policy.component.html',
  styleUrls: ['./user-policy.component.css']
})
export class UserPolicyComponent implements OnInit {
  policyRef= new FormGroup({
    policyid:new FormControl(),
    policyname:new FormControl(),
    category:new FormControl(),
    amount:new FormControl()
  });
  policy:Array<AdminPolicy>=[]
  constructor(public aps:AdminPolicyService,public router:Router) { }   

  ngOnInit(): void {
    this.loadPolicyDetails();    
  }
  loadPolicyDetails() {
    //this.ps.loadProductData();
    this.aps.loadPolicyData().subscribe({
      next:(data:any)=>this.policy=data,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("Completed")
    })

  }
  goBack(){
    this.router.navigate(['user-dashboard']);
  }
  
  applyPolicy(){
    this.router.navigate(['apply-policy']);
  }
}
