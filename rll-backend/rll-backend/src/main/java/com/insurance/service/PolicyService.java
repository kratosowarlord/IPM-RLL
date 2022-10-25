package com.insurance.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.insurance.bean.Policy;
import com.insurance.bean.UserPolicy;
import com.insurance.repository.PolicyRepository;
import com.insurance.repository.UserPolicyRepository;

@Service
public class PolicyService {
	
	@Autowired
	PolicyRepository policyRepo;
	
	@Autowired
	UserPolicyRepository userPolicyRepo;
	
	//to get all the policies list
	public List<Policy> getAllPolicies() {
		return policyRepo.findAll();
	}
	
	//to add a new policy
	public String newPolicy(Policy policy) {
		Optional<Policy> op=policyRepo.findById(policy.getPolicyid());
		if(op.isPresent()) {
			return "Policy id must be unique";
		}
		else {
			policyRepo.save(policy);
			return "Policy added successfully";
		}
	}
//	public String newPolicy(Policy policy) {
//		policyRepo.save(policy);
//		return "Policy added successfully";
//	}
	
	//to update a policy
	public String updatePolicy(Policy policy) {
		Optional<Policy> result  = policyRepo.findById(policy.getPolicyid());
		if(result.isPresent()) {
			Policy p = result.get();
			p.setPolicyname(policy.getPolicyname());
			p.setCategory(policy.getCategory());
			p.setAmount(policy.getAmount());
			p.setFeatures(policy.getFeatures());
			policyRepo.saveAndFlush(p);
			return "Policy updated successfully";
		}else {
			return "Policy Id invalid";
		}
	}
	
	//to delete a policy
	public String deletePolicy(int policyid) {
		Optional<Policy> result  = policyRepo.findById(policyid);
		if(result.isPresent()) {
			Policy p = result.get();
			policyRepo.delete(p);
			return "Policy deleted successfully";
		}else {
			return "Policy Id invalid";
		}
	}
	
	//to delete user policy
	public String deleteUserPolicy(int policyid) {
		Optional<UserPolicy> result  = userPolicyRepo.findById(policyid);
		if(result.isPresent()) {
			UserPolicy up = result.get();
			userPolicyRepo.delete(up);
			return "User Policy deleted successfully";
		}else {
			return "Policy Id invalid";
		}
	}
	
	//to approve user policy
	public String approveUserPolicy(UserPolicy userPolicy) {
		userPolicyRepo.save(userPolicy);
		return "User Policy is approved";
	}
	
	
	
	
}
