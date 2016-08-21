@Register
Feature: User Registration
	I would like to successfully register
	
 Background:
	Given I am a new user on the registration page
  
 Scenario: Verify that registration is a successful
	When I fill field with the following data
      | field            | data                |
      | first_name       | Mike                |
      | last_name        | Medis               |
      | phone_number     | 9045242217          |
      | username         | MikeMedisThe        |
      | e_mail           | mike@mikemedis.tech |
      | description      | @sampledesc         |
      | password         | password            |
      | confirm_password | password            |
 	And I click the submit button
    Then I should be registered successfully
  
 Scenario: Invalid Registration Empty Field Message 
    When I leave field empty with no data
      | field            | data  |             
      | first_name       |       |
      | last_name        |       |
      | phone_number     |       |
      | username         |       |
      | e_mail           |       |
      | password         |       |
      | confirm_password |       |
    And I click the submit button
    Then I should receive field required "* This field is required" message
  
 Scenario: Invalid phone_number
    When I enter 000-6786 in the phone_number input field
    And I click the submit button
    Then I should receive phone "* Minimum 10 Digits starting with Country Code" message
  
 Scenario: Invalid E-mail
    When I enter "mikemedis@mikemedis" in the e_mail input field
    And I click the submit button
    Then I should receive email "* Invalid email address"	 message
  
 Scenario: Invalid Password
    When I enter "passWod" into the password input field
    And I click the submit button
    Then I should receive short password "* Minimum 8 characters required" message
  
 Scenario Outline: Mismatching Passwords
    When I enter "<password>" and "<confirm_password>"
    And I click the submit button  
    Then I should receive mismatched passwords "* Fields do not match" message
  	
  	Examples:
  	  | password | confirm_password |
      | pa$$word | tHis$isMyPa$$    |
   
 Scenario: Duplicate Username Error Message
    Given a user has successfully registered with "MMedis" as a username
    When I enter valid data on the page in each field
      | field            | data                |
      | first_name       | Mike                |
      | last_name        | Medis               |
      | phone_number     | 9045242217          |
      | username         | MikeMedis12           |
      | e_mail           | mike@mikemedis.tech |
      | description      | @sampledesc         |
      | password         | password            |
      | confirm_password | password            |
    And I click the submit button  
    Then I should receive username message "Error: Username already exists"
    
 Scenario: Duplicate E-mail Error Message
   Given a user has successfully registered with "email@email.com" as a E-mail
   When I register with valid data on the page in each field
      | field            | data                |
      | first_name       | Mike                |
      | last_name        | Medis               |
      | phone_number     | 9045242217          |
      | username         | MikeMedis           |
      | e_mail           | email@email.com     |
      | description      | @sampledesc         |
      | password         | password            |
      | confirm_password | password            |
   And I click the submit button
   Then I should receive email message "Error: E-mail address already exists"  
