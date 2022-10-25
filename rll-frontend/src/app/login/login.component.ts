import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
    this.ls.signIn(login).subscribe({
      next:(result:any)=>{
        if(result=="User successfully login"){
          sessionStorage.setItem("userDetails",login.emailid);
          this.router.navigate(["user-dashboard"])
       
        }else {
            this.msg="Failure , please try Again!!!";
            // this.router.navigate(["user-dashboard"])
        }
      },
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })
    this.loginRef.reset;
  }
  SignUp(){
    this.router.navigate(['signup']);
  
  }
  change(){
    this.router.navigate(['change-user-password']);
  }
}
