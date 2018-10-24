'use strict';


/**
 * This file contains of header and footer objects
 * Objects of Welcome page (new user).
 * @constructor
 */
const EC = protractor.ExpectedConditions;
let HeaderFooterObj = require('../PageObgects/headerFooter.pageObject.js');
let LoginHelper = function () {

    /* Header section elements */
    let hf = new HeaderFooterObj();


                                             /*  Actions block */
    /**
     * Get Main page
     */
    this.getGamesPage = function () {

        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
        browser.driver.get(browser.baseUrl);
        this.waitForGamesPageDownload();


    };
    /**
     * Wait for Welcome page is download
     */
    this.waitForGamesPageDownload = function () {
        browser.wait(EC.visibilityOf(hf.headerLogo),);
    };
    /**
     * alert close
     */
    /*this.alertClose = function() {
        /!*browser.switchTo().alert().then(
        function (alert) { alert.dismiss(); },
        // function (err) { }
    );*!/
        browser.switchTo().alert().dismiss();*/



};
module.exports = LoginHelper;