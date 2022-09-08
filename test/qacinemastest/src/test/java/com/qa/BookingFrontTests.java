package com.qa;

import static org.junit.Assert.assertEquals;
import java.time.Duration;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class BookingFrontTests {
	
	private RemoteWebDriver driver;
	
	@BeforeEach
	void setup() {
		this.driver = new EdgeDriver();
		driver.manage().window().setSize(new Dimension(1200, 720));
	}
	
	@Test
	void Testing() {
		this.driver.get("http://localhost:3000/");
		WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
		Actions actions = new Actions(driver);
		
		//access bookNow		
		this.driver.findElement(By.cssSelector("#root > div > div > "
				+ "div.header > div.nav > div.navLinks > div:nth-child(2) > div.subMenuHeader")).click();
		this.driver.findElement(By.cssSelector("#root > div > div > "
				+ "div.header > div.nav > div.navLinks > div:nth-child(2) > div.subMenuContent > a:nth-child(1)")).click();

		//select movie
		wait.until(ExpectedConditions.elementToBeClickable((By.cssSelector("#root > div > div > "
				+ "div.appMain > div.appBody > div > div > div > form > select")))).click();
		Select movieDropdown = new Select(driver.findElement(By.cssSelector("#root > div > div > "
				+ "div.appMain > div.appBody > div > div > div > form > select")));
		movieDropdown.selectByIndex(4);
		
		//set date
		wait.until(ExpectedConditions.elementToBeClickable((By.cssSelector("#root > div > div > "
				+ "div.appMain > div.appBody > div > div > div > form > div > input[type=date]:nth-child(2)")))).click();
		WebElement date = driver.findElement(By.cssSelector("#root > div > div "
				+ "> div.appMain > div.appBody > div > div > div > form > div > input[type=date]:nth-child(2)"));
		String movieDay = "22"; 
		String movieMonth = "12";
		String movieYear = "2022";
		date.sendKeys(Keys.LEFT, Keys.LEFT);
		date.sendKeys(movieDay);
		actions.pause(1);
		date.sendKeys(movieMonth);
		actions.pause(1);
		date.sendKeys(movieYear);
		actions.pause(1);
		//set time
		Select timeDropdown = new Select(driver.findElement(By.cssSelector("#root > div > div "
				+ "> div.appMain > div.appBody > div > div > div > form > div > select")));
		timeDropdown.selectByIndex(2);
	
		//set ticket count / types
		WebElement adult = driver.findElement(By.cssSelector("#adult"));
		adult.clear();
		adult.sendKeys("2");
				
		WebElement child = driver.findElement(By.cssSelector("#child"));
		child.clear();
		child.sendKeys("2");
		
		WebElement concession = driver.findElement(By.cssSelector("#concession"));
		concession.clear();
		concession.sendKeys("1");
				
		//set name
		String userName = "William C Rodgers";
		WebElement nameField = driver.findElement(By.cssSelector("#name"));
		nameField.sendKeys(userName);
	
		//book
		wait.until(ExpectedConditions.elementToBeClickable((By.cssSelector("#root > div > div > "
				+ "div.appMain > div.appBody > div > div > div > form > div > button")))).click();
		
		//assert that booking succeeded
		wait.until(ExpectedConditions.invisibilityOfElementLocated(By.cssSelector("#root > div > div > "
				+ "div.appMain > div.appBody > div > div > div > form > div > button")));
		String result = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div[2]/div[1]/div/div/div/h2")).getText();
		assertEquals("Your booking has been confirmed!", result.substring(result.length()-"Your booking has been confirmed!".length()));
	}

	@AfterEach
	void teardown() {
		this.driver.close();
	}

}
