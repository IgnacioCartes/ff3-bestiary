angular.module('ff3-bestiary.services', [])

.factory('dataService', function($rootScope, $http) {
    
    return {
        load: function(url) {
            return $http.get(url);
        }
    };
    
});