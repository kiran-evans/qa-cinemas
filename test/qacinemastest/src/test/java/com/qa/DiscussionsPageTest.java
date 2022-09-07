package pom;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class DiscussionsBoardTesting {

    private WebDriver driver;

    @BeforeEach
    void setup() {
        this.driver = new EdgeDriver();
        this.driver.manage().window().maximize();
    }

    @Test
    void navToPageAndEnterInfo() {
        this.driver.get("http://localhost:3000");

        WebDriverWait wait = new WebDriverWait(this.driver, Duration.ofSeconds(10));

        WebElement discussionButton = this.driver.findElement(By.cssSelector("#root > div > div > div.header > " +
                "div.nav > div.navLinks > a:nth-child(4)"));
        discussionButton.click();

        WebElement inputField = this.driver.findElement(By.cssSelector("#discussName"));
        inputField.sendKeys("Maverick90");

        assertEquals("Maverick90", inputField.getAttribute("value"));
    }

    @Test
    void discussionSent() {
        this.driver.get("http://localhost:3000");

        WebDriverWait wait = new WebDriverWait(this.driver, Duration.ofSeconds(10));

        WebElement discussionButton = this.driver.findElement(By.cssSelector("#root > div > div > div.header > " +
                "div.nav > div.navLinks > a:nth-child(4)"));
        discussionButton.click();

        WebElement dropDown = this.driver.findElement(By.cssSelector("#discussionDropDown"));
        dropDown.click();

        WebElement alien = this.driver.findElement(By.cssSelector("#discussionDropDown > option:nth-child(2)"));
        alien.click();

        WebElement nameField = this.driver.findElement(By.cssSelector("#discussName"));
        nameField.sendKeys("TestName");

        WebElement subjectField = this.driver.findElement(By.cssSelector("#discussSubject"));
        subjectField.sendKeys("TestSubject");

        WebElement textField = this.driver.findElement(By.cssSelector("#discussText"));
        textField.sendKeys("TestSubject");

        WebElement sendButton = this.driver.findElement(By.cssSelector("#discussionCreator > form > button"));
        sendButton.click();

        WebElement result = wait.until(ExpectedConditions.visibilityOfElementLocated(
                By.cssSelector("#discussionCreator > form > p")));

        assertEquals("Your post has been submitted", result.getText());

    }

    @AfterEach
    void tearDown() {
        this.driver.close();
    }

}
