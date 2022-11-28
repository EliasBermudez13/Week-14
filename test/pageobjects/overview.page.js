/**
 * sub page containing specific selectors and methods for a specific page
 */
 class overviewPage {
    /**
     * define selectors using gettter methods
     */
    get pageLogo () {
        return $('.app_logo');
    }

    get burgerMenu () {
        return $('#react-burger-menu-btn');
    }

    get overviewTitle () {
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

    get descriptionItem0 () {
        return $('//*[@id="cart_contents_container"]/div/div[1]/div[4]/div[2]/div[1]');
    }

    get descriptionItem4 () {
        return $('//*[@id="cart_contents_container"]/div/div[1]/div[3]/div[2]/div[1]');
    }

    get overviewTitle () {
        return $('.title');
    } 

    get paymentInfoTitle () {
        return $('//*[@id="checkout_summary_container"]/div/div[2]/div[1]');
    } 

    get paymentInfoValue () {
        return $('//*[@id="checkout_summary_container"]/div/div[2]/div[2]');
    }
    get shippingInfoTitle () {
        return $('//*[@id="checkout_summary_container"]/div/div[2]/div[3]');
    } 

    get shippingInfoValue () {
        return $('//*[@id="checkout_summary_container"]/div/div[2]/div[4]');
    } 

    get descriptionTitle () {
        return $('.summary_subtotal_label');
    }
    
    get overviewTitle () {
        return $('.summary_tax_label');
    } 

    get quantityTitle () {
        return $('.summary_total_label');
    } 

    get finishBtn () {
        return $('#finish');
    }

    get cancelBtn () {
        return $('#cancel');
    }
}

export default new overviewPage();