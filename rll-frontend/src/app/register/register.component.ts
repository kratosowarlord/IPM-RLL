// import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
// import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signupRef = new FormGroup({
    emailid:new FormControl(),
    password:new FormControl()
  });
  msg:string=""
  constructor(public ls:LoginService,public router:Router) { }

  
  ngOnInit(): void {
  }
  //when usewr will click on submit button - method will be called
  signUp(){
    let login = this.signupRef.value;
    console.log(login);
    this.ls.signup(login).subscribe({
      next:(result:any)=>{
        if(result=="Account created successfully"){
          sessionStorage.setItem("userDetails",login.emailid);
          this.router.navigate(["login"])
       
        }else {
            this.msg="Email Id already exists";
            // this.router.navigate(["user-dashboard"])
        }
      },
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })
    this.signupRef.reset;
  }

  Login(){
    this.router.navigate(['login']);
  }
}
