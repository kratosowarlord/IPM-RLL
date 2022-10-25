import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserPolicy } from './user-policy';
@Injectable({
  providedIn: 'root'
})
export class UserPolicyService {

  baseUrl:string ="http://localhost:9090/user"
  constructor(public http:HttpClient) { }

  addUserPolicyData(product:any):Observable<string> {
    return this.http.post(this.baseUrl+"/applyPolicy",product,{responseType:"text"});
  }

  loadUserPolicyData():Observable<UserPolicy[]> {
    return this.http.get<UserPolicy[]>(this.baseUrl+"/appliedPolicy");
  }
  // updateStatus
  updateStatus(product:any):Observable<string> {
    return this.http.put("http://localhost:9090/status",product,{responseType:"text"});
  }
}
