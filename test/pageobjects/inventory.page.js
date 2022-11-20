/**
 * sub page containing specific selectors and methods for a specific page
 */
 class InventoryPage {
    /**
     * define selectors using getter methods
     */
    get pageLogo () {
        return $('.app_logo');
    }

    get burgerMenu () {
        return $('#react-burger-menu-btn');
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

    get productsSort () {
        return $('#header_container > div.header_secondary_container > div.right_component > span > select');
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