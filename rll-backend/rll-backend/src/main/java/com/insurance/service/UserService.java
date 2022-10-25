package com.insurance.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.insurance.bean.Admin;
import com.insurance.bean.Policy;
import com.insurance.bean.User;
import com.insurance.bean.UserPolicy;
import com.insurance.repository.UserPolicyRepository;
import com.insurance.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	UserRepository userRepo;
	
	@Autowired
	UserPolicyRepository userPolicyRepo;
	
	//user signin
	public String signIn(User userLogin) {
		Optional<User> result = userRepo.findById(userLogin.getEmailid());
		if(result.isPresent()) {
			User u = result.get();
					if(u.getPassword().equals(userLogin.getPassword())) {		
							return "User successfully login";
						}					
					else {
						return "Invalid password";
					}
		}
		else {
			return "Invalid details";
		}
	}
	
	//user signup
	public String signUp(User userLogin) {
		Optional<User> result = userRepo.findById(userLogin.getEmailid());
		if(result.isPresent()) {
					return "Email Id already exists";
		}else {
				userRepo.save(userLogin);
				return "Account created successfully";
			}
	}
	
	//change password
	public String changePassword(User user) {
		Optional<User> result  = userRepo.findById(user.getEmailid());
		if(result.isPresent()) {
			User u = result.get();
			u.setPassword(user.getPassword());
			userRepo.saveAndFlush(u);
			return "User password updated successfully";
		}else {
			return "User Id invalid";
		}
	}
	//apply for new policy by user
	public String applyPolicy(UserPolicy userPolicy) {
		userPolicyRepo.save(userPolicy);
		return "Policy is applied";
	}
	
	//user to get all policies list created by admin
	public List<User> getAllPolicies() {
		return userRepo.findAll();
	}
	
	//user to get his/her policy
	public String findUserPolicyById(int userid) {
		Optional<UserPolicy> result  = userPolicyRepo.findById(userid);
		if(result.isPresent()) {
			UserPolicy u = result.get();
			return u.toString();
		}else {
			return "User Id invalid";
		}
	}
	
	//user can update their details
	public String updateUser(User user) {
		Optional<User> result  = userRepo.findById(user.getEmailid());
		if(result.isPresent()) {
			User u = result.get();
			
			u.setEmailid(user.getEmailid());
			u.setPassword(user.getPassword());
			userRepo.saveAndFlush(u);
			return "User password updated successfully";
		}else {
			return "User Id invalid";
		}
	}
	
	//to get all the registered users list
	public List<User> getAllUsers() {
		return userRepo.findAll();
	}
	
	//admin to get all policies list applied by users
//	public List<UserPolicy> getAllUserPolicies() {
//		return userPolicyRepo.findAll();
//	}
	public List<UserPolicy> getAllUserPolicies() {
		return userPolicyRepo.findAll();
	}
	
	public String updateStatus(UserPolicy policy) {
		Optional<UserPolicy> result  = userPolicyRepo.findById(policy.getUserid());
		if(result.isPresent()) {
			UserPolicy p = result.get();
			
			p.setStatus(policy.getStatus());
			userPolicyRepo.saveAndFlush(p);
			return "Status updated successfully";
		}else {
			return "User Id invalid";
		}
	}}
	

