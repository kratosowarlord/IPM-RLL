import { Component, OnInit } from '@angular/core';
import { AnswerService } from '../answer.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  msg:string = "";
  answer!: string;
  AnswerList!: [];
  data=[]
   public res: Array<any> = [];
  constructor(public service:AnswerService) { }

  ngOnInit(): void {
    this.service.getAllAnswers().subscribe((res:any)=>{ 
      this.AnswerList=res;                             
          })
}
doSubmit() {
  this.service.storeAnswer(this.answer).subscribe(
    (res) => {
     console.log(this.answer);
     
    },
    (error) => {
      console.log(error);
    }
  );
  this.answer = "";
}
getAllAnswers(){       
  this.service.getAllAnswers().subscribe((res:any)=>{
 this.AnswerList=res;           
    })

}

}
