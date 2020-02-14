Feature: AdminLTE Login Feature 

#Simple feature file approach
#Scenario: AdminLTE Login Test Scenario

#	Given user is already on login page
#	When title of the login page is AdminLTE Log in
#	Then user enters username and password
#	Then user clicks on sign in button
#	Then user is on dashboard page
#	Then close the browser


#Without using Example keyword+Scenario approach of Data Driven Testing
#Scenario: AdminLTE Login Test Scenario
#
#	Given user is already on login page
#	When title of the login page is AdminLTE Log in
#	Then user enters "kiran@gmail.com" and "123456"
#	Then user clicks on sign in button
#	Then user is on dashboard page
#	Then close the browser


Scenario Outline: AdminLTE Login Test Scenario
	Given user is already on login page 
	When title of the login page is AdminLTE Log in 
	Then user enters "<username>" and "<password>" 
	Then user clicks on sign in button 
	Then user is on dashboard page 
	Then close the browser 
	
	Examples: 
		|username	     | password	|
		|kiran@gmail.com | 123456   |
		|sachin@gmail.com| 4321233  |
		
		
		
		#We can write multiple Scenario in single feature file.
		#Scenario: AdminLTE Dashboard Test Scenario
		#
		#	Given user login again and is already on dashboard page 
		#	When logo of the dashboard page is Dashboard
		#	Then user clicks on Users link
		#	Then title of the Users Page is AdminLTE User
