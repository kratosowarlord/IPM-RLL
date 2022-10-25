package com.insurance.bean;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="userpolicy")
public class UserPolicy {
	@Id
	private Integer userid;
	private String policyname;
	private String name;
	private String applieddate;
	private String status;

	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Integer getUserid() {
		return userid;
	}
	public void setUserid(Integer userid) {
		this.userid = userid;
	}
	public String getPolicyname() {
		return policyname;
	}
	public void setPolicyname(String policyname) {
		this.policyname = policyname;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public String getApplieddate() {
		return applieddate;
	}
	public void setApplieddate(String applieddate) {
		this.applieddate = applieddate;
	}
	
	public UserPolicy() {
		super();
		// TODO Auto-generated constructor stub
	}
	public UserPolicy(int id, Integer userid, String policyname, String name, String applieddate) {
		super();
		this.userid = userid;
		this.policyname = policyname;
		this.name = name;
		this.applieddate = applieddate;
	}
	@Override
	public String toString() {
		return "UserPolicy [userid=" + userid + ", policyname=" + policyname + ", name=" + name
				+ ", applieddate=" + applieddate + "]";
	}
	
	
	
}
