var todoServices = angular.module('todoServices', ['ngResource']);

todoServices.factory('Task', ['$resource', function($resource) {
    return $resource('/tasks');
}]);
