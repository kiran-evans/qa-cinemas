package seleniumtesting;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.RemoteWebDriver;


public class OpeningTimesTest {
private RemoteWebDriver driver;

	
	@BeforeEach
	 void setup() {
		
		this.driver = new ChromeDriver();
		driver.manage().window().maximize();
	}

	@Test
	void openingtimestest() {
		this.driver.get("http://localhost:3000/"); //goes to the web page
		
		//Goes to the about menu
		this.driver.findElement(By.cssSelector("#root > div > div > div.header > div.nav > div.navLinks > div:nth-child(3) > div.subMenuHeader")).click();
		//goes to the about page
		this.driver.findElement(By.cssSelector("#root > div > div > div.header > div.nav > div.navLinks > div:nth-child(3) > div.subMenuContent > a:nth-child(1)")).click();
		
		//result
		WebElement result = driver.findElement(By.cssSelector("#root > div > div > div.appMain > div.appBody > div > h1"));
		
		//compares text in results to expected value
		assertEquals("Opening Times", result.getText());
	}

	@AfterEach
	void tearDown() {
		this.driver.close();
	}

	}

