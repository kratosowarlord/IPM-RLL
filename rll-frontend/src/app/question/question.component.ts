import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  msg:string = "";
  question!: string;
  QuestionList!: [];
  data=[]
   public res: Array<any> = [];
  
  constructor(public service:QuestionService) { }
  
  ngOnInit(): void {
    this.service.getAllQuestions().subscribe((res:any)=>{ 
      this.QuestionList=res;                             
      console.log(this.QuestionList);
          })

    
  }

  doSubmit() {
    this.service.storeQuestion(this.question).subscribe(
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
 this.service.getAllQuestions().subscribe((res:any)=>{

this.QuestionList=res;       
console.log(this.QuestionList)  ;
   })

 
}


}
