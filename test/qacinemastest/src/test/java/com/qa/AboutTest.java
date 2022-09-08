package com.qa;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.remote.RemoteWebDriver;

public class AboutTest {

	private RemoteWebDriver driver;

	
	@BeforeEach
	 void setup() {
		
		this.driver = new EdgeDriver();
		driver.manage().window().maximize();
	}

	@Test
	void abouttest() {
		this.driver.get("http://localhost:3000/"); //goes to the web page
		// goes to the about tab
		this.driver.findElement(By.cssSelector("#root > div > div > div.header > div.nav > div.navLinks > div:nth-child(3) > div.subMenuHeader")).click();
		//goes to the getting there page
		this.driver.findElement(By.cssSelector("#root > div > div > div.header > div.nav > div.navLinks > div:nth-child(3) > div.subMenuContent > a:nth-child(6)")).click();
		
		//Find title
		WebElement title = this.driver.findElement(By.cssSelector("#root > div > div > div.appMain > div.appBody > div > h1"));
		
		//result
		//compares text in results to expected value
		assertEquals("About Us", title.getText());
	}

	@AfterEach
	void tearDown() {
		this.driver.close();
	}

	}
	
