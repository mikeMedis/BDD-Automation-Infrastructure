package com.medis.bdd;

import cucumber.api.DataTable;
import cucumber.api.Scenario;

import java.io.*;


import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import org.apache.http.client.ClientProtocolException;
import org.json.JSONException;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import com.saucelabs.saucerest.SauceREST;
import org.openqa.selenium.support.ui.Select;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import java.net.URL;

import static junit.framework.TestCase.assertEquals;


public class StepsDefinitions {
	public static final String USERNAME = "MikeX";
	public static final String ACCESS_KEY = "0eddcc0d-5b71-49fb-a8a2-ba695d945326";
	public static final String URL = "http://" + USERNAME + ":" + ACCESS_KEY + "@localhost:4445/wd/hub";
	public static WebDriver driver;
	public String sessionId;
	public boolean testResults;
	public String jobName;

	public void UpdateResults(boolean testResults) throws JSONException, ClientProtocolException, IOException {
		SauceREST saucerest = new SauceREST(USERNAME, ACCESS_KEY);
		Map<String, Object> updates = new HashMap<String, Object>();
		updates.put("passed", testResults);
		saucerest.updateJobInfo(sessionId, updates);
	}


	@Before
	public void setUpSauce(Scenario scenario) throws Exception {

		DesiredCapabilities caps = new DesiredCapabilities();
		caps.setCapability("platform", System.getenv("platform"));
		caps.setCapability("browserName", System.getenv("browserName"));
		caps.setCapability("version", System.getenv("version"));
		caps.setCapability("name", scenario.getName());

		caps.setBrowserName(System.getenv("SELENIUM_BROWSER"));
		caps.setVersion(System.getenv("SELENIUM_VERSION"));
		caps.setCapability(CapabilityType.PLATFORM, System.getenv("SELENIUM_PLATFORM"));

		driver = new RemoteWebDriver(new URL(URL), caps);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

		jobName = caps.getCapability("name").toString();

		sessionId = (((RemoteWebDriver) driver).getSessionId()).toString();
		testResults = false;
	}

	// ====== New User Registration ======

	@Given("^I am a new user on the registration page$")
	public void i_am_a_new_user_on_the_registration_page() throws Throwable {
		driver.navigate().to("http://demoqa.com/registration/");
		driver.manage().window().maximize();
	}

	// Enter Valid Data for Successful Registration
	@When("^I fill field with the following data$")
	public void i_fill_field_with_the_following_data(DataTable arg1) throws Throwable {
		List<List<String>> data = arg1.raw();
		// Enter valid data
		driver.findElement(By.name("first_name")).sendKeys(data.get(1).get(1));
		driver.findElement(By.name("last_name")).sendKeys(data.get(2).get(1));
		driver.findElement(By.id("phone_9")).sendKeys(data.get(3).get(1));
		driver.findElement(By.name("username")).sendKeys(data.get(4).get(1));
		driver.findElement(By.name("e_mail")).sendKeys(data.get(5).get(1));
		driver.findElement(By.name("description")).sendKeys(data.get(6).get(1));
		driver.findElement(By.name("password")).sendKeys(data.get(7).get(1));
		driver.findElement(By.id("confirm_password_password_2")).sendKeys(data.get(8).get(1));

		WebElement mStatus = driver.findElement(By.cssSelector("input[value='married']"));
		mStatus.click();

		WebElement Hobby = driver.findElement(By.cssSelector("input[value='reading']"));
		Hobby.click();

		Select country = new Select(driver.findElement(By.id("dropdown_7")));
		country.selectByValue("Barbados");

		Select Month = new Select(driver.findElement(By.id("yy_date_8")));
		Month.selectByIndex(3);

		Select Day = new Select(driver.findElement(By.id("yy_date_8")));
		Day.selectByIndex(12);

		Select Year = new Select(driver.findElement(By.id("yy_date_8")));
		Year.selectByIndex(19);
	}

	// Click Submit
	@When("^I click the submit button$")
	public void i_click_the_submit_button() throws Throwable {
		driver.findElement(By.name("pie_submit")).click();
	}


