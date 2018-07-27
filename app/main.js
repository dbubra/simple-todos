angular.module('todoApp', [])
  .constant('apiUrl', '/todos')
  .controller('MainCtrl', MainCtrl);

function MainCtrl($scope, $http, apiUrl) {
  var refresh = $scope.fetch = function() {
    $http.get(apiUrl).then(function(res) {
      $scope.newTodo = {completed: false};
      $scope.todos = res.data;
    });
  };

  $scope.create = function(data) {
    $http.post(apiUrl, data).then(refresh);
  };

  $scope.remove = function(todo) {
    $http.delete(apiUrl + '/' + todo.id).then(refresh);
  };

  $scope.update = function(todo) {
    $http.put(apiUrl + '/' + todo.id, todo).then(refresh);
  };
}


