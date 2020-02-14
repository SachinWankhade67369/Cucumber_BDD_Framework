package com.adminLTE.qa.stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefinition {

	// @Given("^user is already on login page$") //start with Caret or circumflex
	// symbol(^) and end with dollar($)symbol
	// public void user_is_already_on_login_page() {
	//
	// }

	WebDriver driver;

	@Given("^user is already on login page$")
	public void user_is_already_on_login_page() throws Throwable {

		System.setProperty("webdriver.chrome.driver",
				"D:\\Test WorkSpace\\Cucumber_AdminLTE_BDDFramework\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

		driver.get("file:///G:/JAVA%20Material/Testing%20Material/Offline%20Website/index.html");

	}

	@When("^title of the login page is AdminLTE Log in$")
	public void title_of_the_login_page_is_AdminLTE_Log_in() throws Throwable {

		String title = driver.getTitle();
		System.out.println("Title of the Login Page:"+title);
		Assert.assertEquals("AdminLTE 2 | Log in", title);

	}

	/*Simple approach/hard coded
	 * @Then("^user enters username and password$")
	public void user_enters_username_and_password() throws Throwable {

		driver.findElement(By.id("email")).sendKeys("kiran@gmail.com");//hard coded values
		driver.findElement(By.id("password")).sendKeys("123456");//hard coded values

	}*/

	//Regular expression-----1.  \"(.*)\"
	//						 2.  \"([^\"]*)\"
	//Without using Examples Keyword + Scenario
	/*@Then("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String username,String password) throws Throwable {

		driver.findElement(By.id("email")).sendKeys(username);
		driver.findElement(By.id("password")).sendKeys(password);

	}*/
	
	//with Examples Keyword + Scenario Outline
	@Then("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String username,String password) throws Throwable {

		driver.findElement(By.id("email")).sendKeys(username);
		driver.findElement(By.id("password")).sendKeys(password);

	}
	
	@Then("^user clicks on sign in button$")
	public void user_clicks_on_sign_in_button() throws Throwable {
		driver.findElement(By.xpath("//button[@type='submit']")).click();
	}

	@Then("^user is on dashboard page$")
	public void user_is_on_dashboard_page() throws Throwable {
		String title = driver.getTitle();
		System.out.println("Title of the Dashboard Page:"+title);
		Assert.assertEquals("AdminLTE 2 | Dashboard", title);
	}
	
	
	@Then("^user clicks on Users link$")
	public void user_clicks_on_Users_link() throws Throwable {
	   driver.findElement(By.linkText("Users")).click();
	}
	
	@Then("^user clicks on AddUser link$")
	public void user_clicks_on_AddUser_link() throws Throwable {
		driver.findElement(By.xpath("//button[@class='btn btn-block btn-primary btn-sm pull-right']")).click();
	}

	@Then("^user enters users details \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_users_details(String username, String mobile, String useremail, String gender, String state, String userpassword) throws Throwable {
	    driver.findElement(By.id("username")).sendKeys(username);
	    driver.findElement(By.id("mobile")).sendKeys(mobile);
	    driver.findElement(By.id("email")).sendKeys(useremail);
	    
	    if(gender.equals("Male")) {
	    	driver.findElement(By.id("Male")).click();
		}else if (gender.equals("Female")) {
			driver.findElement(By.id("Female")).click();
		}
	    
	    Select select = new Select(driver.findElement(By.xpath("//select[@class='form-control']")));
	    select.selectByVisibleText(state);
	    
	    driver.findElement(By.id("password")).sendKeys(userpassword);
	    
	    
	}

	@Then("^user click on submit button$")
	public void user_click_on_submit_button() throws Throwable {
	    driver.findElement(By.id("submit")).click();
	    Alert alert= driver.switchTo().alert();
	    alert.accept();
	}
	
	@Then("^close the browser$")
	public void close_the_browser() {
		driver.close();
	}

	// 2nd Scenario Dashboard page
/*	@Given("^user login again and is already on dashboard page$")
	public void user_login_again_and_is_already_on_dashboard_page() throws Throwable {

		
		user_is_already_on_login_page();
		user_enters_username_and_password();
		user_clicks_on_sign_in_button();	
		
		String title = driver.getTitle();
		System.out.println("Title of the Dashboard Page:"+title);
		Assert.assertEquals("AdminLTE 2 | Dashboard", title);
	}

	@When("^logo of the dashboard page is Dashboard$")
	public void logo_of_the_dashboard_page_is_Dashboard() throws Throwable {
		String dashboardlogo=driver.findElement(By.xpath("//section[@class='content-header']//h1")).getText();
		System.out.println(dashboardlogo);
		Assert.assertEquals("Dashboard Control panel", dashboardlogo);

	}

	@Then("^user clicks on Users link$")
	public void user_clicks_on_Users_link() throws Throwable {
		driver.findElement(By.linkText("Users")).click();
	}

	@Then("^title of the Users Page is AdminLTE User$")
	public void title_of_the_Users_Page_is_AdminLTE_User() throws Throwable {
		String title=driver.getTitle();
		System.out.println("Title of the Users Page:"+title);
		Assert.assertEquals("AdminLTE 2 | User", title );
		close_the_browser();
	}
	*/


}
