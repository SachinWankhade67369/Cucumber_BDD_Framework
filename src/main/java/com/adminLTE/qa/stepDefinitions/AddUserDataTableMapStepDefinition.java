package com.adminLTE.qa.stepDefinitions;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class AddUserDataTableMapStepDefinition {
	
	//Data Tables with Maps : for parameterization of test cases.
		WebDriver driver;

		@Given("^in Table Map Approach user is already on login page$")
		public void user_is_already_on_login_page() throws Throwable {

			System.setProperty("webdriver.chrome.driver",
					"D:\\Test WorkSpace\\Cucumber_AdminLTE_BDDFramework\\chromedriver.exe");
			driver = new ChromeDriver();
			driver.manage().window().maximize();
			driver.manage().deleteAllCookies();
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

			driver.get("file:///G:/JAVA%20Material/Testing%20Material/Offline%20Website/index.html");

		}

		@When("^in Table Map Approach title of the login page is AdminLTE Log in$")
		public void title_of_the_login_page_is_AdminLTE_Log_in() throws Throwable {

			String title = driver.getTitle();
			System.out.println("Title of the Login Page:"+title);
			Assert.assertEquals("AdminLTE 2 | Log in", title);

		}
		
		//DataTable is class in cucumber api to read the data from tables in cucumber.
		@Then("^in Table Map Approach user enters email and password$")
		public void user_enters_username_and_password(DataTable credential) throws Throwable {

			List<Map<String,String>> data=credential.asMaps(String.class, String.class);//asMaps(.class,.class) method read the data from table as key and value..
																					//and return List<Map<String,String>>			
			driver.findElement(By.id("email")).sendKeys(data.get(0).get("email"));//0-row,email is a key,
			driver.findElement(By.id("password")).sendKeys(data.get(0).get("password"));//0-row,password is a key.

		}
		
		@Then("^in Table Map Approach user clicks on sign in button$")
		public void user_clicks_on_sign_in_button() throws Throwable {
			driver.findElement(By.xpath("//button[@type='submit']")).click();
		}

		@Then("^in Table Map Approach user is on dashboard page$")
		public void user_is_on_dashboard_page() throws Throwable {
			String title = driver.getTitle();
			System.out.println("Title of the Dashboard Page:"+title);
			Assert.assertEquals("AdminLTE 2 | Dashboard", title);
		}
		
		
		@Then("^in Table Map Approach user clicks on Users link$")
		public void user_clicks_on_Users_link() throws Throwable {
		   driver.findElement(By.linkText("Users")).click();
		}
		
		@Then("^in Table Map Approach user clicks on AddUser link$")
		public void user_clicks_on_AddUser_link() throws Throwable {
			driver.findElement(By.xpath("//button[@class='btn btn-block btn-primary btn-sm pull-right']")).click();
		}

		@Then("^in Table Map Approach user enters users details and click on submit$")
		public void user_enters_users_details(DataTable userData) throws Throwable {
			
			 List<Map<String,String>> data=userData.asMaps(String.class, String.class); 
			 
			 for (Map<String, String> map : data) {
				
				 driver.findElement(By.id("username")).sendKeys(map.get("username"));//map.get(Object key);
				 driver.findElement(By.id("mobile")).sendKeys(map.get("mobile"));
				 driver.findElement(By.id("email")).sendKeys(map.get("useremail"));
				 
				 if(map.get("gender").equalsIgnoreCase("Male")) {
					 driver.findElement(By.id("Male")).click();
				 }else if (map.get("gender").equalsIgnoreCase("Female")) {
					 driver.findElement(By.id("Female")).click();
				 }
				 
				 Select select = new Select(driver.findElement(By.xpath("//select[@class='form-control']")));
				 select.selectByVisibleText(map.get("state"));
				 
				 driver.findElement(By.id("password")).sendKeys(map.get("password"));
				 
				 driver.findElement(By.id("submit")).click();
				 Alert alert= driver.switchTo().alert();
				 alert.accept();
			}
			 
		    
		}

		@Then("^in Table Map Approach close the browser$")
		public void close_the_browser() {
			driver.close();
		}
	

}
