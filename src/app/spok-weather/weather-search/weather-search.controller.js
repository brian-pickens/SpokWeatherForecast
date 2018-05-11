controller.$inject = ['$state', '$stateParams'];

function controller($state, $stateParams) {
    var $weatherSearch = this;

    $weatherSearch.search = function() {
        $state.go('app.weather.forecast', {search: $weatherSearch.searchText});
    }

    $weatherSearch.$onInit = function() {
        // init stuff
        $weatherSearch.searchText = $stateParams.search;
    }
}

module.exports = controller;