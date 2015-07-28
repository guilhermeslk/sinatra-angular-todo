var todoControllers = angular.module('todoControllers', []);

todoControllers.controller('TaskList', ['$scope', 'Task', function($scope, Task) {
    $scope.tasks = Task.query();
}]);
