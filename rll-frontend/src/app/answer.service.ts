// import { Injectable } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  baseUrl:string ="http://localhost:9090"
  constructor(public http:HttpClient) { }

  storeAnswer(answer: string) {
    let postData = { answer: answer};
    return this.http.post(
     this.baseUrl+"/storeanswer",
      postData,

    );
    }
    
    getAllAnswers(){
      return this.http.get(this.baseUrl+"/getanswers")
    }
  
}
