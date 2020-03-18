'use strict';

/**
 * This file contains of header and footer objects
 * Objects of Welcome page (new user).
 * @constructor
 */
const EC = protractor.ExpectedConditions;
// let GamesPage = require('./games-pageObgects.js');
let HeaderFooterPageObjects = function () {




// const EC = protractor.ExpectedConditions;
// let GamesPage = require('./games-pageObjects.js');
// let HeaderFooterPageObjects = function () {
//     let gamesPage = new GamesPage();

                                            /* Header top section elements */

    this.userInfo = $('.profile-info .user-name');
    this.userBalance = $('.profile-info .block-count');
    this.userIcon = $('.icon.icon-user-ico');
    this.logInSignInButton = $('.header-auth .btn.btn-vl.bounce');


                                            /* Header bottom section elements */

    this.headerMenuGameButton = $$('.header-menu .main-menu ').get(0);


    // this.gamesButton = $('[translate="frontend.links.casino_games"]');
    // this.bonusesButton = $('[translate="frontend.links.bonus"]');
    // this.racesButton = $('[translate="frontend.links.races"]');
    // this.aboutButton = $('[translate="frontend.links.about_casino"]');
    // this.headerLogo = $('#top-logo');
    // this.loginButton = $('[translate="frontend.links.sign_in"]');
    // this.signUpButton =$('[translate="frontend.links.sign_up"]');
    // this.localeSwitcher = $('.opener.btn.btn-success.btn-flat');


                                            /* Footer section elements */

    // this.contactUslLink = $('[translate="support.link"]');
    // this.paymentsLink = $('[translate="payments-page.link_short"]');
    // this.provabilityLink = $('[translate="provability.link"]');
    // this.playSafeLink = $('[translate="play_safe.link"]');
    // this.faqLink = $('[translate="faq.link"]');
    // this.racesLink = $('[translate="frontend.links.races"]');
    // this.thermsLink = $('[translate="terms.link_short"]');
    // this.complaintsLink = $('[translate="complaints-page.link"]');
    // this.partnersLink = $('[translate="partners.link"]');
    // this.mobileVersionLink = $('[translate="frontend.links.mobile_version"]');

    //далее описать ярлыки под линками(не первоочередное)

                                                        /*  Actions block */

 // // get Games page
 //    this.gamesButtonClick = function () {
 //        browser.actions().click(this.gamesButton).perform();
 //        browser.wait(EC.visibilityOf(gamesPage.slider),4000);
 //    };



};

module.exports = HeaderFooterPageObjects;