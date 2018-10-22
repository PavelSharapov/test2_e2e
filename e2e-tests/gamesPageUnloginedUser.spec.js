'use strict';

/* This spec contains of functional tests of Games page for unlogined user */

        /* Написать функциональные тесты:
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


let HeaderFooterObj = require('./PageObgects/headerFooter.pageObject.js');

describe('Test for unlogined user', function () {
    let hf = new HeaderFooterObj();

    it('should present Games element', function () {

        hf.get();
        // let gamesButton = $('[translate="frontend.links.casino_games"]');
        expect(hf.gamesButton.isDisplayed()).toBe(false);

    });






});