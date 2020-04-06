'use strict';

/* This spec contains of functional tests of Welcome page for unlogined user */


let HeaderFooterPageObjects = require('./PageObgects/headerFooter-pageObjects.js');
let MainPage = require('./PageObgects/mainPage-objects.js');

describe('Welcome page sections:', function () {
    let mainPage = new MainPage();
    let headerFooter = new HeaderFooterPageObjects();

    it('should open Main page', function () {
        mainPage.get();
        expect(browser.getCurrentUrl()).toEqual(browser.baseUrl);
    });
    // describe('Header top-line section: ', function () {
    //     it('should displayed User name', function () {
    //         expect(headerFooter.userInfo.isDisplayed()).toBe(true);
    //     });
    //     it('should displayed User name "Гость"', function () {
    //         expect(headerFooter.userInfo.getText()).toContain('Гость');
    //     });
    //     it('should displayed User balance', function () {
    //         expect(headerFooter.userBalance.isDisplayed()).toBe(true);
    //         // headerFooter.userBalance.getText().then(function (text) {
    //         //     console.log('ballance = ' + text);
    //         //         });
    //     });
    //     it('should displayed "FUN" word in User balance', function () {
    //         expect(headerFooter.userBalance.getText()).toContain('FUN');
    //         // headerFooter.userBalance.getText().then(function (text) {
    //         //     console.log('ballance = ' + text);
    //         //         });
    //     });
    //     it('should display user icon', function () {
    //         expect(headerFooter.userIcon.isDisplayed()).toBe(true);
    //     });
    //     it('should present Login button', function () {
    //         expect(headerFooter.logInSignInButton.isDisplayed()).toBe(true);
    //     });
    // });
    // describe('Header bottom-line section: ', function () {
    //     it('should present 12 elements in this section', function () {
    //         expect(headerFooter.allGameMenuButtons.count()).toBe(12)  // 12 items: 6 for desctop + 6 for mobile
    //     });
    //     it('should displayed "Games" button', function () {
    //         expect(headerFooter.headerGameButton.isDisplayed()).toBe(true);
    //     });
    //     it('should displayed "Virtual sport" button ', function () {
    //         expect(headerFooter.headerVirtualSportButton.isDisplayed()).toBe(true);
    //     });
    //     it('should displayed "Sport" button', function () {
    //         expect(headerFooter.headerSportButton.isDisplayed()).toBe(true);
    //     });
    //     it('should displayed "Support" button', function () {
    //         expect(headerFooter.headerSupportButton.isDisplayed()).toBe(true);
    //     });
    //     it('should displayed "FAQ" menu', function () {
    //         // debugger;
    //         expect(headerFooter.headerFaqButton.isDisplayed()).toBe(true);
    //     });
    //     it('should displayed "Jackpot" menu', function () {
    //         expect(headerFooter.headerJackpotButton.isDisplayed()).toBe(true);
    //     });
    //     it('should displayed "Search input" menu', function () {
    //         expect(headerFooter.headerSearchInput.isDisplayed()).toBe(true);
    //     });
    // });
    // describe('Hero section:', function () {
    //     it('should displayed background of hero block', function () {
    //         expect(mainPage.heroBackground.getCssValue('background-image')).toContain('https://casinomacao.bet/images/top-casino.jpg');
    //         // mainPage.heroBackground.getCssValue('background-image').then(function (attr) {
    //         //     console.log(attr)
    //         //
    //         // })
    //     });
    // describe ('Jackpot block:', function () {
    //     it('should displayed Jackpot block title ', function () {
    //         expect(mainPage.jackpotBlockTitle.isDisplayed()).toBe(true);
    //     });
    //     it('should been actual image ', function () {
    //         expect(mainPage.jackpotBlockTitle.getCssValue('background-image')).toContain('https://casinomacao.bet/images/jackpots/jp-animated.gif')
    //     });
    //     it('should present "Diamond" jp name', function () {
    //         expect(mainPage.jackpotDiamondName.isDisplayed()).toBe(true);
    //     });
    //     it('should present "Diamond" jp money amounth', function () {
    //         expect(mainPage.jackpotDiamondAmounth.isDisplayed()).toBe(true);
    //     });
    //     it('should present "GOLD" jp name', function () {
    //         expect(mainPage.jackpotGoldName.isDisplayed()).toBe(true);
    //     });
    //     it('should present "GOLD" jp money amounth', function () {
    //         expect(mainPage.jackpotGoldAmounth.isDisplayed()).toBe(true);
    //     });
    //     it('should present "SILVER" jp name', function () {
    //         expect(mainPage.jackpotSilverName.isDisplayed()).toBe(true);
    //     });
    //     it('should present "SILVER" jp money amounth', function () {
    //         expect(mainPage.jackpotSilverAmounth.isDisplayed()).toBe(true);
    //     });
    //     it('should present "BRONZE" jp name', function () {
    //         expect(mainPage.jackpotBronzeName.isDisplayed()).toBe(true);
    //     });
    //     it('should present "BRONZE" jp money amounth', function () {
    //         expect(mainPage.jackpotBronzeAmounth.isDisplayed()).toBe(true);
    //     });
    // });
    describe('Slider block:', function () {
        it('should slick list is present', function () {
            expect(mainPage.slidersSection.isDisplayed()).toBe(true);
        });
        it('should present actual 1st slide', function () {
            mainPage.secondDotPress() ;
            expect(mainPage.sliderSlide1.isDisplayed()).toBe(true);
            mainPage.sliderSlide1Visible.getAttribute('aria-hidden').then(function (link) {
                console.log(link)
                }

            )
        });

    });



// дописать тесты hero: jackpot+slider+winners
// дописать тесты game menu
// дописать тесты body
// дописать тесты footer


        // it('should displayed header Game menu ', function () {
        //     headerFooter.headerMenuGameButton.getText().then(function (text) {
        //         console.log(text);
        //     });
        // });


//
//
//
//
//
//
//
//
//
//
//
//
//
//         it('should present "Base url" link at Pravda logo in header ', function () {
//             expect(headerFooter.headerLogoPravda.getAttribute('href'))
//                 .toEqual(browser.baseUrl);
//         });
//         it('should displayed "Games" button in header', function () {
//             expect(headerFooter.headerAllGamesItem.isDisplayed()).toBe(true);
//         });
//         it('should present "/games" link at Game button ', function () {
//             expect(headerFooter.headerAllGamesItem.getAttribute('href'))
//                 .toEqual(browser.baseUrl + '/games');
//         });
//         it('should displayed "Jackpot" button in header', function () {
//             expect(headerFooter.headerJackpotItem.isDisplayed()).toBe(true);
//         });
//         it('should present INPROGRESS "/#" link at Jackpot button ', function () {
//             expect(headerFooter.headerJackpotItem.getAttribute('href'))
//                 .toEqual(browser.baseUrl + '#');
//         });
//         it('should displayed "Wallets" button in header', function () {
//             expect(headerFooter.headerKassaItem.isDisplayed()).toBe(true);
//         });
//         it('should present "/user/wallets" link at Wallets button  ', function () {
//             expect(headerFooter.headerKassaItem.getAttribute('href'))
//                 .toEqual(browser.baseUrl + '/user/wallets');
//         });
//         it('should displayed "Bonuses" button in header', function () {
//             expect(headerFooter.headerBonusesInfoItem.isDisplayed()).toBe(true);
//         });
//         it('should present "/bonus-info" link at Bonuses button ', function () {
//             expect(headerFooter.headerBonusesInfoItem.getAttribute('href'))
//                 .toEqual(browser.baseUrl + '/bonus-info');
//         });
//         it('should displayed "Tournaments" button in header', function () {
//             expect(headerFooter.headerTournamentsItem.isDisplayed()).toBe(true);
//         });
//         it('should present INPROGRESS "/#" link at Tournamens button', function () {
//             expect(headerFooter.headerTournamentsItem.getAttribute('href'))
//                 .toEqual(browser.baseUrl + '#');
//         });
//         it('should displayed "Login" button in header', function () {
//             expect(headerFooter.headerLoginButton.isDisplayed()).toBe(true);
//         });
//         it('should displayed subtext on Login button in header', function () {
//             expect(headerFooter.headerLoginButtonSubText.isDisplayed()).toBe(true);
//         });
//         it('should displayed "Registration" button in header', function () {
//             expect(headerFooter.headerRegisterButton.isDisplayed()).toBe(true);
//         });
//         it('should displayed "Welcome bonus" button in header', function () {
//             expect(headerFooter.headerWelcomeBonusButton.isDisplayed()).toBe(true);
//         });
//     });
//     describe('Welcome landing section:', function () {
//         it('should displayed Welcome block', function () {
//             expect(mainPage.welcomeBlock.isDisplayed()).toBe(true);
//         });
//         it('should displayed "WELCOME" text', function () {
//             expect(mainPage.welcomeText.isDisplayed()).toBe(true);
//         });
//         it('should displayed "First deposit bonus" text', function () {
//             expect(mainPage.welcomeBonusForFirstDepositText.isDisplayed()).toBe(true);
//         });
//         it('should displayed  "100%"  image', function () {
//             expect(mainPage.welcomeFirstDepositImage.isDisplayed()).toBe(true);
//         });
//         it('should displayed "Want play" button', function () {
//             expect(mainPage.welcomeWantPlayButton.isDisplayed()).toBe(true);
//         });
//     });
//     describe('Register section:', function () {
//         it('register block is displayed',function () {
//             expect(mainPage.welcomeRegisterBlock.isDisplayed()).toBe(true);
//         });
//         it('cube-1 should displayed',function () {
//             expect(mainPage.welcomeRegisterBlockCube_1.isDisplayed()).toBe(true);
//         });
//         it('cube-2 should displayed',function () {
//             expect(mainPage.welcomeRegisterBlockCube_2.isDisplayed()).toBe(true);
//         });
//         it('cube-3 should displayed',function () {
//             expect(mainPage.welcomeRegisterBlockCube_3.isDisplayed()).toBe(true);
//         });
//         it('cube-4 should displayed',function () {
//             expect(mainPage.welcomeRegisterBlockCube_4.isDisplayed()).toBe(true);
//         });
//         it('should displayed "Registration" title',function () {
//              expect(mainPage.welcomeRegisterBlockRegistrationTitle.isDisplayed()).toBe(true);
//         });
//         it('should displayed "Email" input',function () {
//              expect(mainPage.welcomeRegisterBlockEmailInput.isDisplayed()).toBe(true);
//         });
//         it('should displayed "Username" input',function () {
//             expect(mainPage.welcomeRegisterBlockUserNameInput.isDisplayed()).toBe(true);
//         });
//         it('should displayed "Password" input',function () {
//             expect(mainPage.welcomeRegisterBlockPasswordInput.isDisplayed()).toBe(true);
//         });
//         it('should displayed "Confirm password" input',function () {
//             expect(mainPage.welcomeRegisterBlockConfirmPasswordInput.isDisplayed()).toBe(true);
//         });
//         it('should displayed Agreement checkbox',function () {
//             expect(mainPage.welcomeRegisterBlockCheckBox.isDisplayed()).toBe(true);
//         });
//         it('should displayed Terms and conditions link',function () {
//             expect(mainPage.welcomeTermsLink.isDisplayed()).toBe(true);
//         });
//         it('should present "/page/terms" link ', function () {
//             expect(mainPage.welcomeTermsLink.getAttribute('href'))
//                 .toEqual(browser.baseUrl + '/page/terms');
//         });
//         it('should displayed "Registration" button',function () {
//             expect(mainPage.welcomeRegisterBlockRegistrationButton.isDisplayed()).toBe(true);
//         });
//     });
//     describe('Our bonuses section:',function () {
//         it('Our bonuses block should displayed',function () {
//            expect(mainPage.ourBonusesBlock.isDisplayed()).toBe(true);
//         });
//         it('Our bonuses block title should displayed',function () {
//             expect(mainPage.ourBonusesBlockTitle.isDisplayed()).toBe(true);
//         });
//         it('"Bonus item 1" should displayed',function () {
//             expect(mainPage.ourBonusesBlockBonusItem_1.isDisplayed()).toBe(true);
//            /* mainPage.ourBonusesBlockBonusItem_1.getText().then(function (text) {
//                 console.log (text);
//             });*/
//         });
//         it('should present "/bonus-info" link at Bonus item 1 ', function () {
//             expect(mainPage.ourBonusesBlockBonusItem_1.getAttribute('href'))
//                 .toEqual(browser.baseUrl + '/bonus-info');
//         });
//         it('"Bonus item 2" should displayed',function () {
//             expect(mainPage.ourBonusesBlockBonusItem_2.isDisplayed()).toBe(true);
//         });
//         it('should present "/bonus-info" link at Bonus item 2 ', function () {
//             expect(mainPage.ourBonusesBlockBonusItem_2.getAttribute('href'))
//                 .toEqual(browser.baseUrl + '/bonus-info');
//         });
//         it('"Bonus item 3" should displayed',function () {
//             expect(mainPage.ourBonusesBlockBonusItem_3.isDisplayed()).toBe(true);
//         });
//         it('should present "/bonus-info" link at Bonus item 3 ', function () {
//             expect(mainPage.ourBonusesBlockBonusItem_3.getAttribute('href'))
//                 .toEqual(browser.baseUrl + '/bonus-info');
//         });
//         /*it('"Bonus item 4" should displayed',function () {
//             expect(mainPage.c.isDisplayed()).toBe(true);
//         });*/
//         it('Should displayed Slot picture ',function () {
//             expect(mainPage.ourBonusesBlockSlotImage.isDisplayed()).toBe(true);
//         });
//     });
//     describe('Best providers section:',function () {
//         it('Best providers block should displayed', function () {
//             expect(mainPage.bestProvidesBlock.isDisplayed()).toBe(true);
//         });
//         it('Best providers block title should displayed',function () {
//             expect(mainPage.bestProvidesBlockTitle.isDisplayed()).toBe(true);
//         });
//         it('should displayed Best provider item 1 ',function () {
//             expect(mainPage.bestProvidesBlockItem_1.isDisplayed()).toBe(true);
//         });
//         it('should present "/games/netent" link at provider item 1 ', function () {
//             expect(mainPage.bestProvidesBlockItem_1.getAttribute('href'))
//                 .toEqual(browser.baseUrl + '/games/netent');
//             /*mainPage.bestProvidesBlockItem_1.getText().then(function (providerName) {
//                 console.log(providerName);
//             });*/
//         });
//         it('should displayed Best provider item 2 ',function () {
//             expect(mainPage.bestProvidesBlockItem_2.isDisplayed()).toBe(true);
//         });
//         it('should present "/games/microgaming" link at provider item 2 ', function () {
//             expect(mainPage.bestProvidesBlockItem_2.getAttribute('href'))
//                 .toEqual(browser.baseUrl + '/games/microgaming');
//         });
//         it('should displayed Best provider item 3 ',function () {
//             expect(mainPage.bestProvidesBlockItem_3.isDisplayed()).toBe(true);
//         });
//         it('should present "/games/amatic" link at provider item 3 ', function () {
//             expect(mainPage.bestProvidesBlockItem_3.getAttribute('href'))
//                 .toEqual(browser.baseUrl + '/games/amatic');
//         });
//         it('should displayed Best provider item 4 ',function () {
//             expect(mainPage.bestProvidesBlockItem_4.isDisplayed()).toBe(true);
//         });
//         it('should present "/games/novomatic" link at provider item 4 ', function () {
//             expect(mainPage.bestProvidesBlockItem_4.getAttribute('href'))
//                 .toEqual(browser.baseUrl + '/games/novomatic');
//         });
//         it('should displayed Best provider item 5 ',function () {
//             expect(mainPage.bestProvidesBlockItem_5.isDisplayed()).toBe(true);
//         });
//         it('should present "/games/aristocrat" link at provider item 5 ', function () {
//             expect(mainPage.bestProvidesBlockItem_5.getAttribute('href'))
//                 .toEqual(browser.baseUrl + '/games/aristocrat');
//         });
//         it('should displayed Best provider item 6 ',function () {
//             expect(mainPage.bestProvidesBlockItem_6.isDisplayed()).toBe(true);
//         });
//         it('should present "/games/egt" link at provider item 6 ', function () {
//             expect(mainPage.bestProvidesBlockItem_6.getAttribute('href'))
//                 .toEqual(browser.baseUrl + '/games/egt');
//         });
//         it('should displayed Best provider item 7 ',function () {
//             expect(mainPage.bestProvidesBlockItem_7.isDisplayed()).toBe(true);
//         });
//         it('should present "/games/igt" link at provider item 7 ', function () {
//             expect(mainPage.bestProvidesBlockItem_7.getAttribute('href'))
//                 .toEqual(browser.baseUrl + '/games/igt');
//         });
//         it('should displayed Best provider item 8 ',function () {
//             expect(mainPage.bestProvidesBlockItem_8.isDisplayed()).toBe(true);
//         });
//         it('should present "/games/igt" link at provider item 8 ', function () {
//             expect(mainPage.bestProvidesBlockItem_8.getAttribute('href'))
//                 .toEqual(browser.baseUrl + '/games/igrosoft');
//         });
//     });
//     describe('"Want to play" section:', function () {
//         it('should displayed w-whant block', function () {
//            expect(mainPage.wantPlayBlock.isDisplayed()).toBe(true);
//         });
//         it('should displayed want play block arrow', function () {
//            expect(mainPage.wantPlayArrow.isDisplayed()).toBe(true);
//         });
//         it('should displayed "Want play" button', function () {
//            expect(mainPage.wantPlayButton.isDisplayed()).toBe(true);
//         });
//         it('coin_1 should displayed', function () {
//             expect(mainPage.wantPlayCoin_1.isDisplayed()).toBe(true);
//         });
//         it('coin_2 should displayed', function () {
//             expect(mainPage.wantPlayCoin_2.isDisplayed()).toBe(true);
//         });
//         it('coin_3 should displayed', function () {
//             expect(mainPage.wantPlayCoin_3.isDisplayed()).toBe(true);
//         });
//         it('coin_4 should displayed', function () {
//             expect(mainPage.wantPlayCoin_4.isDisplayed()).toBe(true);
//         });
//         it('coin_5 should displayed', function () {
//             expect(mainPage.wantPlayCoin_5.isDisplayed()).toBe(true);
//         });
//         it('coin_6 should displayed', function () {
//             expect(mainPage.wantPlayCoin_6.isDisplayed()).toBe(true);
//         });
//     });
//     describe('Footer section:', function () {
//         it('should displayed Footer-top block',function () {
//             expect(headerFooter.footerTopBlock.isDisplayed()).toBe(true);
//         });
//         it('should displayed Footer-bottom block',function () {
//             expect(headerFooter.footerBottomBlock.isDisplayed()).toBe(true);
//         });
//         it('should displayed footer logo', function () {
//             expect(headerFooter.footerLogo.isDisplayed()).toBe(true);
//         });
//         it('should displayed "Contacts" item ',function () {
//             expect(headerFooter.footerContactsLink.isDisplayed()).toBe(true);
//         });
//         it('should present "/contacts" link at Contacts item ', function () {
//             expect(headerFooter.footerContactsLink.getAttribute('href'))
//                 .toEqual(browser.baseUrl + '/contacts');
//         });
//         it('should displayed "Methods" item ',function () {
//             expect(headerFooter.footerMethodsLink.isDisplayed()).toBe(true);
//         });
//         it('should present "/payment/methods" link at Methods item ', function () {
//             expect(headerFooter.footerMethodsLink.getAttribute('href'))
//                 .toEqual(browser.baseUrl + '/payment/methods');
//         });
//         it('should displayed "Terms" item ',function () {
//             expect(headerFooter.footerTermsLink.isDisplayed()).toBe(true);
//         });
//         it('should present "/page/terms" link at Terms item ', function () {
//             expect(headerFooter.footerTermsLink.getAttribute('href'))
//                 .toEqual(browser.baseUrl + '/page/terms');
//         });
//         it('should displayed "Security" item ',function () {
//             expect(headerFooter.footerSecurityLink.isDisplayed()).toBe(true);
//         });
//         it('should present "/page/security" link at Security item ', function () {
//             expect(headerFooter.footerSecurityLink.getAttribute('href'))
//                 .toEqual(browser.baseUrl + '/page/security');
//         });
//         it('should displayed "FAQ" item ',function () {
//             expect(headerFooter.footerFaqLink.isDisplayed()).toBe(true);
//         });
//         it('should present "/page/faq" link at Faq item ', function () {
//             expect(headerFooter.footerFaqLink.getAttribute('href'))
//                 .toEqual(browser.baseUrl + '/page/faq');
//         });
//         it('should displayed "Terms and Conditions" item ',function () {
//             expect(headerFooter.footerBonusTermsLink.isDisplayed()).toBe(true);
//         });
//         it('should present "/page/bonus-terms" link at Terms and Conditions item ', function () {
//             expect(headerFooter.footerBonusTermsLink.getAttribute('href'))
//                 .toEqual(browser.baseUrl + '/page/bonus-terms');
//         });
//         it('should displayed "Affiliates" item and contain link',function () {
//             expect(headerFooter.footerAffiliatesLink.isDisplayed()).toBe(true);
//         });
//         it('should present "https://truthaffiliate.com/" link at Affiliates item ', function () {
//             expect(headerFooter.footerAffiliatesLink.getAttribute('href'))
//                 .toEqual('https://truthaffiliate.com/');
//         });
//         it('should displayed Conditions text left block',function () {
//             expect(headerFooter.footerConditionsLeftBlock.isDisplayed()).toBe(true);
//         });
//         it('should displayed Conditions text right block',function () {
//             expect(headerFooter.footerConditionsRightBlock.isDisplayed()).toBe(true);
//         });
//         it('should displayed "/bonus" link in the Conditions text right block ',function () {
//             expect(headerFooter.footerConditionsRightBlockBonusLink.getAttribute('href'))
//                 .toEqual(browser.baseUrl + '/bonus-info');
//         });
//         it('should displayed "/games" link in the Conditions text right block',function () {
//             expect(headerFooter.footerConditionsRightBlockChoiseGameLink.getAttribute('href'))
//                 .toEqual(browser.baseUrl + '/games');
//         });
//         it('should displayed "Bitcoin" image ',function () {
//             expect(headerFooter.footerBitcoinImage.isDisplayed()).toBe(true);
//         });
//         it('should displayed "Cubits" image ',function () {
//             expect(headerFooter.footerCubitsImage.isDisplayed()).toBe(true);
//         });
//         it('should displayed "Maestro" image ',function () {
//             expect(headerFooter.footerMaestroImage.isDisplayed()).toBe(true);
//         });
//         it('should displayed "Qiwi wallet" image ',function () {
//             expect(headerFooter.footerQiwiWalletImage.isDisplayed()).toBe(true);
//         });
//         it('should displayed "Mastercard" image ',function () {
//             expect(headerFooter.footerMasterCardImage.isDisplayed()).toBe(true);
//         });
//         it('should displayed "Visa" image ',function () {
//             expect(headerFooter.footerVisaImage.isDisplayed()).toBe(true);
//         });
//         it('should displayed "Wirecard" image ',function () {
//             expect(headerFooter.footerWirecardImage.isDisplayed()).toBe(true);
//             /*headerFooter.footerWirecardImage.getAttribute('src').then(function (img) {
//                 console.log(img);
//             });*/
//         });
//         it('should displayed scroll-top buton',function () {
//             headerFooter.jumpToFooter();
//             expect(headerFooter.footerScrollTopButton.isDisplayed()).toBe(true);
//
//         });

});









