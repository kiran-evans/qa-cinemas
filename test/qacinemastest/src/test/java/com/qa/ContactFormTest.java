package com.qa;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.time.Duration;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class ContactFormTest {
	private RemoteWebDriver driver;

	@BeforeEach
	void setup() {
		this.driver = new EdgeDriver();
		driver.manage().window().fullscreen();
		// opens a new window
	}

	@Test
	void demoTest() {
		this.driver.get("http://localhost:3000/"); // goes to the page
		//driver.get("http://automationpractice.com/index.php");
	

		WebElement contactUs =  driver.findElement(By.cssSelector("#root > div > div > div.header > div.nav > div.navLinks > a:nth-child(5)"));
		contactUs.click();
		WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(5));
		
		wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.cssSelector("#root > div > div > div.appMain > div.appBody > div > form > input:nth-child(3)")));
		WebElement header = driver.findElement(By.cssSelector("#root > div > div > div.appMain > div.appBody > div > form > input:nth-child(3)"));
		String headerValue = "header";
		header.sendKeys(headerValue);
		
		
		WebElement email = driver.findElement(By.cssSelector("#root > div > div > div.appMain > div.appBody > div > form > input:nth-child(5)"));
		String address = "test@email.com";
		email.sendKeys(address);
		
		WebElement body = driver.findElement(By.cssSelector("#root > div > div > div.appMain > div.appBody > div > form > textarea"));
		String text = "body";
		body.sendKeys(text);
		

		WebElement submitForm =  driver.findElement(By.className("formSubmitButton"));
		submitForm.click();
		
		assertEquals("header",
				this.driver.findElement(By.cssSelector("#root > div > div > div.appMain > div.appBody > div > form > input:nth-child(3)")).getAttribute("value"));
		assertEquals("test@email.com",
				this.driver.findElement(By.cssSelector("#root > div > div > div.appMain > div.appBody > div > form > input:nth-child(5)")).getAttribute("value"));
		assertEquals("body",
				this.driver.findElement(By.cssSelector("#root > div > div > div.appMain > div.appBody > div > form > textarea")).getAttribute("value"));
		
	}


	@AfterEach
	void tearDown() {
		this.driver.close();
	}

}
