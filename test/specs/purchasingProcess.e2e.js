import LoginPage from  '../pageobjects/login.page';
import InventoryPage from '../pageobjects/inventory.page';
import CartPage from  '../pageobjects/cart.page';
import CheckOutPage from '../pageobjects/checkOut.page';
import CompletePage from  '../pageobjects/complete.page';
import OverviewPage from '../pageobjects/overview.page';

describe('Purchase with standar_user', () => {  
    beforeAll('Navigate to url', () => {
        browser.url('https://www.saucedemo.com/');
    });

    it('should add products into cart', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect(InventoryPage.pageLogo).toBeDisplayedInViewport();
        await expect(InventoryPage.burgerMenu).toBeDisplayed();
        await expect(InventoryPage.cart).toBeDisplayed();
        await expect(InventoryPage.productsTitle).toBeDisplayedInViewport();
        await expect(InventoryPage.productsBotImg).toBeDisplayed();
        await expect(InventoryPage.backpackAddToCartBtn).toBeDisplayed();
        await expect(InventoryPage.lightAddToCartBtn).toBeDisplayed();
        await expect(InventoryPage.backpackAddToCartBtn).toBeClickable();
        await expect(InventoryPage.lightAddToCartBtn).toBeClickable();
        await InventoryPage.backpackAddToCartBtn.click();
        await InventoryPage.lightAddToCartBtn.click();
        await expect(InventoryPage.backpackRemoveOfCartBtn).toBeDisplayed();
        await expect(InventoryPage.lightRemoveOfCartBtn).toBeDisplayed();
        await expect(InventoryPage.cartBadge).toBeDisplayed();
        await expect(InventoryPage.cartBadge).toHaveText('2');
        await expect(InventoryPage.cartLink).toBeClickable();
    });

    it('should display shopping cart with added products', async () => {
        await InventoryPage.cartLink.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
        await expect(CartPage.cartTitle).toBeDisplayed();
        await expect(CartPage.cartTitle).toHaveText('YOUR CART');
        await expect(CartPage.pageLogo).toBeDisplayed();
        await expect(CartPage.burgerMenu).toBeDisplayed();
        await expect(CartPage.quantityTitle).toBeDisplayed();
        await expect(CartPage.descriptionTitle).toBeDisplayed();
        await expect(CartPage.item0Title).toBeDisplayed();
        await expect(CartPage.item0Title).toHaveText('Sauce Labs Bike Light');
        await expect(CartPage.item4Title).toBeDisplayed();
        await expect(CartPage.item4Title).toHaveText('Sauce Labs Backpack');
        await expect(CartPage.descriptionItem0).toBeDisplayed();
        await expect(CartPage.descriptionItem0).toHaveTextContaining('the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.');
        await expect(CartPage.descriptionItem4).toBeDisplayed();
        await expect(CartPage.descriptionItem4).toHaveText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        await expect(CartPage.priceItem0).toBeDisplayed();
        await expect(CartPage.priceItem0).toHaveText('$29.99');
        await expect(CartPage.priceItem4).toBeDisplayed();
        await expect(CartPage.priceItem4).toHaveText('$9.99');
        await expect(CartPage.checkOutBtn).toBeDisplayed();
        await expect(CartPage.checkOutBtn).toBeClickable();
    });

    it('should display checkout step one form and after completing it should redirect to step two', async () => {
        await CartPage.checkOutBtn.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
        await expect(CheckOutPage.pageLogo).toBeDisplayedInViewport();
        await expect(CheckOutPage.burgerMenu).toBeDisplayed();
        await expect(CheckOutPage.checkOutTitle).toBeDisplayed();
        await expect(CheckOutPage.checkOutTitle).toHaveText('CHECKOUT: YOUR INFORMATION');
        await expect(CheckOutPage.firstNameInput).toBeDisplayed();
        await expect(CheckOutPage.LastNameInput).toBeDisplayed();
        await expect(CheckOutPage.zipOrPostalCodeInput).toBeDisplayed();
        await expect(CheckOutPage.continueBtn).toBeDisplayed();
        await CheckOutPage.completeForm('Elias','Bermudez','420');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');
    });

    it('should display checkout overview step two with information and prices', async () => {
        await expect(OverviewPage.pageLogo).toBeDisplayedInViewport();
        await expect(OverviewPage.burgerMenu).toBeDisplayed();
        await expect(OverviewPage.overviewTitle).toBeDisplayed();
        await expect(OverviewPage.overviewTitle).toHaveText('CHECKOUT: OVERVIEW');
        await expect(OverviewPage.item0Title).toBeDisplayed();
        await expect(OverviewPage.item0Title).toHaveText('Sauce Labs Bike Light');
        await expect(OverviewPage.item4Title).toBeDisplayed();
        await expect(OverviewPage.item4Title).toHaveText('Sauce Labs Backpack');
        await expect(OverviewPage.descriptionItem0).toBeDisplayed();
        await expect(OverviewPage.descriptionItem4).toHaveTextContaining('the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.');
        await expect(OverviewPage.descriptionItem4).toBeDisplayed();
        await expect(OverviewPage.descriptionItem0).toHaveText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        await expect(OverviewPage.priceItem0).toBeDisplayed();
        await expect(OverviewPage.priceItem4).toHaveText('$29.99');
        await expect(OverviewPage.priceItem4).toBeDisplayed();
        await expect(OverviewPage.priceItem0).toHaveText('$9.99');
        await expect(OverviewPage.paymentInfoTitle).toBeDisplayed();
        await expect(OverviewPage.paymentInfoTitle).toHaveText('Payment Information:');
        await expect(OverviewPage.paymentInfoValue).toBeDisplayed();
        await expect(OverviewPage.paymentInfoValue).toHaveText('SauceCard #31337');
        await expect(OverviewPage.shippingInfoTitle).toBeDisplayed();
        await expect(OverviewPage.shippingInfoTitle).toHaveText('Shipping Information:');
        await expect(OverviewPage.shippingInfoValue).toBeDisplayed();
        await expect(OverviewPage.shippingInfoValue).toHaveText('FREE PONY EXPRESS DELIVERY!');
        await expect(OverviewPage.subtotalValue).toBeDisplayed();
        await expect(OverviewPage.subtotalValue).toHaveText('Item total: $39.98');
        await expect(OverviewPage.taxValue).toBeDisplayed();
        await expect(OverviewPage.taxValue).toHaveText('Tax: $3.20');
        await expect(OverviewPage.totalValue).toBeDisplayed();
        await expect(OverviewPage.totalValue).toHaveText('Total: $43.18');
        await expect(OverviewPage.finishBtn).toBeDisplayed();
    });

    it('should complete the checkout process', async () => {
        await OverviewPage.finishBtn.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html');
        await expect(CompletePage.pageLogo).toBeDisplayed();
        await expect(CompletePage.burgerMenu).toBeDisplayed();
        await expect(CompletePage.checkOutCompleteTitle).toBeDisplayed();
        await expect(CompletePage.checkOutCompleteTitle).toHaveText('CHECKOUT: COMPLETE!');
        await expect(CompletePage.completeH2).toBeDisplayed();
        await expect(CompletePage.completeH2).toHaveText('THANK YOU FOR YOUR ORDER');
        await expect(CompletePage.completeText).toBeDisplayed();
        await expect(CompletePage.completeText).toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        await expect(CompletePage.completeImg).toHaveAttr('src', '/static/media/pony-express.46394a5d.png');
        await expect(CompletePage.completeImg).toBeDisplayed();
        await expect(CompletePage.completeImg).toBeDisplayed();
        await expect(CompletePage.backHomeBtn).toBeDisplayed();
        await expect(CompletePage.backHomeBtn).toBeClickable();
    });

    it('should log out of a valid user', async () => {
        await CompletePage.backHomeBtn.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect(InventoryPage.productsBotImg).toBeDisplayed();
        await InventoryPage.burgerMenu.click();
        await expect(InventoryPage.burgerMenuLogOut).toBeDisplayed();
        await expect(InventoryPage.burgerMenuLogOut).toBeDisplayedInViewport();
        await expect(InventoryPage.burgerMenuLogOut).toBeClickable();
        await expect(InventoryPage.burgerMenuLogOut).toHaveLink('#');
        await InventoryPage.burgerMenuLogOut.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/')
        await expect(LoginPage.robotImg).toBeDisplayed();
        await expect(LoginPage.robotImg).toBeDisplayedInViewport();
        await expect(LoginPage.loginLogo).toBeDisplayedInViewport();
    });
});