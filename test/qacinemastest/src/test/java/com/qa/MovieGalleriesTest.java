package com.qa;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.time.Duration;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class MovieGalleriesTest {
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
	
		WebElement movies = driver.findElement(By.cssSelector("#root > div > div > div.header > div.nav > div.navLinks > div:nth-child(1) > div.subMenuHeader"));
		Actions action = new Actions(driver);
		action.moveToElement(movies).perform(); // Hover over Movies submenu title
		
		WebElement nowShowing =  driver.findElement(By.cssSelector("#root > div > div > div.header > div.nav > div.navLinks > div:nth-child(1) > div.subMenuContent > a:nth-child(1)"));
		nowShowing.click();
		WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
		
		wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.cssSelector("#root > div > div > div.appMain > div.appBody > div > div > div > div:nth-child(1) > h1")));
		WebElement alien = driver.findElement(By.cssSelector("#root > div > div > div.appMain > div.appBody > div > div > div > div:nth-child(1) > h1"));

		assertEquals("Alien: Abstraction", alien.getText());
		
		
		
		action.moveToElement(movies).perform(); // Hover over Movies submenu title
		
		WebElement newReleases =  driver.findElement(By.cssSelector("#root > div > div > div.header > div.nav > div.navLinks > div:nth-child(1) > div.subMenuContent > a:nth-child(2)"));
		newReleases.click();
		
		wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.cssSelector("#root > div > div > div.appMain > div.appBody > div > div > div > div:nth-child(2) > h1")));
		WebElement frogged = driver.findElement(By.cssSelector("#root > div > div > div.appMain > div.appBody > div > div > div > div:nth-child(2) > h1"));
		
		assertEquals("Frogged", frogged.getText());

		
	}


	@AfterEach
	void tearDown() {
		this.driver.close();
	}

}