	// Successful Registration
	@Then("^I should be registered successfully$")
	public void i_should_be_registered_successfully() throws Throwable {
		if (driver.getCurrentUrl().equalsIgnoreCase("http://demoqa.com/registration/")) {
			System.out.println("Test Pass");
		} else {
			System.out.println("Test Failed");
			driver.close();
		}
	}

	// ====== Empty Data fields ======
	@When("^I leave field empty with no data$")
	public void i_leave_field_empty_with_no_data(DataTable arg1) throws Throwable {
		List<List<String>> data = arg1.raw();
		// Enter Empty Data Fields
		driver.findElement(By.name("first_name")).sendKeys(data.get(1).get(1));
		driver.findElement(By.name("last_name")).sendKeys(data.get(2).get(1));
		driver.findElement(By.id("phone_9")).sendKeys(data.get(3).get(1));
		driver.findElement(By.name("username")).sendKeys(data.get(4).get(1));
		driver.findElement(By.name("e_mail")).sendKeys(data.get(5).get(1));
		driver.findElement(By.name("description")).sendKeys(data.get(6).get(1));
		driver.findElement(By.name("password")).sendKeys(data.get(6).get(1));
		driver.findElement(By.id("confirm_password_password_2")).sendKeys(data.get(7).get(1));

		driver.findElement(By.name("pie_submit")).click();

	}


	@Then("^I should receive field required \"([^\"]*)\" message$")
	public void i_should_receive_message(String arg1) throws Throwable {
		WebElement fieldError = driver.findElement(By.className("legend_txt"));
		String error = fieldError.getText();
		assertEquals("* This field is required", error);
	}

	// ====== Invalid Phone Number Message ======
	@When("^I enter (\\d+)-(\\d+) in the phone_number input field$")
	public void i_enter_in_the_phone_number_input_field(int arg1, int arg2) throws Throwable {
		driver.findElement(By.id("phone_9")).sendKeys("000-6786");
	}

	@Then("I should receive phone \"([^\"]*)\" message$")
	public void phoneErrorMessage(String arg1) throws Throwable {
		WebElement phoneError = driver.findElement(By.className("legend_txt"));
		String error = phoneError.getText();
		assertEquals("* Minimum 10 Digits starting with Country Code", error);
	}

	// ====== Invalid E-Mail ======
	@When("^I enter \"([^\"]*)\" in the e_mail input field$")
	public void i_enter_in_the_e_mail_input_field(String arg1) throws Throwable {
		driver.findElement(By.name("e_mail")).sendKeys("mike@hello");
	}

	@Then("^I should receive email \"([^\"]*)\" message$")
	public void email_message(String arg1) throws Throwable {
		WebElement emailError = driver.findElement(By.className("legend_txt"));
		String error = emailError.getText();
		assertEquals("* Invalid email address", error);
	}

	@When("^When I enter \"(^\"]*)\" into the password input field$")
	public void short_password(String arg1) throws Throwable {
		driver.findElement(By.name("password")).sendKeys("pa%wao");
	}

	@Then("I should receive short password \"(^\"]*)\" message")
	public void short_password_message(String arg1) throws Throwable {
		WebElement shortError = driver.findElement(By.className("legend_txt"));
		String error = shortError.getText();
		assertEquals("* Minimum 8 characters required", error);
	}
	// Mismatching Passwords
	@When("^I enter \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_enter_and(String arg1, String arg2) throws Throwable {
		driver.findElement(By.name("password")).sendKeys("pa$$word");
		driver.findElement(By.id("confirm_password_password_2")).sendKeys("tHis$isMyPa$$");
	}

	@Then("^I should receive mismatched passwords \"([^\"]*)\" message$")
	public void password_message(String arg1) throws Throwable {
		WebElement Mismatched = driver.findElement(By.className("legend_txt"));
		String error = Mismatched.getText();
		assertEquals("* Fields do not match", error);
	}

	// ====== Username already taken ======
	@Given("^a user has successfully registered with \"([^\"]*)\" as a username$")
	public void a_user_has_successfully_registered_with_as_a_username(String arg1) throws Throwable {
		driver.getCurrentUrl().equalsIgnoreCase("http://demoqa.com/registration/");
	}

