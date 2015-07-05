angular.module('myApp')
.controller('MainController', function($scope, $timeout) {
		$scope.prefer1 = {
			name: "AngularJS",
			points:0,
			done: "Temporary results"
		};
		$scope.prefer2 = {
			name: "Backbone",
			points:0,
			done: "Temporary results"
		};
		$scope.prefer3 = {
			name: "Ember",
			points:0,
			done: "Temporary results"
		};
		
		 $scope.points1 = function() {
  	     $scope.prefer1.points += 1;
		 };
		 
		 $scope.points2 =function() {
  	     $scope.prefer2.points += 1;
		 };
		 
		 $scope.points3=function() {
  	     $scope.prefer3.points += 1;
	    };
	    
});