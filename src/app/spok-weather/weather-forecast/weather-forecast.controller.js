controller.$inject = [];

function controller() {
    $weatherForecast = this;
    
    $weatherForecast.$onInit = () => {
        // Remove CDATA bits from description
        $weatherForecast.forecast = $weatherForecast.forecastResults.description
            .replace(/(?:<!\[CDATA\[)|(?:\]\]>)/g, "");
    }
}

module.exports = controller;