service.$inject = ['$http'];

function service($http) {
    var api = 'https://query.yahooapis.com/v1/public/yql?q={yql}&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'
    
    function search(location) {
        var yql = `select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${location}%22)`
        var url = api.replace('{yql}', yql);
        return $http.get(url)
            .then((response) => {
                return response.data.query.results.channel.item;
            });
    }

    return {
        search: search
    }
}

module.exports = service;