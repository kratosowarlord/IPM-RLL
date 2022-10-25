package com.insurance.service;

import java.util.List;
import java.util.Optional;

//import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.insurance.bean.Policy;
import com.insurance.bean.Question;
import com.insurance.repository.AdminRepository;
import com.insurance.repository.QuestionRepository;
import com.insurance.repository.UserRepository;

@Service
public class QuestionService {
	@Autowired
	AdminRepository adminrepo;
	@Autowired
	UserRepository userRepo;
	@Autowired
	QuestionRepository questionRepo;
	
	public String storeQuestion(Question question) {
		questionRepo.save(question);
		return "question is stored successfully ";
	}
	
	public List<Question> getAllQuestions() {
		return questionRepo.findAll();
	}

}
