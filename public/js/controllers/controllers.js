var todoControllers = angular.module('todoControllers', []);

todoControllers.controller('TaskList', ['$scope', 'Task', function($scope, Task) {
    $scope.tasks = Task.query();
    $scope.description = '';

    $scope.addTask = function() {
        var task = new Task({
            description: $scope.description
        });

        task.$save();

        $scope.tasks = Task.query();
        $scope.description = '';
    }
}]);
