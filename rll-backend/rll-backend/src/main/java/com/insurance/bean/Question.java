package com.insurance.bean;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Question {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long cid;
	private String Question;
	private String ans;
	
	public String getAns() {
		return ans;
	}
	public void setAns(String ans) {
		this.ans = ans;
	}
	public Long getCid() {
		return cid;
	}
	public void setCid(Long cid) {
		this.cid = cid;
	}
	public String getQuestion() {
		return Question;
	}
	public void setQuestion(String question) {
		Question = question;
	}
	
	public Question() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Question(Long cid, String question) {
		super();
		this.cid = cid;
		this.Question = question;
		
	}
	@Override
	public String toString() {
		return "Question [cid=" + cid + ", Question=" + Question + "]";
	}
	
	

}
