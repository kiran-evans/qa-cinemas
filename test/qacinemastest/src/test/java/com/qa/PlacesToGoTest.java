package seleniumtesting;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.RemoteWebDriver;

public class PlacesToGoTest {
private RemoteWebDriver driver;

	
	@BeforeEach
	 void setup() {
		
		this.driver = new ChromeDriver();
		driver.manage().window().maximize();
	}

	@Test
	void placesToGoTest() {
		this.driver.get("http://localhost:3000/"); //goes to the web page
		
		//Goes to the places to go tab
		this.driver.findElement(By.cssSelector("#root > div > div > div.header > div.nav > div.navLinks > div:nth-child(3) > div.subMenuHeader")).click();
		//goes to the places to go page
		this.driver.findElement(By.cssSelector("#root > div > div > div.header > div.nav > div.navLinks > div:nth-child(3) > div.subMenuContent > a:nth-child(5)")).click();
		
		//result
		WebElement result = driver.findElement(By.cssSelector("#root > div > div > div.appMain > div.appBody > div > div.ptgSubtitle > h3"));
		
		//compares text in results to expected value
		assertEquals("Check out these suggested local venues!", result.getText());
	}

	@AfterEach
	void tearDown() {
		this.driver.close();
	}

	}

