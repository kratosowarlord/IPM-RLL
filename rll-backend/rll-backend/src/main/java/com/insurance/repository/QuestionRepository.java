package com.insurance.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.insurance.bean.Question;

@Repository
public interface QuestionRepository  extends JpaRepository<Question, String> {
	
}