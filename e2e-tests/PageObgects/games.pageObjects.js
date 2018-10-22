'use strict';

// this file contains of objects for Games page

const EC = protractor.ExpectedConditions;
let HeaderFooterObj = require('headerFooter.pageObject.js');
let GamesPageObj = function () {

                                        /* Header section elements */

    let hederFooter = new HeaderFooterObj();

                                        /* Slider section elements */

    this.animatedArrow = $('.wrap.wrap__slider .arrow');
    this.slider = $('.projector');
    this.sliderNextButton = $('.button-next.button-slider');
    this.sliderPreviousButton = $('.button-previous.button-slider');
    // Подумать, как описать элементы меняющегося блока с кнопкой sign up, слева на слайдере

                                        /* Games filter section elements */

    this.hitsButton = $$('#games-collections .radiomenu__item').get(0);
    this.allGamesButton = $$('#games-collections .radiomenu__item').get(1);
    this.slotsButton = $$('#games-collections .radiomenu__item').get(2);
    this.jackpotGamesButton = $$('#games-collections .radiomenu__item').get(3);
    this.liveButton = $$('#games-collections .radiomenu__item').get(4);
    this.tableButton = $$('#games-collections .radiomenu__item').get(5);

                                         /* Provider filter section elements */

    this.gamesSearchInput = $('.games__search');
    this.quickfireButton = $('.list-group-item-link.quickfire');
    this.amaticButton = $('.list-group-item-link.amatic');
    this.betsoftButton = $('.list-group-item-link.bsg');
    this.bgamingButton = $('.list-group-item-link.bgaming');
    this.ezugiButton = $('.list-group-item-link.ezugi');
    this.endorphinaButton = $('.list-group-item-link.endorphina');
    this.isoftbetButton = $('.list-group-item-link.isoftbet');
    this.habaneroButton = $('.list-group-item-link.habanero');
    this.gameartButton = $('.list-group-item-link.gameart');
    this.mrslottyButton = $('.list-group-item-link.mrslotty');
    this.belatraButton = $('.list-group-item-link.belatra');
    this.playngoButton = $('.list-group-item-link.playngo');
    this.thunderkickButton = $('.list-group-item-link.thunderkick');
    this.pragmaticButton = $('.list-group-item-link.pragmatic');
    this.yggdrasilButton = $('.list-group-item-link.yggdrasil');

                                            /* Body leftbar section elements */

    this.jackpotBlock = $('.gradient-box');
    this.jackpotBlockSignUpButton = $('.under__heading__inner [translate="frontend.links.sign_up"]');
    this.winningNowLine1 = $$('.winner-animation').get(2);
    this.winningNowLine2 = $$('.winner-animation').get(3);
    this.winningNowLine3 = $$('.winner-animation').get(4);
    this.winningNowLine4 = $$('.winner-animation').get(5);
    this.securedBlockSignUpButton = $('.under__heading__lower');
    this.whatIsBitcoinLink = $('[translate="bitcoin.link-heading"]');

                                            /* Body games section elements */

    this.gamePrewiew1 = $$('.games__content__rightbar .image-link').get(0);
    this.gamePrewiew2 = $$('.games__content__rightbar .image-link').get(1);
    this.gamePrewiew3 = $$('.games__content__rightbar .image-link').get(2);
    this.gamePrewiew4 = $$('.games__content__rightbar .image-link').get(3);
    this.gamePrewiew5 = $$('.games__content__rightbar .image-link').get(4);
    this.gamePrewiew6 = $$('.games__content__rightbar .image-link').get(5);
    this.gamePrewiew7 = $$('.games__content__rightbar .image-link').get(6);
    this.gamePrewiew8 = $$('.games__content__rightbar .image-link').get(7);
    this.gamePrewiew9 = $$('.games__content__rightbar .image-link').get(8);
    this.gamePrewiew10 = $$('.games__content__rightbar .image-link').get(9);
    this.gamePrewiew11 = $$('.games__content__rightbar .image-link').get(10);
    this.gamePrewiew12 = $$('.games__content__rightbar .image-link').get(11);

    /* превью, которые ниже, появляются после нажатия кнопки show more games,
     попробовать использовать для определения раскрытия списка*/

    this.gamePrewiew13 = $$('.games__content__rightbar .image-link').get(12);
    this.gamePrewiew14 = $$('.games__content__rightbar .image-link').get(13);
    this.gamePrewiew15 = $$('.games__content__rightbar .image-link').get(14);
    this.showMoreGamesButton = $('[translate="common.show_more_games"]');







};