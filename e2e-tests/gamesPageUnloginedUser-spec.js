'use strict';

/* This spec contains of functional tests of Games page for unlogined user */

        /* Написать функциональные тесты:

                0. Переход по всем разделам хедера (создать отдельо спек по каждому разделу)
                1. Нажатие на анимированную стрелку +
                2. Нажатие на стрелки слайдера (подумать, как затестить появляющийся блок и разные картинки)
                3. Нажатие превью игры в боди - вход в демоигру
                4. Работа фильтров по типу игр +
                5. Работа фильтров по провайдеру +
                6. Открытие игры при клике на игру в Джекпот блоке
                7. Открытие формы реги, при нажатии на Sign Up в Джекпот блоке
                8. Открытие соответствующей игры(1,2,3,4) в Winning Now
                9. Открытие формы реги при клике на Sign Up в блоке Secured
                10. Открытие страницы What is bitcoin
                11. Открытие игры при нажатии на Play now и Demo на превью с игрой (от 1 до 12)
                12. Показ дополнительных превью с играми по нажатию Show more games
          */


let HeaderFooterObjects = require('./PageObgects/headerFooter-pageObjects.js');
let GamePageObj = require('./PageObgects/games-pageObjects.js');
let LoginHelper = require('./Helpers/loginHelper');

