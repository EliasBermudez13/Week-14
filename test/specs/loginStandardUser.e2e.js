import LoginPage from  '../pageobjects/login.page';
import InventoryPage from '../pageobjects/inventory.page';

describe('My Login application', () => {  
    beforeAll('Navigate to url', () => {
        browser.url('https://www.saucedemo.com/');
    });

    it('should not login with empty inputs', async () => {
        await expect(LoginPage.robotImg).toBeDisplayed();
        await expect(LoginPage.robotImg).toBeDisplayedInViewport();
        await expect(LoginPage.loginLogo).toBeDisplayedInViewport();
        await LoginPage.login('', '');
        await expect(LoginPage.errorMsg).toBeDisplayed();
        await expect(LoginPage.btnErrorMsg).toBeClickable();
        await expect(LoginPage.errorMsg).toHaveText('Epic sadface: Username is required');
    });

    it('should not login with empty Password input', async () => {
        await LoginPage.login('standard_user', '');
        await expect(LoginPage.errorMsg).toBeDisplayed();
        await expect(LoginPage.btnErrorMsg).toBeClickable();
        await expect(LoginPage.errorMsg).toHaveText('Epic sadface: Password is required');
    });

    it('should not login with wrong Password input', async () => {
        await LoginPage.login('wrong_user', 'wrong_pass');
        await expect(LoginPage.errorMsg).toBeDisplayed();
        await expect(LoginPage.btnErrorMsg).toBeClickable();
        await expect(LoginPage.errorMsg).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });

    it('should not login with wrong inputs', async () => {
        await LoginPage.login('standard_user', 'wrongpass');
        await expect(LoginPage.errorMsg).toBeDisplayed();
        await expect(LoginPage.btnErrorMsg).toBeClickable();
        await expect(LoginPage.errorMsg).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });

    it('should login with valid inputs', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect(InventoryPage.pageLogo).toBeDisplayedInViewport();
        await expect(InventoryPage.burgerMenu).toBeDisplayed();
        await expect(InventoryPage.burgerMenu).toBeClickable();
        await expect(InventoryPage.burgerMenu).toBeDisplayedInViewport();
    });
});


