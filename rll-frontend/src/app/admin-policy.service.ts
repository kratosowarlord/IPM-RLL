import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminPolicy } from './admin-policy';
@Injectable({
  providedIn: 'root'
})
export class AdminPolicyService {

  baseUrl:string ="http://localhost:9090/admin"
  constructor(public http:HttpClient) { }

  addPolicyData(product:any):Observable<string> {
    return this.http.post(this.baseUrl+"/addPolicy",product,{responseType:"text"});
  }
  updatePolicyData(product:any):Observable<string> {
    return this.http.put(this.baseUrl+"/updatePolicy",product,{responseType:"text"});
  }
  // loadPolicyData():Observable<AdminPolicy[]>{
  //   return this.http.get<AdminPolicy[]>("http://localhost:9090/admin/viewPolicy");
  // }
  loadPolicyData():Observable<AdminPolicy[]> {
    return this.http.get<AdminPolicy[]>(this.baseUrl+"/viewPolicy");
  }
  deletePolicyById(id:number):Observable<string> {
    return this.http.delete(this.baseUrl+"/deletePolicy/"+id,{responseType:"text"});
  }
}
