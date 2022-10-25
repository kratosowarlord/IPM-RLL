import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseURL:string ="http://localhost:9090";
  constructor(public http:HttpClient) { }

  signIn(login:any):Observable<string> {
    return this.http.post(this.baseURL+"/signIn",login,{responseType:"text"});
  }

  signup(login:any):Observable<string> {
    return this.http.post(this.baseURL+"/signUp",login,{responseType:"text"});
  }
  AdminsignIn(login:any):Observable<string> {
    return this.http.post(this.baseURL+"/admin/signIn",login,{responseType:"text"});
  }
  Adminsignup(login:any):Observable<string> {
    return this.http.post(this.baseURL+"/admin/signUp",login,{responseType:"text"});
  }
  changeUserPassword(login:any):Observable<string> {
    return this.http.put(this.baseURL+"/user/changePassword",login,{responseType:"text"});
  }
  changeAdminPassword(login:any):Observable<string> {
    return this.http.put(this.baseURL+"/admin/changePassword",login,{responseType:"text"});
  }

}
