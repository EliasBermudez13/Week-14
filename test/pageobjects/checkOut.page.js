/**
 * sub page containing specific selectors and methods for a specific page
 */
 class CheckOutPage {
    /**
     * define selectors using gettter methods
     */
    get pageLogo () {
        return $('.app_logo');
    }

    get burgerMenu () {
        return $('#react-burger-menu-btn');
    }

    get checkOutTitle () {
        return $('.title');
    } 

    get firstNameInput () {
        return $('input[id=first-name]');
    } 

    get LastNameInput () {
        return $('input[id=last-name]');
    } 
    
    get zipOrPostalCodeInput () {
        return $('input[id=postal-code]');
    } 

    get continueBtn () {
        return $('#continue');
    }

    get cancelBtn () {
        return $('#cancel');
    }

    async completeForm (firstName, lastName, zipCode) {
        await this.firstNameInput.setValue(firstName);
        await this.LastNameInput.setValue(lastName);
        await this.zipOrPostalCodeInput.setValue(zipCode);
        await this.continueBtn.click();
    }
}

export default new CheckOutPage();