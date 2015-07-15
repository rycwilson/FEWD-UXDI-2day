(function() {

  console.log('js loaded');

  var app = angular.module('grid', []);

  app.controller('MainCtrl', ['$scope', function ($scope) {

    var squares = new Array(111);
    for (var i = 0; i < squares.length; i++) {
      squares[i] = "";
    }

  }]);

})();