package com.insurance.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.insurance.bean.Admin;
import com.insurance.bean.User;
import com.insurance.repository.AdminRepository;

@Service
public class AdminService {
	
	@Autowired
	AdminRepository adminRepo;
	
	public String signIn(Admin login) {
		Optional<Admin> result = adminRepo.findById(login.getEmailid());
		if(result.isPresent()) {
			Admin l = result.get();
					if(l.getPassword().equals(login.getPassword())) {		
							return "Admin successfully login";
						}					
					else {
						return "Invalid password";
					}
		}
		else {
			return "Invalid details";
		}
	}
	public String signUp(Admin login) {
		Optional<Admin> result = adminRepo.findById(login.getEmailid());
		if(result.isPresent()) {
					return "Email Id already exists";
		}else {
				adminRepo.save(login);
				return "Account created successfully";
			}
	}
	//admin can update their details
		public String updateAdmin(Admin admin) {
			Optional<Admin> result  = adminRepo.findById(admin.getEmailid());
			if(result.isPresent()) {
				Admin u = result.get();
				
				u.setEmailid(admin.getEmailid());
				u.setPassword(admin.getPassword());
				adminRepo.saveAndFlush(u);
				return "Admin password updated successfully";
			}else {
				return "User Id invalid";
			}
		}
		
}
