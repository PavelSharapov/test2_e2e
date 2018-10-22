'use strict';

/**
 * This file contains of header and footer objects
 * Objects of Welcome page (new user).
 * @constructor
 */
const EC = protractor.ExpectedConditions;
let HeaderFooterPageObject = function () {

                                            /* Header section elements */

    this.gamesButton = $('[translate="frontend.links.casino_games"]');
    this.bonusesButton = $('[translate="frontend.links.bonus"]');
    this.racesButton = $('[translate="frontend.links.races"]');
    this.aboutButton = $('[translate="frontend.links.about_casino"]');
    this.headerLogo = $('#top-logo');
    this.loginButton = $('[translate="frontend.links.sign_in"]');
    this.signUpButton =$('[translate="frontend.links.sign_up"]');
    this.localeSwitcher = $('.opener.btn.btn-success.btn-flat');

                                            /* Footer section elements */

    this.contactUslLink = $('[translate="support.link"]');
    this.paymentsLink = $('[translate="payments-page.link_short"]');
    this.provabilityLink = $('[translate="provability.link"]');
    this.playSafeLink = $('[translate="play_safe.link"]');
    this.faqLink = $('[translate="faq.link"]');
    this.racesLink = $('[translate="frontend.links.races"]');
    this.thermsLink = $('[translate="terms.link_short"]');
    this.complaintsLink = $('[translate="complaints-page.link"]');
    this.partnersLink = $('[translate="partners.link"]');
    this.mobileVersionLink = $('[translate="frontend.links.mobile_version"]');

    //далее описать ярлыки под линками(не первоочередное)




                                                  /*  Actions block */
    /**
     * Get Main page
     */
    this.get = function () {

        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
        browser.driver.get(browser.baseUrl);
        this.waitForWelcomePageDownload();

    };
    /**
     * Wait for Welcome page is download
     */
    this.waitForWelcomePageDownload = function () {
        browser.wait(EC.visibilityOf(this.headerLogo),6000);
    };


};

module.exports = HeaderFooterPageObject;