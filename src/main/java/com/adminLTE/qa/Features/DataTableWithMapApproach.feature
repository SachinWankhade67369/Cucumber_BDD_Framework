Feature: AdminLTE Add User Details feature 

Scenario: AdminLTE Add User Details using DataTable Map Test Scenario
	Given in Table Map Approach user is already on login page 
	When in Table Map Approach title of the login page is AdminLTE Log in 
	Then in Table Map Approach user enters email and password 
		|email			|password|
		|kiran@gmail.com|123456  |
	Then in Table Map Approach user clicks on sign in button 
	Then in Table Map Approach user is on dashboard page 
	Then in Table Map Approach user clicks on Users link 
	Then in Table Map Approach user clicks on AddUser link 
	Then in Table Map Approach user enters users details and click on submit
		|username		|mobile	  |useremail       |gender | state     | password | 
		|sachin wankhade|123466544|sachin@gmail.com|Male   |Maharashtra|sachin@123|
		| Nilesh Mulekar | 98754764 | nilesh@gmail.com | Male   | Punjab     | 124743  |
		
	Then in Table Map Approach close the browser