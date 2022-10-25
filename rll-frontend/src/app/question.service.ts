import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Question } from './question';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  // constructor() { }
  baseUrl:string ="http://localhost:9090"
  constructor(public http:HttpClient) { }

  // storeQuestion(question:any):Observable<string> {
  //   return this.http.post<string>(this.baseUrl+"/storequestion",question);
  // }

  storeQuestion(question: string) {
    let postData = { question: question};
    return this.http.post(
     this.baseUrl+"/storequestion",
      postData,

    );
    }

    // getAllQuestions():Observable<Question[]>{
    //   return this.http.get<Question[]>(this.baseUrl+"/getquestions");
    // }

    getAllQuestions():Observable<Question>{
      return this.http.get<Question>(this.baseUrl+"/getquestions");
    }

    //    getAllQuestions(){
    //   return this.http.get(this.baseUrl+"/getquestions")
    // }
}
