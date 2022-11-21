import LoginPage from  '../pageobjects/login.page';

describe('Login with locked_out_user', () => {  
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
        await LoginPage.login('locked_out_user', '');
        await expect(LoginPage.errorMsg).toBeDisplayed();
        await expect(LoginPage.btnErrorMsg).toBeClickable();
        await expect(LoginPage.errorMsg).toHaveText('Epic sadface: Password is required');
    });

    it('should not login with wrong Password input', async () => {
        await LoginPage.login('locked_out_user', 'wrong_pass');
        await expect(LoginPage.errorMsg).toBeDisplayed();
        await expect(LoginPage.btnErrorMsg).toBeClickable();
        await expect(LoginPage.errorMsg).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });

    it('should not login a locked out user', async () => {
        await LoginPage.login('locked_out_user', 'secret_sauce');
        await expect(LoginPage.errorMsg).toBeDisplayed();
        await expect(LoginPage.btnErrorMsg).toBeClickable();
        await expect(LoginPage.errorMsg).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    });
});
