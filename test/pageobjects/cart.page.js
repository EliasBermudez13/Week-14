/**
 * sub page containing specific selectors and methods for a specific page
 */
 class CartPage {
    /**
     * define selectors using gettter methods
     */
    get pageLogo () {
        return $('.app_logo');
    }

    get burgerMenu () {
        return $('#react-burger-menu-btn');
    }

    get cartTitle () {
        return $('.title');
    } 

    get quantityTitle () {
        return $('.cart_quantity_label');
    } 

    get descriptionTitle () {
        return $('.cart_desc_label');
    }
    
    get item4Title () {
        return $('#item_4_title_link');
    } 

    get item0Title () {
        return $('#item_0_title_link');
    }

    get item4Remove () {
        return $('#remove-sauce-labs-backpack');
    }

    get item0Remove () {
        return $('#remove-sauce-labs-bike-light');
    }

    get descriptionItem0 () {
        return $('//*[@id="cart_contents_container"]/div/div[1]/div[4]/div[2]/div[1]');
    }

    get descriptionItem4 () {
        return $('//*[@id="cart_contents_container"]/div/div[1]/div[3]/div[2]/div[1]');
    }

    get priceItem0 () {
        return $('//*[@id="cart_contents_container"]/div/div[1]/div[3]/div[2]/div[2]/div');
    }

    get priceItem4 () {
        return $('//*[@id="cart_contents_container"]/div/div[1]/div[4]/div[2]/div[2]/div');
    }

    get checkOutBtn () {
        return $('#checkout');
    }

    get continueShoppingBtn () {
        return $('#continue-shopping');
    }
}

export default new CartPage();