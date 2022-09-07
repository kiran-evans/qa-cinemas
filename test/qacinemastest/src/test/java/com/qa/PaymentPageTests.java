package com.qa;

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

import java.time.Duration;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class PaymentPageTests {

    private RemoteWebDriver driver;

    @BeforeEach
    void setup() {
        this.driver = new EdgeDriver();
        this.driver.manage().window().maximize();
    }

    @Test
    void testNavAndInput() {
        this.driver.get("http://localhost:3000");

        WebDriverWait wait = new WebDriverWait(this.driver, Duration.ofSeconds(10));

        WebElement dropDown = this.driver.findElement(By.cssSelector("#root > div > div > div.header > " +
                "div.nav > div.navLinks > div:nth-child(2)"));
        Actions action = new Actions(this.driver);
        action.moveToElement(dropDown).perform();

        WebElement payPageButton = this.driver.findElement(By.cssSelector("#root > div > div > div.header > " +
                "div.nav > div.navLinks > div:nth-child(2) > div.subMenuContent"));
        payPageButton.click();

        WebElement selectElement = this.driver.findElement(By.cssSelector("#discussionDropDown"));
        selectElement.click();

        WebElement frogged = this.driver.findElement(By.cssSelector("#discussionDropDown > option:nth-child(5)"));
        frogged.click();

        WebElement inputField = this.driver.findElement(By.cssSelector("#root > div > div > div.appMain > div.appBody > " +
                "div > div > div > input[type=text]"));
        inputField.sendKeys("fred");

        WebElement findButton = this.driver.findElement(By.cssSelector("#root > div > div > div.appMain > div.appBody > " +
                "div > div > div > button"));
        findButton.click();

        WebElement result = wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#root > div > div > div.appMain > div.appBody > " +
                "div > div > div > h3")));
        assertEquals("Booking for fred", result.getText());
    }

    @Test
    void noBookingFoundTest() {
        this.driver.get("http://localhost:3000");

        WebDriverWait wait = new WebDriverWait(this.driver, Duration.ofSeconds(10));

        WebElement dropDown = this.driver.findElement(By.cssSelector("#root > div > div > div.header > " +
                "div.nav > div.navLinks > div:nth-child(2)"));
        Actions action = new Actions(this.driver);
        action.moveToElement(dropDown).perform();

        WebElement payPageButton = this.driver.findElement(By.cssSelector("#root > div > div > div.header > " +
                "div.nav > div.navLinks > div:nth-child(2) > div.subMenuContent"));
        payPageButton.click();

        WebElement selectElement = this.driver.findElement(By.cssSelector("#discussionDropDown"));
        selectElement.click();

        WebElement frogged = this.driver.findElement(By.cssSelector("#discussionDropDown > option:nth-child(5)"));
        frogged.click();

        WebElement inputField = this.driver.findElement(By.cssSelector("#root > div > div > div.appMain > div.appBody > " +
                "div > div > div > input[type=text]"));
        inputField.sendKeys("Random name to cause no booking found");

        WebElement findButton = this.driver.findElement(By.cssSelector("#root > div > div > div.appMain > div.appBody > " +
                "div > div > div > button"));
        findButton.click();

        WebElement noneFoundPara = wait.until(ExpectedConditions.visibilityOfElementLocated
                (By.cssSelector("#root > div > div > div.appMain > div.appBody > div > div > p")));

        assertEquals("No booking found matching those details!", noneFoundPara.getText());
    }

    @Test
    void ensurePaymentFieldIsDisplayed() {
        this.driver.get("http://localhost:3000");

        WebDriverWait wait = new WebDriverWait(this.driver, Duration.ofSeconds(10));

        WebElement dropDown = this.driver.findElement(By.cssSelector("#root > div > div > div.header > " +
                "div.nav > div.navLinks > div:nth-child(2)"));
        Actions action = new Actions(this.driver);
        action.moveToElement(dropDown).perform();

        WebElement payPageButton = this.driver.findElement(By.cssSelector("#root > div > div > div.header > " +
                "div.nav > div.navLinks > div:nth-child(2) > div.subMenuContent"));
        payPageButton.click();

        WebElement selectElement = this.driver.findElement(By.cssSelector("#discussionDropDown"));
        selectElement.click();

        WebElement frogged = this.driver.findElement(By.cssSelector("#discussionDropDown > option:nth-child(5)"));
        frogged.click();

        WebElement inputField = this.driver.findElement(By.cssSelector("#root > div > div > div.appMain > div.appBody > " +
                "div > div > div > input[type=text]"));
        inputField.sendKeys("TESTING DO NOT PAY");

        WebElement findButton = this.driver.findElement(By.cssSelector("#root > div > div > div.appMain > div.appBody > " +
                "div > div > div > button"));
        findButton.click();

        WebElement cardNumberInput = wait.until(ExpectedConditions.visibilityOfElementLocated
                (By.cssSelector("#holderNameInput")));
        cardNumberInput.sendKeys("testing");

        assertEquals("testing", cardNumberInput.getAttribute("value"));
    }

    @AfterEach
    void tearDown() {
        this.driver.close();
    }
}
