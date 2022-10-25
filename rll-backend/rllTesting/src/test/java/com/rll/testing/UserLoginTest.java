package com.rll.testing;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class UserLoginTest {
WebDriver wd;
	
	@BeforeMethod
	public void beforeMethod() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\hp\\eclipse-workspace-phase5\\chromedriver_win32\\chromedriver.exe");
		wd = new ChromeDriver();
	}
  @Test
 
	  public void UserLoginTest() {
			System.setProperty("webdriver.chrome.driver", "C:\\Users\\hp\\eclipse-workspace-phase5\\chromedriver_win32\\chromedriver.exe");
			wd = new ChromeDriver();
			 wd.get("http://localhost:4200/login");
//			  wd.manage().window().maximize();
			   WebElement emailref = wd.findElement(By.id("n1"));
			 
			    emailref.sendKeys("admin");
			    WebElement passwordref = wd.findElement(By.id("n2"));
			    passwordref.sendKeys("admin");
			    try {
			    Thread.sleep(2000);
			    WebElement submitref = wd.findElement(By.id("b1"));
			    submitref.click();
			    Thread.sleep(2000);
			    }catch(Exception e) {
			        System.out.println(e);
			       
			    }
			   
  }
  @AfterMethod
  public void afterMethod() {
	  wd.close();		
  }
}
