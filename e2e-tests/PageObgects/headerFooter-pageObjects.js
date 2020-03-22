'use strict';

/**
 * This file contains of header and footer objects
 * @constructor
 */
const EC = protractor.ExpectedConditions;
// let GamesPage = require('./games-pageObgects.js');
let HeaderFooterPageObjects = function () {




// const EC = protractor.ExpectedConditions;
// let GamesPage = require('./games-pageObjects.js');
// let HeaderFooterPageObjects = function () {
//     let gamesPage = new GamesPage();

                                            /* Header top-line elements */

    this.userInfo = $('.profile-info .user-name');
    this.userBalance = $('.profile-info .block-count');
    this.userIcon = $('.icon.icon-user-ico');
    this.logInSignInButton = $('.header-auth .btn.btn-vl.bounce');


                                            /* Header bottom-line section elements */

    this.headerGameButton = $$('.header-menu .main-menu li ').get(0);
    this.headerVirtualSportButton = $$('.header-menu .main-menu li ').get(1);
    this.headerSportButton = $$('.header-menu .main-menu li ').get(2);
    this.headerSupportButton = $$('.header-menu .main-menu li ').get(3);
    this.headerFaqButton = $$('.header-menu .main-menu li ').get(4);
    this.headerJackpotButton = $$('.header-menu .main-menu li ').get(5);
    this.headerLogoutButton = $$('.header-menu .main-menu li ').get(6);
    this.headerSearchInput = $('#search-games-input');


    // this.gamesButton = $('[translate="frontend.links.casino_games"]');
    // this.bonusesButton = $('[translate="frontend.links.bonus"]');
    // this.racesButton = $('[translate="frontend.links.races"]');
    // this.aboutButton = $('[translate="frontend.links.about_casino"]');
    // this.headerLogo = $('#top-logo');
    // this.loginButton = $('[translate="frontend.links.sign_in"]');
    // this.signUpButton =$('[translate="frontend.links.sign_up"]');
    // this.localeSwitcher = $('.opener.btn.btn-success.btn-flat');


                                            /* Footer section elements */

    this.footerPromoContainer = $('.promo__container'); //not used in casinomacao
    this.footerPaymentMethods = $('.payment-methods'); //not used in casinomacao
    this.foooterLogoLeft = $('.footer-inner .footer-logo a'); //not used in casinomacao
    this.foooterLogoCenter = $('.footer-inner .footer-logo img'); //not used in casinomacao
    this.footerLanguageTitle = $$('.footer-menu-block .block-title').get(0);   //
    this.footerRuLanguageLink = $$('.footer-menu-block .block-title li').get(0);
    this.footerEnLanguageLink = $$('.footer-menu-block .block-title li').get(1);
    this.footerPopularLink = $$('.footer-menu-block .block-title li').get(2);
    this.footerJackpotLink = $$('.footer-menu-block .block-title li').get(3);
    this.footerAgeimage = $('.footer-bot .age-img');









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