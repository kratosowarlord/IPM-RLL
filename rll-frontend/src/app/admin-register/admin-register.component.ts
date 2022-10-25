import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  loginRef = new FormGroup({
    emailid:new FormControl(),
    password:new FormControl()
  });
  msg:string=""
  constructor(public ls:LoginService,public router:Router) { }

  ngOnInit(): void {
  }

  signUp(){
    let login = this.loginRef.value;
    console.log(login);
    this.ls.Adminsignup(login).subscribe({
      next:(result:any)=>{
        if(result=="Account created successfully"){
          sessionStorage.setItem("userDetails",login.emailid);
          this.msg="Admin Account created successfully";
       
        }else {
            this.msg="Failure, pls try Again!!!";
            // this.router.navigate(["user-dashboard"])
        }
      },
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })
    this.loginRef.reset;
  }
  Login(){
    this.router.navigate(['admin-dashboard']);
  }
  


}
