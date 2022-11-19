import LoginPage from  '../pageobjects/login.page';

describe('My Login application', () => {  
    beforeAll('Navigate to url', () => {
        browser.url('https://www.saucedemo.com/');
    })
    it('should not login with empty inputs', async () => {
        await LoginPage.login('', '');
        await expect(LoginPage.errorMsg).toExist();
        await expect(LoginPage.errorMsg).toHaveText('Epic sadface: Username is required');
    });
});


