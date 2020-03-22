'use strict';

/**
 * Objects of Welcome page (guest user).
 * @constructor
 */

const EC = protractor.ExpectedConditions;
let HeaderFooterPageObjects = require('./headerFooter-pageObjects.js');
let WelcomePage = function () {

    /**
     *  Header/footer section
     */
    let headerFooter = new HeaderFooterPageObjects();




                            /*  Welcome page hero section: Jackpot */


    this.heroBlock = $('.hero');
    this.jackpotBlockTitle = $$('.hero .block-title').get(0);
    this.jackpotDiamondName = $('.jackpot-link.first .jackpot-name');
    this.jackpotDiamondAmounth = $('.jackpot-link.first .money__amount__counter');
    this.jackpotGoldName = $('.jackpot-link.second .jackpot-name');
    this.jackpotGoldAmounth = $('.jackpot-link.second .money__amount__counter');
    this.jackpotSilverName = $('.jackpot-link.third .jackpot-name');
    this.jackpotSilverAmounth = $('.jackpot-link.third .money__amount__counter');
    this.jackpotBronzeName = $('.jackpot-link.fourth .jackpot-name');
    this.jackpotBronzeAmounth = $('.jackpot-link.fourth .money__amount__counter');


                            /*  Welcome page hero section: Slider */


    this.slidersSection = $('.slick-list');
    this.sliderSlide1 = $$('.slick-list .slider_slide [src="/images/banners/jackpot/banner.svg"]').get(0);
    this.sliderSlide2 = $$('.slick-list .slider_slide [src="/images/slider/815x374_1.jpg"]').get(0);
    this.sliderSlide3 = $$('.slick-list .slider_slide [src="/images/slider/815x374_3.jpg"]').get(0);
    this.sliderSlide4 = $$('.slick-list .slider_slide [src="/images/slider/815x374_4.jpg"]').get(0);
    this.sliderDot1 = $$('.slider li button').get(0);
    this.sliderDot2 = $$('.slider li button').get(1);
    this.sliderDot3 = $$('.slider li button').get(2);
    this.sliderDot4 = $$('.slider li button').get(3);
    this.blockWinnersTitle = $('.block--winners .block-title div');
    this.blockWinnersLatestItem = $$('.block--winners .block--winners-tabs_item').get(0);
    this.blockWinnersTopItem = $$('.block--winners .block--winners-tabs_item').get(1);
    this.blockWinnersItemWinner1 = $$('.block--winners .winner-list__item winner').get(0);
    this.blockWinnersItemWinner2 = $$('.block--winners .winner-list__item winner').get(1);
    this.blockWinnersItemWinner3 = $$('.block--winners .winner-list__item winner').get(2);
    this.blockWinnersItemWinner4 = $$('.block--winners .winner-list__item winner').get(3);
    this.blockWinnersItemWinner5 = $$('.block--winners .winner-list__item winner').get(4);
    this.blockWinnersItemWinner6 = $$('.block--winners .winner-list__item winner').get(5);



                            /*  Welcome page hero section: Games menu */

// Доописать объекты меню
// Доописать объекты превью игр





    //
    //
    // this.welcomeBlock = $('.welcome-block');
    // this.welcomeText = $('.sp-welcom');
    // this.welcomeBonusForFirstDepositText = $('.welcome-block h1');
    // this.welcomeFirstDepositImage = $('.welcome-block img');
    // this.welcomeWantPlayButton = $('.welcome-play');
    // /**
    //  *  Welcome-register section
    //  */
    // this.welcomeRegisterBlock = $('#welcome-register');
    // this.welcomeRegisterBlockCube_1 = $('.cube-1');
    // this.welcomeRegisterBlockCube_2 = $('.cube-2');
    // this.welcomeRegisterBlockCube_3 = $('.cube-3');
    // this.welcomeRegisterBlockCube_4 = $('.cube-4');
    // this.welcomeRegisterBlockRegistrationTitle = $('.reg-tittle');
    // this.welcomeRegisterBlockEmailInput = $('#fos_user_registration_form_email');
    // this.welcomeRegisterBlockUserNameInput = $('#fos_user_registration_form_username');
    // this.welcomeRegisterBlockPasswordInput = $('#fos_user_registration_form_plainPassword_first');
    // this.welcomeRegisterBlockConfirmPasswordInput = $('#fos_user_registration_form_plainPassword_second');
    // this.welcomeRegisterBlockCheckBox = $('.my-check.agree-term');
    // this.welcomeTermsLink = $ ('.my-check.agree-term span a');
    // this.welcomeRegisterBlockRegistrationButton = $ ('.reg-btn.disbled');
    // /**
    //  * Our bonuses section
    //  */
    // this.ourBonusesBlock = $('.w-user-bonus');
    // this.ourBonusesBlockTitle = $('#welcome-lan > section.w-user-bonus > div > h2');
    // this.ourBonusesBlockBonusItem_1 = $('#welcome-lan > section.w-user-bonus > div > div > a:nth-child(1)');
    // this.ourBonusesBlockBonusItem_2 = $('#welcome-lan > section.w-user-bonus > div > div > a:nth-child(2)');
    // this.ourBonusesBlockBonusItem_3 = $('#welcome-lan > section.w-user-bonus > div > div > a:nth-child(3)');
    // // this.ourBonusesBlockBonusItem_4 = $('#welcome-lan > section.w-user-bonus > div > div > a:nth-child(4)');
    // this.ourBonusesBlockSlotImage = $('.slot');
    // /**
    //  * Best providers section
    //  */
    // this.bestProvidesBlock = $('.best');
    // this.bestProvidesBlockTitle = $('#welcome-lan > section.best > div > h2');
    // this.bestProvidesBlockItem_1 = $$('.provider-item').get(0);
    // this.bestProvidesBlockItem_2 = $$('.provider-item').get(1);
    // this.bestProvidesBlockItem_3 = $$('.provider-item').get(2);
    // this.bestProvidesBlockItem_4 = $$('.provider-item').get(3);
    // this.bestProvidesBlockItem_5 = $$('.provider-item').get(4);
    // this.bestProvidesBlockItem_6 = $$('.provider-item').get(5);
    // this.bestProvidesBlockItem_7 = $$('.provider-item').get(6);
    // this.bestProvidesBlockItem_8 = $$('.provider-item').get(7);
    // /**
    //  * Want play section
    //  */
    // this.wantPlayBlock = $('.w-whant');
    // this.wantPlayArrow = $('.block-whant img');
    // this.wantPlayButton = $('.block-whant button');
    // this.wantPlayCoin_1 = $('.coin-1');
    // this.wantPlayCoin_2 = $('.coin-2');
    // this.wantPlayCoin_3 = $('.coin-3');
    // this.wantPlayCoin_4 = $('.coin-4');
    // this.wantPlayCoin_5 = $('.coin-5');
    // this.wantPlayCoin_6 = $('.coin-6');



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
        browser.wait(EC.visibilityOf(headerFooter.userInfo),10000)
    };
    // /**
    //  * Jump to the footer
    //  */
    // this.jumpToFooter = function () {
    //     browser.actions().click(headerFooterLogined.footerVisaImage).perform();
    // };
    // /**
    //  * Jump to the header
    //  */
    // this.jumpToHeader = function () {
    //     browser.actions().click(headerFooterLogined.footerScrollTopButton).perform();
    //     browser.wait(EC.visibilityOf(headerFooterLogined.headerLogoPravda),4000);
    // };
};

module.exports = WelcomePage;
