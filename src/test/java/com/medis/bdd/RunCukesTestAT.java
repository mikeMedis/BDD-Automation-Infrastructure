package com.medis.bdd;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(
	format = {"pretty", "json:target/json/output.json", "html:target/html/"},
	features = "src/test/resources"
)

public class RunCukesTestAT {

}