	@When("^I enter valid data on the page in each field$")
	public void i_enter_valid_data_on_the_page_in_each_field(DataTable arg1) throws Throwable {
		List<List<String>> data = arg1.raw();
		// Enter valid data
		driver.findElement(By.name("first_name")).sendKeys(data.get(1).get(1));
		driver.findElement(By.name("last_name")).sendKeys(data.get(2).get(1));
		driver.findElement(By.id("phone_9")).sendKeys(data.get(3).get(1));
		driver.findElement(By.name("username")).sendKeys(data.get(4).get(1));
		driver.findElement(By.name("e_mail")).sendKeys(data.get(5).get(1));
		driver.findElement(By.name("description")).sendKeys(data.get(6).get(1));
		driver.findElement(By.name("password")).sendKeys(data.get(7).get(1));
		driver.findElement(By.id("confirm_password_password_2")).sendKeys(data.get(8).get(1));

		WebElement mStatus = driver.findElement(By.cssSelector("input[value='married']"));
		mStatus.click();

		WebElement Hobby = driver.findElement(By.cssSelector("input[value='reading']"));
		Hobby.click();

		Select country = new Select(driver.findElement(By.id("dropdown_7")));
		country.selectByValue("Barbados");

		Select Month = new Select(driver.findElement(By.id("mm_date_8")));
		Month.selectByIndex(8);

		Select Day = new Select(driver.findElement(By.id("dd_date_8")));
		Day.selectByIndex(11);

		Select Year = new Select(driver.findElement(By.id("yy_date_8")));
		Year.selectByIndex(10);
	}

	@Then("^I should receive username message \"([^\"]*)\"$")
	public void i_should_receive(String arg1) throws Throwable {
		String error = driver.findElement(By.id("show_pie_register_error_js")).getText();
		assertEquals("Error: Username already exists", error);
	}

	// ====== E-mail is already taken
	@Given("^a user has successfully registered with \"([^\"]*)\" as a E-mail$")
	public void a_user_has_successfully_registered_with_as_a_E_mail(String arg1) throws Throwable {
		driver.getCurrentUrl().equalsIgnoreCase("http://demoqa.com/registration/");
	}


	@When("^I register with valid data on the page in each field$")
	public void i_register_with_valid_data_on_the_page_in_each_field(DataTable arg1) throws Throwable {
		List<List<String>> data = arg1.raw();
		// Enter valid data
		driver.findElement(By.name("first_name")).sendKeys(data.get(1).get(1));
		driver.findElement(By.name("last_name")).sendKeys(data.get(2).get(1));
		driver.findElement(By.id("phone_9")).sendKeys(data.get(3).get(1));
		driver.findElement(By.name("username")).sendKeys(data.get(4).get(1));
		driver.findElement(By.name("e_mail")).sendKeys(data.get(5).get(1));
		driver.findElement(By.name("description")).sendKeys(data.get(6).get(1));
		driver.findElement(By.name("password")).sendKeys(data.get(7).get(1));
		driver.findElement(By.id("confirm_password_password_2")).sendKeys(data.get(8).get(1));

		WebElement mStatus = driver.findElement(By.cssSelector("input[value='married']"));
		mStatus.click();

		WebElement Hobby = driver.findElement(By.cssSelector("input[value='reading']"));
		Hobby.click();

		Select country = new Select(driver.findElement(By.id("dropdown_7")));
		country.selectByIndex(12);

		Select Year = new Select(driver.findElement(By.id("yy_date_8")));
		Year.selectByIndex(20);
	}

	@Then("^I should receive email message \"([^\"]*)\" $")
	public void emailAlreadyExists() throws Throwable {
		String error = driver.findElement(By.id("show_pie_register_error_js")).getText();
		assertEquals("Error: Email already exists", error);
	}

	@After
	public void tearDownLocal() throws IOException, JSONException {
		driver.quit();
		UpdateResults(testResults);
		System.out.println("SauceOnDemandSessionID="+ sessionId + "job-name=");
	}
}
