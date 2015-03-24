var app = angular.module('myApp', []);

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

app.controller('firstCtrl', ['$scope', 'dataStorage', function ($scope, dataStorage) {
  $scope.saveText = function () {
    dataStorage.setData($scope.inputText);
  };
}]);

app.controller('secondCtrl', ['$scope', 'dataStorage', function ($scope, dataStorage) {
  $scope.text = function () {
    return dataStorage.getData();
  };
}]);