var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'firstCtrl',
      templateUrl: 'first.html'
    })
    .when('/second', {
      controller: 'secondCtrl',
      templateUrl: 'second.html'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

app.factory('dataStorage', [function () {
  function Storage() {
    this.data = 'YES';

    this.getData = function () {
      return this.data;
    };

    this.setData = function (data) {
      this.data = data;
    }
  };

  return new Storage();
}]);

app.controller('firstCtrl', ['$scope', '$location', 'dataStorage', function ($scope, $location, dataStorage) {
  $scope.saveText = function () {
    dataStorage.setData($scope.inputText);
    $location.path('/second');
  };
}]);

app.controller('secondCtrl', ['$scope', 'dataStorage', function ($scope, dataStorage) {
  $scope.text = function () {
    return dataStorage.getData();
  };
}]);