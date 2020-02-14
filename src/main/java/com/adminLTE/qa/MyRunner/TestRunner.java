package com.adminLTE.qa.MyRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "D:\\Test WorkSpace\\Cucumber_AdminLTE_BDDFramework\\src\\main\\java\\com\\adminLTE\\qa\\Features",
													//The path of feature file.
		glue = {"com.adminLTE.qa.stepDefinitions"},//path of package containing step Definition class
		monochrome=true, //Display the console output in proper readable format by removing  unwanted symbol on console.
		format = {"pretty","html:test-output","json:json-output/cucumber.json","junit:junit-xml/cucumber.xml"},//pretty-format is looking pretty
											//To generate different type of reporting like html,json,xml after refreshing the project.
		dryRun=false,//check the proper mapping between steps of feature file and step definition file.if it is true and mapping is not proper then
					//it will skipped all the TestCase methods.hence it is good practice to set first true to check mapping and then
					//set it false.
		strict=true //it will check if any step is not defined/pending in step definition file.
		
		//tags= {"@SmokeTest , @End2End"} //Using tags,we can run particular test case using annotation.
		
		)
 
public class TestRunner {

}


//OR ed:  tags= {"@SmokeTest , @End2End"} ---execute all tests tagged as @SmokeTest OR @End2End
//And ed: tags= {"@SmokeTest" ,"@End2End"} ---execute all tests tagged as @SmokeTest AND @End2End
//To ignored ~(tiled) sing is used : tags= {"~@SmokeTest" ,"@End2End"} --execute all tests tagged as @End2End AND ignored @SmokeTest