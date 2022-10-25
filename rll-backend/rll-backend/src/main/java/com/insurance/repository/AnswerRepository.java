package com.insurance.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.insurance.bean.Answer;

@Repository
public interface AnswerRepository  extends JpaRepository<Answer, String> {
	
}