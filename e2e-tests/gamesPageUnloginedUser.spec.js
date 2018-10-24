'use strict';

/* This spec contains of functional tests of Games page for unlogined user */

        /* Написать функциональные тесты:

                0. Переход по всем разделам хедера
                1. Нажатие на анимированную стрелку
                2. Нажатие на стрелки слайдера (подумать, как затестить появляющийся блок)
                3. Работа фильтров по типу игр
                4. Работа фильтров по провайдеру
                5. Открытие игры при клике на игру в Джекпот блоке
                6. Открытие формы реги, при нажатии на Sign Up в Джекпот блоке
                7. Открытие соответствующей игры(1,2,3,4) в Winning Now
                8. Открытие формы реги при клике на Sign Up в блоке Secured
                9. Открытие страницы What is bitcoin
                10. Открытие игры при нажатии на Play now и Demo на превью с игрой (от 1 до 12)
                11. Показ дополнительных превью с играми по нажатию Show more games
          */


let HeaderFooterObjects = require('./PageObgects/headerFooter.pageObject.js');
let GamePageObj = require('./PageObgects/games.pageObjects.js');
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
    it('when press on animated arrow should redirect to /Bonuses page', function () {
            games.arowClick();
            expect(browser.getCurrentUrl())
                .toEqual('https://7bitcasino.com/en/bonus');

        describe('Game filters section test:', function () {

            it('should filtered hits games', function () {
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



        });
});
});








