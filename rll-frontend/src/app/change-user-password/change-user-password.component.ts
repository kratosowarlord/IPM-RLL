import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-change-user-password',
  templateUrl: './change-user-password.component.html',
  styleUrls: ['./change-user-password.component.css']
})
export class ChangeUserPasswordComponent implements OnInit {

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
    this.ls.changeUserPassword(login).subscribe({
      next:(result:any)=>{
        if(result=="User password changed successfully"){
          // sessionStorage.setItem("userDetails",login.emailid);
          this.msg=result;
       
        }else {
            this.msg="User password changed successfully";
            // this.router.navigate(["user-dashboard"])
        }
      },
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })
    this.loginRef.reset;
  }
  goBack(){
    this.router.navigate(['login']);
  }

  Login(){
    this.router.navigate(['login']);
  }
}
