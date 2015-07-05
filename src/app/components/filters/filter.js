(function (angular) {
	'use.strict';
angular.module('myApp').filter('tempResults', function() {
	return function(input) {
		if (input%10===0 && input!==0){
			return ('The best popular framework according to current results');
		}
		if (input===1) '';
	};
});
})(angular);