package com.adminLTE.qa.stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HooksStepDefinition {
	
	WebDriver driver;
	//Global Hooks-- Hooks is used to define the precondition by using @Before(like setupEnv()) and postcondition by using @After(tearDown()) annotation
	//				 which in imported form cucumber.api
	
	@Before()
	public void set_up_Environment() {
		System.setProperty("webdriver.chrome.driver",
				"D:\\Test WorkSpace\\Cucumber_AdminLTE_BDDFramework\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

		driver.get("file:///G:/JAVA%20Material/Testing%20Material/Offline%20Website/index.html");
		

		driver.findElement(By.id("email")).sendKeys("kiran@gmail.com");
		driver.findElement(By.id("password")).sendKeys("123456");
		driver.findElement(By.xpath("//button[@type='submit']")).click();

	}
	
	@After()
	public void tear_down() {
		driver.quit();
	}
	
	//1st scenario-AdminLTE dashboard page and Hooks Concept Test
	@Given("^in app user is on dashboard page$")
	public void in_app_user_is_on_dashboard_page() throws Throwable {
	   String title=driver.getTitle();
	   System.out.println(title);
	}

	@When("^in app user checks dashboard page AdminLTE logo displayed$")
	public void in_app_user_checks_dashboard_page_AdminLTE_logo_displayed() throws Throwable {
	   boolean flag=driver.findElement(By.xpath("//span[@class='logo-lg']")).isDisplayed();
	   System.out.println(flag);
	}

	@Then("^in app user checks Users link is avilable$")
	public void in_app_user_checks_Users_link_is_avilable() throws Throwable {
		
		boolean flag=driver.findElement(By.xpath("//a[@href='users.html']")).isDisplayed();
		   System.out.println("Is Users link is displayed:>>"+flag);
	}

	
	//2nd scenario--AdminLTE Users page Test
	@Given("^in app user click on Users link$")
	public void in_app_user_click_on_Users_link() throws Throwable {
	   
		driver.findElement(By.linkText("Users")).click();
	}

	@When("^in app user check Users page title$")
	public void in_app_user_check_Users_page_title() throws Throwable {
	    String title=driver.getTitle();
	    System.out.println(title);
	}

	@Then("^in app user chek addUser link is displayed$")
	public void in_app_user_chek_addUser_link_is_displayed() throws Throwable {
	   boolean flag=driver.findElement(By.xpath("//a[@href='add_user.html']")).isDisplayed();
	   System.out.println("Is add user link is displayed:>>"+flag);
	}

}
