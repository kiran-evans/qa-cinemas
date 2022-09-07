package seleniumtesting;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.RemoteWebDriver;

public class AboutTest {

	private RemoteWebDriver driver;

	
	@BeforeEach
	 void setup() {
		
		this.driver = new ChromeDriver();
		driver.manage().window().maximize();
	}

	@Test
	void abouttest() {
		this.driver.get("http://localhost:3000/AboutUs"); //goes to the about page
		
		//Goes to the scrum.org link
		this.driver.findElement(By.cssSelector("#root > div > div > div.appMain > div.appBody > div > form > div > button > a")).click();
		
		//result
		WebElement result = driver.findElement(By.cssSelector("#block-scrumorg-v2-content > section.pt-4.pt-lg-5.pb-5.homepage-hero > div > div > div:nth-child(1) > h1"));
		
		//compares text in results to expected value
		assertEquals("Welcome to the Home of Scrum!™", result.getText());
	}

	@AfterEach
	void tearDown() {
		this.driver.close();
	}

	}
	
