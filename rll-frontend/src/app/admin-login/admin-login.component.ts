import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  loginRef = new FormGroup({
    emailid:new FormControl(),
    password:new FormControl()
  });
  msg:string=""
  constructor(public ls:LoginService,public router:Router) { }

  ngOnInit(): void {
  }

  signIn(){
    let login = this.loginRef.value;
    console.log(login);
    this.ls.AdminsignIn(login).subscribe({
      next:(result:any)=>{
        if(result=="Admin successfully login"){
          sessionStorage.setItem("userDetails",login.emailid);
          this.router.navigate(["admin-dashboard"])
       
        }else {
            this.msg="Failure, pls try again!!!";
            // this.router.navigate(["user-dashboard"])
        }
      },
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })
    this.loginRef.reset;
  }

}
