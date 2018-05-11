var template = require('./weather-search.template.html')
var controller = require('./weather-search.controller.js')

var component = {
    template: template,
    controller: controller,
    controllerAs: '$weatherSearch',
    bindings: {
    }
}

module.exports = component;