describe('Test of Games page items for unlogined user:', function () {
    let hf = new HeaderFooterObjects();
    let games = new GamePageObj();
    let login = new LoginHelper();
    login.getGamesPage();
    it('should download allGames page ', function () {

        expect(games.slider.isDisplayed()).toBe(true);
        expect(browser.getCurrentUrl())
            .toEqual('https://7bitcasino.com/en/games/allGames');
    });
  /*  it('when press on animated arrow should redirect to /Bonuses page', function () {
            games.arowClick();
            expect(browser.getCurrentUrl())
                .toEqual('https://7bitcasino.com/en/bonus');
    });*/
    /*describe('Game filters section test:', function () {

            it('should filtered hits games', function () {
                hf.gamesButtonClick();
                games.hitsButtonClick();
                expect(browser.getCurrentUrl())
                    .toEqual('https://7bitcasino.com/en/games/hits');
            });
            it('should filtered slots games', function () {
                games.slotsButtonClick();
                expect(browser.getCurrentUrl())
                    .toEqual('https://7bitcasino.com/en/games/slots');
            });
            it('should filtered jackpot games', function () {
                games.jackpotGamesButtonClick();
                expect(browser.getCurrentUrl())
                    .toEqual('https://7bitcasino.com/en/games/jackpot');
            });
            it('should filtered live games', function () {
                games.liveButtonClick();
                expect(browser.getCurrentUrl())
                    .toEqual('https://7bitcasino.com/en/games/live')
            });
            it('should filtered table games', function () {
                games.tableButtonClick();
                expect(browser.getCurrentUrl())
                    .toEqual('https://7bitcasino.com/en/games/table')
            });
            it('shuold back to the allGames page', function () {
                games.allGamesButtonClick();
                expect(browser.getCurrentUrl())
                    .toEqual('https://7bitcasino.com/en/games/allGames')
            });

    });
    describe('Provider filter section test:',function () {
        let gameName = 'BLUE BEARD';
        beforeEach(function () {
            games.allGamesButtonClick();
        });
        it('should search game throught search input  ', function () {
            // browser.debugger();
            games.enterGameName(gameName);
            expect(games.gamePreviewTitle1.getText()).toEqual(gameName);
            games.gamePreviewTitle1.getText().then(function (text) {
                console.log('Searched game is: '+ text);
            });
        });
        it('should filtered Quickfire games', function () {
            games.quickfireButtonClick();
            expect(games.gamePreviewProviderTitle1.getText())
                .toEqual('QUICKFIRE');
            games.gamePreviewProviderTitle1.getText().then(function (text) {
                console.log('1 provider filter is: ' + text);
            });
        });
        it('should filtered Amatic games', function () {
            games.amaticButtonClick();
            expect(games.gamePreviewProviderTitle1.getText())
                .toEqual('AMATIC');
            games.gamePreviewProviderTitle1.getText().then(function (text) {
                console.log('2 provider filter is: ' + text);
            });
        });
        it('should filtered Betsoft games', function () {
            games.betsoftButtonClick();
            expect(games.gamePreviewProviderTitle1.getText())
                .toEqual('BSG');
            games.gamePreviewProviderTitle1.getText().then(function (text) {
                console.log('3 provider filter is: ' + text);
            });
        });
        it('should filtered Bgaming games', function () {
            games.bgamingButtonClick();
            expect(games.gamePreviewProviderTitle1.getText())
                .toEqual('BGAMING');
            games.gamePreviewProviderTitle1.getText().then(function (text) {
                console.log('4 provider filter is: ' + text);
            });
        });
        it('should filtered Ezugi games', function () {
            games.ezugiButtonClick();
            expect(games.gamePreviewProviderTitle1.getText())
                .toEqual('EZUGI');
            games.gamePreviewProviderTitle1.getText().then(function (text) {
                console.log('5 provider filter is: ' + text);
            });
        });
        it('should filtered Endorphina games', function () {
            games.endorphinaButtonClick();
            expect(games.gamePreviewProviderTitle1.getText())
                .toEqual('ENDORPHINA');
            games.gamePreviewProviderTitle1.getText().then(function (text) {
                console.log('6 provider filter is: ' + text);
            });
        });
        it('should filtered Isoftbet games', function () {
            games.isoftbetButtonClick();
            expect(games.gamePreviewProviderTitle1.getText())
                .toEqual('ISOFTBET');
            games.gamePreviewProviderTitle1.getText().then(function (text) {
                console.log('7 provider filter is: ' + text);
            });
        });
        it('should filtered Habanero games', function () {
            games.habaneroButtonClick();
            expect(games.gamePreviewProviderTitle1.getText())
                .toEqual('HABANERO');
            games.gamePreviewProviderTitle1.getText().then(function (text) {
                console.log('8 provider filter is: ' + text);
            });
        });
        it('should filtered Gameart games', function () {
            games.gameartButtonClick();
            expect(games.gamePreviewProviderTitle1.getText())
                .toEqual('GAMEART');
            games.gamePreviewProviderTitle1.getText().then(function (text) {
                console.log('9 provider filter is: ' + text);
            });
        });
        it('should filtered Mrslotty games', function () {
            games.mrslottyButtonClick();
            expect(games.gamePreviewProviderTitle1.getText())
                .toEqual('MRSLOTTY');
            games.gamePreviewProviderTitle1.getText().then(function (text) {
                console.log('10 provider filter is: ' + text);
            });
        });
        it('should filtered Belatra games', function () {
            games.belatraButtonClick();
            expect(games.gamePreviewProviderTitle1.getText())
                .toEqual('BELATRA');
            games.gamePreviewProviderTitle1.getText().then(function (text) {
                console.log('11 provider filter is: ' + text);
            });
        });
        it('should filtered Playngo games', function () {
            games.playngoButtonClick();
            expect(games.gamePreviewProviderTitle1.getText())
                .toEqual('PLAYNGO');
            games.gamePreviewProviderTitle1.getText().then(function (text) {
                console.log('12 provider filter is: ' + text);
            });
        });
        it('should filtered Thunderkick games', function () {
            games.thunderkickButtonClick();
            expect(games.noGamesBlock.getText())
                .toEqual('TRY ANOTHER SEARCH');
            games.noGamesBlock.getText().then(function (text) {
                console.log('13 provider filter is empty: ' + text);
            });
        });
        it('should filtered Pragmatic games', function () {
            games.pragmaticButtonClick();
            expect(games.noGamesBlock.getText())
                .toEqual('TRY ANOTHER SEARCH');
            games.noGamesBlock.getText().then(function (text) {
                console.log('14 provider filter is empty: ' + text);
            });
        });
        it('should filtered Yggdrasil games', function () {
            games.yggdrasilButtonClick();
            expect(games.gamePreviewProviderTitle1.getText())
                .toEqual('YGGDRASIL');
            games.gamePreviewProviderTitle1.getText().then(function (text) {
                console.log('15 provider filter is: ' + text);
            });
        });
    });*/
    describe('Jackpot section test', function () {
        it('should work sign up button in jackpot section', function () {
            games.jackpotSignUpButtonClick();
            expect(games.signUpPopup.isDisplayed()).toBe(true);
            games.signUpPopupCLose();
        });
        it('should opened Jackpot game', function () {
            games.jacpotGameClick();
            expect(games.openedJackpotGameFrame.isDisplayed()).toBe(true);
        });
    });

});








