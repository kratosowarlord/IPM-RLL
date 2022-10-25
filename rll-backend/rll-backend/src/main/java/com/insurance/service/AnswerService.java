package com.insurance.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.insurance.bean.Answer;
import com.insurance.repository.AdminRepository;
import com.insurance.repository.AnswerRepository;
import com.insurance.repository.UserRepository;

@Service
public class AnswerService {

	@Autowired
	AdminRepository adminrepo;
	@Autowired
	UserRepository userRepo;
	@Autowired
	AnswerRepository answerRepo;
	
	public String storeAnswer(Answer answer) {
		answerRepo.save(answer);
		return "answer is stored successfully ";
	}
	
	public List<Answer> getAllAnswers() {
		return answerRepo.findAll();
	}
	
}
