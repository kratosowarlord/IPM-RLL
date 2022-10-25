package com.insurance.bean;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Answer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Ansid;
	private String Answer;
	
	public Long getAnsid() {
		return Ansid;
	}
	public void setAnsid(Long ansid) {
		Ansid = ansid;
	}
	public String getAnswer() {
		return Answer;
	}
	public void setAnswer(String answer) {
		Answer = answer;
	}
	
	public Answer(Long ansid, String answer) {
		super();
		Ansid = ansid;
		this.Answer = answer;
		
	}
	public Answer() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Answer [Ansid=" + Ansid + ", Answer=" + Answer + "]";
	}
	
	
}
