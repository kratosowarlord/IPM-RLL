package com.insurance.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.insurance.bean.UserPolicy;

@Repository
public interface UserPolicyRepository extends JpaRepository<UserPolicy, Integer>{

}

