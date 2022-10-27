import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminPolicy } from '../admin-policy';
import { AdminPolicyService } from '../admin-policy.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-delete-policy',
  templateUrl: './delete-policy.component.html',
  styleUrls: ['./delete-policy.component.css']
})
export class DeletePolicyComponent implements OnInit {

  policy:Array<AdminPolicy>=[]
  constructor(public aps:AdminPolicyService,public router:Router, private _loc: Location) { }   

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
  deletePolicy(id:number){
    //console.log(pid)
    this.aps.deletePolicyById(id).subscribe({
      next:(result:any)=>console.log(result),
      error:(error:any)=>console.log(error),
      complete:()=>{
          this.loadPolicyDetails();   
      }
    })
  }
  goBack(){
    this._loc.back();
  }
}
