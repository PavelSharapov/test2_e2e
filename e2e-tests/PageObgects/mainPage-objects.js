'use strict';

/**
 * Objects of Main page (guest user).
 * @constructor
 */

const EC = protractor.ExpectedConditions;
let HeaderFooterPageObjects = require('./headerFooter-pageObjects.js');
let MainPage = function () {

    /**
     *  Header/footer section
     */
    let headerFooter = new HeaderFooterPageObjects();




                            /*  Main page hero section: Jackpot */


    this.heroBackground = $('.hero');
    this.jackpotBlockTitle = $$('.hero .block-title').get(0);
    this.jackpotDiamondName = $('.jackpot-link.first .jackpot-name');
    this.jackpotDiamondAmounth = $('.jackpot-link.first .money__amount__counter');
    this.jackpotGoldName = $('.jackpot-link.second .jackpot-name');
    this.jackpotGoldAmounth = $('.jackpot-link.second .money__amount__counter');
    this.jackpotSilverName = $('.jackpot-link.third .jackpot-name');
    this.jackpotSilverAmounth = $('.jackpot-link.third .money__amount__counter');
    this.jackpotBronzeName = $('.jackpot-link.fourth .jackpot-name');
    this.jackpotBronzeAmounth = $('.jackpot-link.fourth .money__amount__counter');


                            /*  Main page hero section: Slider */


    this.slidersSection = $('.slick-list');
    this.sliderSlideIsActive = $('.slick-slide.slick-active.slick-current');
    this.sliderSlide1image = $$('.slick-list .slider_slide [src="/images/banners/jackpot/banner.svg"]').get(0);
    this.sliderSlide2image = $$('.slick-list .slider_slide [src="/images/slider/815x374_1.jpg"]').get(0);
    this.sliderSlide3image = $$('.slick-list .slider_slide [src="/images/slider/815x374_3.jpg"]').get(0);
    this.sliderSlide4image = $$('.slick-list .slider_slide [src="/images/slider/815x374_4.jpg"]').get(0);
    this.sliderDot1 = $$('.slider li button').get(0);
    this.sliderDot2 = $$('.slider li button').get(1);
    this.sliderDot3 = $$('.slider li button').get(2);
    this.sliderDot4 = $$('.slider li button').get(3);

                            /*  Main page hero section: Winners block */

    this.blockWinnersTitle = $('.block--winners .block-title div');
    this.blockWinnersLatestItem = $$('.block--winners .block--winners-tabs_item').get(0);
    this.blockWinnersTopItem = $$('.block--winners .block--winners-tabs_item').get(1);
    this.blockWinnersItemWinner1 = $$('.block--winners .winner-list__item winner').get(0);
    this.blockWinnersItemWinner2 = $$('.block--winners .winner-list__item winner').get(1);
    this.blockWinnersItemWinner3 = $$('.block--winners .winner-list__item winner').get(2);
    this.blockWinnersItemWinner4 = $$('.block--winners .winner-list__item winner').get(3);
    this.blockWinnersItemWinner5 = $$('.block--winners .winner-list__item winner').get(4);
    this.blockWinnersItemWinner6 = $$('.block--winners .winner-list__item winner').get(5);



                            /*  Main page: Games games menu */


    this.allGamesMenuButton = $$('.content-navi--horizontal-submenu ul li').get(0);
    this.newGamesMenuButton = $$('.content-navi--horizontal-submenu ul li').get(1);
    this.popularGamesMenuButton = $$('.content-navi--horizontal-submenu ul li').get(2);
    this.kenoGamesMenuButton = $$('.content-navi--horizontal-submenu ul li').get(3);
    this.liveGamesMenuButton = $$('.content-navi--horizontal-submenu ul li').get(4);
    this.suppliersGamesMenuButton = $$('.content-navi--horizontal-submenu ul li').get(5);
    this.tableGamesMenuButton = $$('.content-navi--horizontal-submenu ul li').get(6);
    this.lotteryGamesMenuButton = $$('.content-navi--horizontal-submenu ul li').get(7);


                            /*  Main page: Games preview blocks */

    this.gamePreview1 = $$('.games-list .game-item__img-container ').get(0);
    this.gamePreview2 = $$('.games-list .game-item__img-container ').get(1);
    this.gamePreview3 = $$('.games-list .game-item__img-container ').get(2);
    this.gamePreview4 = $$('.games-list .game-item__img-container ').get(3);
    this.gamePreview5 = $$('.games-list .game-item__img-container ').get(4);
    this.gamePreview6 = $$('.games-list .game-item__img-container ').get(5);
    this.gamePreview7 = $$('.games-list .game-item__img-container ').get(6);
    this.gamePreview8 = $$('.games-list .game-item__img-container ').get(7);
    this.gamePreview9 = $$('.games-list .game-item__img-container ').get(8);
    this.gamePreview10 = $$('.games-list .game-item__img-container ').get(9);
        /* для показательного теста достаточно 10 превьюх,
    для полного теста прописываем все превью и смотрим в тесте на айди игр и линк */






                                                 /*  Actions block */

    /**
     * Get Main page
     */

    this.get = function () {


        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
        browser.driver.get(browser.baseUrl);
        this.waitForMainPageDownload();
    };

    /**
     *  Display(active) a different slides
     */

    this.firstDotPress = function () {
        browser.actions().click(this.sliderDot1).perform();
        browser.wait(EC.visibilityOf(this.sliderSlide),10000);
    };
    this.secondDotPress = function () {
        browser.actions().click(this.sliderDot2).perform();
        browser.wait(EC.visibilityOf(this.sliderSlideIsActive),10000);
    };
    this.thirdDotPress = function () {
        browser.actions().click(this.sliderDot3).perform();
        browser.wait(EC.visibilityOf(this.sliderSlideIsActive),3000);
    };
    this.fourthDotPress = function () {
        browser.actions().click(this.sliderDot4).perform();
        browser.wait(EC.visibilityOf(this.sliderSlideIsActive),3000);
    };





    /**
     * Wait for Main page is download
     */
    this.waitForMainPageDownload = function () {
        browser.wait(EC.visibilityOf(headerFooter.userInfo),10000);
        browser.wait(EC.visibilityOf(this.gamePreview1),10000)
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

module.exports = new MainPage(); // создание глобального хранилища и экспорт в него объектов
