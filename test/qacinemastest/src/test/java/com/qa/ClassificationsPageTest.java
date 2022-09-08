package com.qa;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.RemoteWebDriver;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class ClassificationsPageTest {

    private RemoteWebDriver driver;

    @BeforeEach
    void setup() {
        this.driver = new EdgeDriver();
        this.driver.manage().window().maximize();
    }

    @Test
    void navToClassifications() {
        this.driver.get("http://localhost:3000");

        WebElement dropDown = this.driver.findElement(By.cssSelector("#root > div > div > div.header > " +
                "div.nav > div.navLinks > div:nth-child(3)"));
        Actions action = new Actions(this.driver);
        action.moveToElement(dropDown).perform();

        WebElement classificationsButton = this.driver.findElement(By.cssSelector("#root > div > div > div.header > " +
                "div.nav > div.navLinks > div:nth-child(3) > div.subMenuContent > a:nth-child(4)"));
        classificationsButton.click();

        WebElement result = this.driver.findElement(By.cssSelector("#root > div > div > div.appMain > div.appBody > " +
                "div > ul > li:nth-child(4) > p"));

        assertEquals("No one younger than 15 may see a 15 film in a cinema. No one younger than 15 may rent or buy a " +
                "15 rated video work.", result.getText());

    }

    @AfterEach
    void tearDown() {
        this.driver.close();
    }

}
