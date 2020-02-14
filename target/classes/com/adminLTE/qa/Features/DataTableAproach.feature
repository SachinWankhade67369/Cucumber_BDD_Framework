Feature: AdminLTE Add User Details feature 

Scenario: AdminLTE Add User Details using DataTable Test Scenario
	Given in Table Approach user is already on login page 
	When in Table Approach title of the login page is AdminLTE Log in 
	Then in Table Approach user enters email and password 
		|kiran@gmail.com|123456|
	Then in Table Approach user clicks on sign in button 
	Then in Table Approach user is on dashboard page 
	Then in Table Approach user clicks on Users link 
	Then in Table Approach user clicks on AddUser link 
	Then in Table Approach user enters users details 
		|sachin wankhade|123466544|sachin@gmail.com|Male|Maharashtra|sachin@123|
	Then in Table Approach user click on submit button 
	Then in Table Approach close the browser