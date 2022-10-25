import { Component, OnInit } from '@angular/core';

import { AnswerService } from '../answer.service';
import { QuestionService } from '../question.service';
@Component({
  selector: 'app-queans-admin',
  templateUrl: './queans-admin.component.html',
  styleUrls: ['./queans-admin.component.css']
})
export class QueansAdminComponent implements OnInit {

  
 
  msg:string = "";
  question!: string;
  QuestionList!: [];
  data=[]
   public res: Array<any> = [];
  
  constructor(public serviceq:QuestionService,public servicea:AnswerService) { }
  
  ngOnInit(): void {
    this.serviceq.getAllQuestions().subscribe((res:any)=>{ 
      this.QuestionList=res;                             
      console.log(this.QuestionList);
          })
          this.servicea.getAllAnswers().subscribe((res:any)=>{ 
            this.AnswerList=res;                             
                })

    
  }

  doSubmit() {
    this.serviceq.storeQuestion(this.question).subscribe(
      (res) => {
       console.log(this.question);
       
      },
      (error) => {
        console.log(error);
      }
    );
    this.question = "";
  }
  

  getAllQuestions(){       
 this.serviceq.getAllQuestions().subscribe((res:any)=>{

this.QuestionList=res;       
console.log(this.QuestionList)  ;
   })

 
}

msg1:string = "";
answer!: string;
AnswerList!: [];
data1=[]
 public res1: Array<any> = [];



doSubmit1() {
this.servicea.storeAnswer(this.answer).subscribe(
  (res1) => {
   console.log(this.answer);
   
  },
  (error) => {
    console.log(error);
  }
);
this.answer = "";
}
getAllAnswers(){       
this.servicea.getAllAnswers().subscribe((res:any)=>{
this.AnswerList=res;           
  })

}

}
