package com.insurance.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.insurance.bean.Admin;
import com.insurance.bean.Answer;
import com.insurance.bean.Policy;
import com.insurance.bean.Question;
import com.insurance.bean.User;
import com.insurance.bean.UserPolicy;
import com.insurance.repository.AdminRepository;
import com.insurance.repository.UserPolicyRepository;
import com.insurance.service.AdminService;
import com.insurance.service.AnswerService;
import com.insurance.service.PolicyService;
import com.insurance.service.QuestionService;
import com.insurance.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AdminController {
	
	@Autowired
	UserService userService;

	@Autowired
	AdminRepository adminRepo;
	
	@Autowired
	PolicyService policyService;
	
	@Autowired
	AdminService loginService;
	
	@Autowired
	QuestionService questionService;
	@Autowired
	AnswerService answerService;
	
	//to view questions asked by customer
			@RequestMapping(value="getallquestions",method=RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
			public List<Question> getAllQuestions() {
				return questionService.getAllQuestions();
			}
			
			//answer a question asked by  the customer
					@RequestMapping(value = "storeanswer",method=RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
					public String storeAnswer(@RequestBody Answer answer) {
						return answerService.storeAnswer(answer);
					}
					
	@RequestMapping(value = "admin/signUp",method=RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE)
	public String signUp(@RequestBody Admin user) {
		System.out.println("SignUp  works perfectly");
		return loginService.signUp(user);
	}
//	//admin signin
	@RequestMapping(value = "admin/signIn",method=RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE)
	public String signIn(@RequestBody Admin login) {
		System.out.println("Admin Login works perfectly");
		return loginService.signIn(login);
	}
	@RequestMapping(value = "admin/changePassword",method=RequestMethod.PUT,consumes = MediaType.APPLICATION_JSON_VALUE)
	public String updatePassword(@RequestBody Admin admin) {
		return loginService.updateAdmin(admin);
	}
//	
	//admin can view all the policies
	@RequestMapping(value="admin/viewPolicy",method=RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Policy> getAllPolicies() {
		return policyService.getAllPolicies();
	}
	
	//admin can get all the registered users
	@GetMapping(value="users",produces = MediaType.APPLICATION_JSON_VALUE)
	public List<User> getAllUsers() {
		return userService.getAllUsers();
	}
	
	//admin to add a policy
	@RequestMapping(value="admin/addPolicy",method=RequestMethod.POST , consumes=MediaType.APPLICATION_JSON_VALUE)
	public String newPolicy(@RequestBody Policy p) {
		return policyService.newPolicy(p);
	}
	
	//admin to update a policy
	@RequestMapping(value = "admin/updatePolicy",method=RequestMethod.PUT,consumes = MediaType.APPLICATION_JSON_VALUE)
	public String updatePolicy(@RequestBody Policy policy) {
		return policyService.updatePolicy(policy);
	}
	
	
	//admin to delete a policy
	@RequestMapping(value = "admin/deletePolicy/{policyid}",method=RequestMethod.DELETE)
	public String deletePolicy(@PathVariable("policyid") int policyid) {
		return policyService.deletePolicy(policyid);
	}
	
	//admin to get all the user policies
	@GetMapping(value="userPolicies",produces = MediaType.APPLICATION_JSON_VALUE)
	public List<UserPolicy> getAllUserPolicies() {
		return userService.getAllUserPolicies();
	}
	
	//admin to delete users policy
	@DeleteMapping(value = "deleteUserPolicy/{userid}")
	public String deleteUserPolicy(@PathVariable("userid") int userid) {
		return policyService.deleteUserPolicy(userid);
	}
	
	//admin to approve user policy
	@PostMapping(value = "approveUserPolicy",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String newPolicy(@RequestBody UserPolicy userPolicy) {
		return policyService.approveUserPolicy(userPolicy);
	}
}
