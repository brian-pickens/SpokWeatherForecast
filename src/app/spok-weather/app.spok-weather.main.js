// styles
require('./app.spok-weather.style.scss');

// main
var angular = require('angular');
var uirouter = require('@uirouter/angularjs').default;
var ngSanitize = require('angular-sanitize');

routingConfig.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function routingConfig($stateProvider, $locationProvider, $urlRouterProvider) {

    // Remove # from url
    $locationProvider.html5Mode(true);

    // Redirects
    $urlRouterProvider.when('/', '/spok/weather');

    var states = [
        {
            name: 'app',
            url: '/spok',
            abstract: true
        },
        {
            name: 'app.weather',
            url: '/weather',
            component: 'appWeatherSearch',
            params: {
                search: ''
            },
            resolve: {}
        },
        {
            name: 'app.weather.forecast',
            url: '/{search}/forecast',
            component: 'appWeatherForecast',
            resolve: {
                forecastResults: ['$stateParams','appWeatherService', function($stateParams, appWeatherService) {
                    return appWeatherService.search($stateParams.search);
                }]
            }
        }
    ];
    states.forEach(function (state) {
        $stateProvider.state(state)
    })
}

var dependencies = [uirouter, 'ngSanitize'];
var weatherApp = angular
    .module('spok-weather', dependencies)
    .config(routingConfig)
    .service("appWeatherService", require('./services/weather-search.service'))
    .component("appWeatherSearch", require('./weather-search/weather-search.component'))
    .component("appWeatherForecast", require('./weather-forecast/weather-forecast.component'))

module.exports = weatherApp.name