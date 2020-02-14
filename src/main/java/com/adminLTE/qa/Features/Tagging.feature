@FunctionTest
Feature: Demonstrating the Tags keywords in CucumberOptions in Runner Class

@SmokeTest @RegressionTest
Scenario: check into AdminLTE app Login page
Given login page test

@SmokeTest
Scenario: check into AdminLTE app Dashboard page
Given dashboard page test

@RegressionTest
Scenario: check into AdminLTE app Users page
Given users page test

@End2End
Scenario: check into AdminLTE app Add Users page
Given add users page test

@SmokeTest @End2End
Scenario: check into AdminLTE app logout page
Given logout page test

@RegressionTest @End2End
Scenario: check into AdminLTE app close browser
Given close browser test
