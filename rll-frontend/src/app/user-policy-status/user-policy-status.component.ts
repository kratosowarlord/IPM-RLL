import { Component, OnInit } from '@angular/core';
import { UserPolicyComponent } from '../user-policy/user-policy.component';
import {FormGroup,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { UserPolicy } from '../user-policy';
import { UserPolicyService } from '../user-policy.service';
@Component({
  selector: 'app-user-policy-status',
  templateUrl: './user-policy-status.component.html',
  styleUrls: ['./user-policy-status.component.css']
})
export class UserPolicyStatusComponent implements OnInit {
  // policyRef= new FormGroup({
  //   userid:new FormControl(),
  //   policyname:new FormControl(),
  //   name:new FormControl(),
  //   applieddate:new FormControl()
  // });
  
  

  applypolicy:Array<UserPolicy>=[];
  constructor(public ups:UserPolicyService,public router:Router) { }

  ngOnInit(): void {
    this.loadUserPolicyDetails();    
  }
  loadUserPolicyDetails() {
    //this.ps.loadProductData();
    this.ups.loadUserPolicyData().subscribe({
      next:(data:any)=>this.applypolicy=data,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("Completed")
    })

  }

  goBack(){
    this.router.navigate(['user-dashboard']);
  }

}
