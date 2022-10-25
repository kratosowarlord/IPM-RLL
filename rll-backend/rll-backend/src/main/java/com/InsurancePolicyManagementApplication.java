package com;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = "com")
//@SpringBootApplication(exclude = { DataSourceAutoConfiguration.class, DataSourceTransactionManagerAutoConfiguration.class})
@EntityScan(basePackages = "com.insurance.bean")
//@EnableJpaRepositories(basePackages = "com.insurance.repository")
public class InsurancePolicyManagementApplication {

	public static void main(String[] args) {
		SpringApplication.run(InsurancePolicyManagementApplication.class, args);
		System.out.println("Server running on port number 9090");
	}

}
