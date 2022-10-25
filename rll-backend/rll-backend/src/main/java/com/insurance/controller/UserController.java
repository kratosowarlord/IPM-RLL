package com.insurance.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.insurance.bean.Answer;
import com.insurance.bean.Policy;
import com.insurance.bean.Question;
import com.insurance.bean.User;
import com.insurance.bean.UserPolicy;
import com.insurance.service.AnswerService;
import com.insurance.service.PolicyService;
import com.insurance.service.QuestionService;
import com.insurance.service.UserService;

@RestController
@CrossOrigin
public class UserController {
	
	@Autowired
	UserService userService;
	
	@Autowired
	PolicyService policyService;
	
	@Autowired
	QuestionService questionService;
	@Autowired
	AnswerService answerService;
	
	//user  ask a question to the administrator
			@RequestMapping(value = "storequestion",method=RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
			public String storeQuestion(@RequestBody Question question) {
				return questionService.storeQuestion(question);
				
			}
			
			//to view answers  by administrator
					@RequestMapping(value="getanswers",method=RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
					public List<Answer> getAllAnswers() {
						return answerService.getAllAnswers();
					}
					
					
					//to view questions asked by customer
					@RequestMapping(value="getquestions",method=RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
					public List<Question> getAllQuestions() {
						return questionService.getAllQuestions();
					}
		
	
////	//user signup
	@RequestMapping(value = "signUp",method=RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE)
	public String signUp(@RequestBody User user) {
		System.out.println("SignUp  works perfectly");
		return userService.signUp(user);
	}
//	
	//user signin
	@RequestMapping(value = "signIn",method=RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE)
	public String signIn(@RequestBody User user) {
		System.out.println("Login works perfectly");
		return userService.signIn(user);
		
	}
	//user changing password
	@RequestMapping(value = "user/changePassword",method=RequestMethod.PUT,consumes = MediaType.APPLICATION_JSON_VALUE)
	public String updatePassword(@RequestBody User user) {
		return userService.updateUser(user);
	}
	
	@RequestMapping(value = "status",method=RequestMethod.PUT,consumes = MediaType.APPLICATION_JSON_VALUE)
	public String changePassword(@RequestBody UserPolicy user) {
		return userService.updateStatus(user);
	}
	
	//user to apply for a new policy
	@RequestMapping(value = "user/applyPolicy",method=RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public String newPolicy(@RequestBody UserPolicy userPolicy) {
		return userService.applyPolicy(userPolicy);
	}
	
	//to view policies created by admin
	@GetMapping(value="policies",produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Policy> getAllPolicies() {
		return policyService.getAllPolicies();
	}
	
	//update user details
	@PatchMapping(value = "updateUser",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String updateUser(@RequestBody User user) {
		return userService.updateUser(user);
	}
	
	//user can view his/her applied policy
//	@RequestMapping(value="user/appliedPolicy/",method=RequestMethod.GET, consumes = MediaType.APPLICATION_JSON_VALUE)
//	public String findUserPoliciesById(@PathVariable("userid") int userid) {
//		return userService.findUserPolicyById(userid);
//	}
	@RequestMapping(value="user/appliedPolicy",method=RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
	public List<UserPolicy> getAllUserPolicies() {
		return userService.getAllUserPolicies();
	}
}
