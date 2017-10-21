import angular from 'angular';
import ngSanitize from 'angular-sanitize';
import sliderComponent from './components/slider.component';
import sliderPageController from './controllers/sliderPage.controller';

(function () {
    'use strict';
    angular
        .module('app', ['ngSanitize'])
        .controller('sliderPageController', sliderPageController)
        .component('sliderComponent', sliderComponent);
})();
