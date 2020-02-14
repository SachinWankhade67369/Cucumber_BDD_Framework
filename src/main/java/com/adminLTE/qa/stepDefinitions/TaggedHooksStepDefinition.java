package com.adminLTE.qa.stepDefinitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TaggedHooksStepDefinition {

//	//Global Hooks
//	@Before(order=0)
//	public void setUpEnv() {
//		System.out.println("Launch chrome driver");
//	}
//	
//	@After(order=0)
//	public void teardown() {
//		System.out.println("close the browser");
//	}
//	
//	
//	@Before(order=1)
//	public void setUpEnv1() {
//		System.out.println("Launch chrome driver");
//	}
//	
//	@After(order=1)
//	public void teardown1() {
//		System.out.println("close the browser");
//	}
	
	
	//local Hooks-tagged hooks---define precondition to the specific scenario.
	@Before("@First")
	public void beforeFirst() {
		System.out.println("beforeFirst");
	}
	
	@After("@First")
	public void afterFirst() {
		System.out.println("afterFirst");
	}
	
	
	
	@Given("^this is the first step$")
	public void this_is_the_first_step() throws Throwable {
	   
	}

	@When("^this is the second step$")
	public void this_is_the_second_step() throws Throwable {
	   
	}

	@Then("^this is the third step$")
	public void this_is_the_third_step() throws Throwable {
	
	}
	
}
