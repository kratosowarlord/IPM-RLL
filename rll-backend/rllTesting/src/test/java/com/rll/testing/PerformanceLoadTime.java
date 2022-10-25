package com.rll.testing;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class PerformanceLoadTime {
WebDriver wd;
	
	@BeforeMethod
	public void beforeMethod() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\hp\\eclipse-workspace-phase5\\chromedriver_win32\\chromedriver.exe");
		wd = new ChromeDriver();
	}
  @Test
  public void performanceloadtime() {
	  long start = System.currentTimeMillis();
	  wd.get("http://localhost:4200/background");
	  wd.manage().window().maximize();
	  long finish = System.currentTimeMillis();
	  long total = finish - start;
    System.out.println("Page load Time" + total );
  }
  @AfterMethod
  public void afterMethod() {
	  wd.close();		
  }
  
}
