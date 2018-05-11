var template = require('./weather-forecast.template.html')
var controller = require('./weather-forecast.controller.js')

var component = {
    template: template,
    controller: controller,
    controllerAs: '$weatherForecast',
    bindings: {
        forecastResults: '<'
    }
}

module.exports = component;