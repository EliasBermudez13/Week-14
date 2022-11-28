/**
 * sub page containing specific selectors and methods for a specific page
 */
 class InventoryPage {
    /**
     * define selectors using gettter methods
     */
    get pageLogo () {
        return $('.app_logo');
    }

    get burgerMenu () {
        return $('#react-burger-menu-btn');
    }

    get burgerMenuLogOut () {
        return $('#logout_sidebar_link');
    }

    get cart () {
        return $('#shopping_cart_container');
    }

    get cartLink () {
        return $('#shopping_cart_container > a');
    }

    get productsTitle () {
        return $('#header_container > div.header_secondary_container > span');
    }
    
    get productsBotImg () {
        return $('#header_container > div.header_secondary_container > div.peek');
    }

    get productsSort () {
        return $('#header_container > div.header_secondary_container > div.right_component > span > select');
    }

    get firstProduct () { 
        return $('#item_4_img_link > img');
    }

    get secondProduct () { 
        return $('#item_0_img_link > img');
    }
    
    get thirdProduct () { 
        return $('#item_1_img_link > img');
    }
    
    get fourthProduct () { 
        return $('#item_5_img_link > img');
    }
    
    get fiftProduct () { 
        return $('#item_2_img_link > img');
    }
    
    get sixthProduct () { 
        return $('#item_3_img_link > img');
    }

    get productPrice () { 
        return $('.inventory_item_price');
    }

    get backpackAddToCartBtn () { 
        return $('#add-to-cart-sauce-labs-backpack');
    }
   
    get lightAddToCartBtn () { 
        return $('#add-to-cart-sauce-labs-bike-light');
    }

    get shirtAddToCartBtn () { 
        return $('#add-to-cart-sauce-labs-bolt-t-shirt');
    }

    get jacketAddToCartBtn () { 
        return $('#add-to-cart-sauce-labs-fleece-jacket');
    }

    get onesieAddToCartBtn () { 
        return $('#add-to-cart-sauce-labs-onesie');
    }

    get footer () {
        return $('#page_wrapper > footer');
    } 

    get socialList () {
        return $('#page_wrapper > footer > ul');
    } 

    get socialLinkTwitter () {
        return $('#page_wrapper > footer > ul > li.social_twitter > a');
    } 

    get socialLinkFacebook () {
        return $('#page_wrapper > footer > ul > li.social_facebook > a');
    } 

    get socialLinkLinkedIn () {
        return $('#page_wrapper > footer > ul > li.social_linkedin > a');
    } 

    get footerCopyRight () {
        return $('#page_wrapper > footer > div');
    } 

    get footerBotImg () {
        return $('#page_wrapper > footer > img');
    } 

}

export default new InventoryPage();