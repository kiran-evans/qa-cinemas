package com.qa;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.time.Duration;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class SeleniumDemoTest {
	
	private RemoteWebDriver driver;
	
	@BeforeEach
	void setup() {
		this.driver = new EdgeDriver();
		this.driver.manage().window().maximize();
	}
	
	@Test
	void demoTest() {
		this.driver.get("http://automationpractice.com/index.php");
		
		// Get dress
		
		WebElement search = this.driver.findElement(By.cssSelector("#search_query_top")); // Find search bar
		search.sendKeys("dress");
		search.sendKeys(Keys.ENTER);
		
		WebDriverWait wait = new WebDriverWait(this.driver, Duration.ofSeconds(20)); // Wait for page to load
		WebElement result = wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("#center_column > ul > li:nth-child(1) > div > div.right-block > h5 > a"))); // Select first item label
		
		assertEquals("Printed Summer Dress", result.getText());
		
		// Open product page
		
		WebElement goToProduct = wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("#center_column > ul > li:nth-child(1) > div > div.right-block > h5 > a"))); // Find product
		goToProduct.click();
		
		// Add to cart
		
		WebElement addToCart = wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("#buy_block > div > div.box-cart-bottom > div:nth-child(1) > #add_to_cart > button"))); // Find Add to cart button
		addToCart.click();
		
		// Proceed to checkout
		
		WebElement proceedToCheckout = wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a"))); // Find Proceed to checkout 'a' tag
		proceedToCheckout.click();
		
		// 01 Summary
		
		WebElement checkout = wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium"))); // Find Proceed to checkout button
		checkout.click();
		
		// 02 Sign in
		
		WebElement email = wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("#email"))); // Find email field
		email.sendKeys("jarjarbinks@meesamail.com");
		
		WebElement password = wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("#passwd"))); // Find password field
		password.sendKeys("jarjarbinks");
		password.sendKeys(Keys.ENTER);
		
		// 03 Address
		
		WebElement checkout2 = wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("#center_column > form > p > button"))); // Find Proceed to checkout button
		checkout2.click();
		
		// 04 Shipping
		
		WebElement termsOfService = wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("#uniform-cgv"))); // Find Terms of service tick box
		termsOfService.click();
		
		WebElement checkout3 = wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("#form > p > button"))); // Find Proceed to checkout button
		checkout3.click();
		
		// 05 Payment
		
		WebElement payByBank = wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("#HOOK_PAYMENT > div:nth-child(1) > div > p > a"))); // Find Pay by bank wire
		payByBank.click();
		
		WebElement confirm = wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("#cart_navigation > button"))); // Find Confirm my order button
		confirm.click();
		
		// Receipt
		WebElement receipt = wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("#center_column > div > p > strong"))); // Select receipt title
		
		assertEquals("Your order on My Store is complete.", receipt.getText());
		
		
	}
	
	@AfterEach
	void tearDown() {
		this.driver.close();
	}
}
