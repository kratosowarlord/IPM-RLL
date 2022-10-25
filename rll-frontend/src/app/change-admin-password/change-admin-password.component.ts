import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-change-admin-password',
  templateUrl: './change-admin-password.component.html',
  styleUrls: ['./change-admin-password.component.css']
})
export class ChangeAdminPasswordComponent implements OnInit {

  loginRef = new FormGroup({
    emailid:new FormControl(),
    password:new FormControl()
  });
  msg:string=""
  constructor(public ls:LoginService,public router:Router) { }

  ngOnInit(): void {
  }

  update(){
    let login = this.loginRef.value;
    console.log(login);
    this.ls.changeAdminPassword(login).subscribe({
      next:(result:any)=>{
        if(result=="Admin password changed successfully"){
          // sessionStorage.setItem("userDetails",login.emailid);
          this.msg=result;
       
        }else {
            this.msg="Admin password changed successfully";
            // this.router.navigate(["user-dashboard"])
        }
      },
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })
    this.loginRef.reset;
  }
  goBack(){
    this.router.navigate(['adminlogin']);
  }

}
