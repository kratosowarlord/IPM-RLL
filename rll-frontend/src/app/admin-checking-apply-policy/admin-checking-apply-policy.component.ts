import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserPolicy } from '../user-policy';
import { UserPolicyService } from '../user-policy.service';

@Component({
  selector: 'app-admin-checking-apply-policy',
  templateUrl: './admin-checking-apply-policy.component.html',
  styleUrls: ['./admin-checking-apply-policy.component.css']
})
export class AdminCheckingApplyPolicyComponent implements OnInit {

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
    this.router.navigate(['admin-dashboard']);
  }
  

}
