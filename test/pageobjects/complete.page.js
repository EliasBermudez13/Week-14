/**
 * sub page containing specific selectors and methods for a specific page
 */
 class CompletePage {
    /**
     * define selectors using gettter methods
     */
    get pageLogo () {
        return $('.app_logo');
    }

    get burgerMenu () {
        return $('#react-burger-menu-btn');
    }

    get checkOutCompleteTitle () {
        return $('.title');
    } 

    get completeH2 () {
        return $('.complete-header');
    } 

    get completeText () {
        return $('.complete-text');
    } 
    
    get completeImg () {
        return $('.pony_express');
    } 

    get backHomeBtn () {
        return $('#back-to-products');
    }
}

export default new CompletePage();