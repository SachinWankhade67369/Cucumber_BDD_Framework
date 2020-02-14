Feature: AdminLTE Add User Details feature 

Scenario Outline: AdminLTE Add User Details Test Scenario
	Given in Add user is already on login page 
	When in Add title of the login page is AdminLTE Log in 
	Then in Add user enters "<email>" and "<password>" 
	Then in Add user clicks on sign in button 
	Then in Add user is on dashboard page 
	Then in Add user clicks on Users link 
	Then in Add user clicks on AddUser link 
	Then in Add user enters users details "<username>" and "<mobile>" and "<useremail>" and "<gender>" and "<state>" and "<userpassword>" 
	Then in Add user click on submit button 
	Then in Add close the browser 
	
	
	Examples: 
		|email           | password| username       | mobile   | useremail           | gender | state      | userpassword|
		|kiran@gmail.com | 123456  | Sachin Wankhade| 12346789 | sachin@gmail.com | Male   | Maharashtra| 098765  |
		|kiran@gmail.com | 123456  | Nilesh Mulekar | 98754764 | nilesh@gmail.com | Male   | Punjab     | 124743  |
		|kiran@gmail.com | 123456  | kishor Bhagwat | 12386579 | kishor@gmail.com | Male   | Maharashtra| 067765  |
		|kiran@gmail.com | 123456  | Janvhi         | 18765789 | janu@gmail.com   | Female | Maharashtra| 098765  |
					