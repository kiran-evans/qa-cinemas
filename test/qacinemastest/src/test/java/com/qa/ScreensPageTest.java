package pom;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class ScreensTesting {

    private RemoteWebDriver driver;

    @BeforeEach
    void setup() {
        this.driver = new EdgeDriver();
        this.driver.manage().window().maximize();
    }

    @Test
    void screensPageLoads() {
        this.driver.get("http://localhost:3000");

        WebDriverWait wait = new WebDriverWait(this.driver, Duration.ofSeconds(10));

        WebElement dropDown = this.driver.findElement(By.cssSelector("#root > div > div > div.header > div.nav > " +
                "div.navLinks > div:nth-child(3)"));
        dropDown.click();


        WebElement screensButton = this.driver.findElement(By.cssSelector("#root > div > div > div.header > " +
                "div.nav > div.navLinks > div:nth-child(3) > div.subMenuContent > a:nth-child(3)"));
        screensButton.click();

        WebElement result = this.driver.findElement(By.cssSelector("#root > div > div > div.appMain > div.appBody > " +
                "div > div.screenSubtitle > h4"));

        assertEquals("Our cinemas feature best-in-class comfort with award-winning seating arrangement.",
                result.getText());

    }

    @AfterEach
   void tearDown() {
        this.driver.close();
    }

}
