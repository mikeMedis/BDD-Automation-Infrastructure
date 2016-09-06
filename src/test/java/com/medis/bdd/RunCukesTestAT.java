package com.medis.bdd;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(tags = {"@Register"},
		format = {"pretty", "json-pretty:target/json/cucumber-report.json", "html:target/cucumber-html-report/"},
		features = "src/test/resources"
)

public class RunCukesTestAT {

}
