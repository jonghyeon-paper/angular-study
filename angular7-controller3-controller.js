	angular.module('ngApp', []).controller('ngCtrl', function($scope) {
		$scope.firstName = "Jonghyeon";
		$scope.lastName = "Choi";
		$scope.fullName = function() {
			return $scope.lastName + ' ' + $scope.firstName;
		};
	});