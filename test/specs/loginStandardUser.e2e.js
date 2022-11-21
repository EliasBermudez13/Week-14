import LoginPage from  '../pageobjects/login.page';
import InventoryPage from '../pageobjects/inventory.page';

describe('Login with standard_user', () => {  
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
        await expect(InventoryPage.cart).toBeDisplayed();
        await expect(InventoryPage.cart).toBeDisplayedInViewport();
        await expect(InventoryPage.cartLink).toBeClickable();
        await expect(InventoryPage.productsTitle).toBeDisplayed();
        await expect(InventoryPage.productsTitle).toBeDisplayedInViewport();
        await expect(InventoryPage.productsBotImg).toBeDisplayed();
        await expect(InventoryPage.productsBotImg).toBeDisplayedInViewport();
        await expect(InventoryPage.productsSort).toBeDisplayed();
        await expect(InventoryPage.productsSort).toBeDisplayedInViewport();
        await expect(InventoryPage.productsSort).toBeClickable();
        await InventoryPage.footer.scrollIntoView();
        await expect(InventoryPage.footer).toBeDisplayed();
        await expect(InventoryPage.footer).toBeDisplayedInViewport();
        await expect(InventoryPage.socialList).toBeDisplayed();
        await expect(InventoryPage.socialList).toBeDisplayedInViewport();
        await expect(InventoryPage.socialLinkFacebook).toBeDisplayed();
        await expect(InventoryPage.socialLinkFacebook).toBeDisplayedInViewport();
        await expect(InventoryPage.socialLinkFacebook).toBeClickable();
        await expect(InventoryPage.socialLinkFacebook).toHaveLink('https://www.facebook.com/saucelabs');
        await expect(InventoryPage.socialLinkLinkedIn).toBeDisplayed();
        await expect(InventoryPage.socialLinkLinkedIn).toBeDisplayedInViewport();
        await expect(InventoryPage.socialLinkLinkedIn).toBeClickable();
        await expect(InventoryPage.socialLinkLinkedIn).toHaveLink('https://www.linkedin.com/company/sauce-labs/');
        await expect(InventoryPage.socialLinkTwitter).toBeDisplayed();
        await expect(InventoryPage.socialLinkTwitter).toBeDisplayedInViewport();
        await expect(InventoryPage.socialLinkTwitter).toBeClickable();
        await expect(InventoryPage.socialLinkTwitter).toHaveLink('https://twitter.com/saucelabs');
        await expect(InventoryPage.footerCopyRight).toHaveText('© 2022 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy');
        await expect(InventoryPage.footerBotImg).toBeDisplayed();
        await expect(InventoryPage.footerBotImg).toBeDisplayedInViewport();
    });

    it('should log out of a valid user', async () => {
        await InventoryPage.burgerMenu.scrollIntoView();
        await InventoryPage.burgerMenu.click();
        await expect(InventoryPage.burgerMenuLogOut).toBeDisplayed();
        await expect(InventoryPage.burgerMenuLogOut).toBeDisplayedInViewport();
        await expect(InventoryPage.burgerMenuLogOut).toBeClickable();
        await expect(InventoryPage.burgerMenuLogOut).toHaveLink('#');
        await InventoryPage.burgerMenuLogOut.click();
        await expect(LoginPage.robotImg).toBeDisplayed();
        await expect(LoginPage.robotImg).toBeDisplayedInViewport();
        await expect(LoginPage.loginLogo).toBeDisplayedInViewport();
    });
});


