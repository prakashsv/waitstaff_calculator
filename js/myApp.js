angular.module('myApp', [])
    .controller('MealDetailsCtrl', function($scope) {
    	$scope.data = {};
        initializeEarnings();        

    	$scope.submitForm = function(){

    		if ($scope.mealForm.$valid){
                var tax = $scope.data.mealprice * $scope.data.taxrate / 100;                
                $scope.data.subtotal = $scope.data.mealprice + tax;
                $scope.data.tip = $scope.data.mealprice * $scope.data.tippercentage / 100;
                $scope.data.total = $scope.data.subtotal + $scope.data.tip;
                $scope.earnings.tiptotal += $scope.data.tip;
                $scope.earnings.mealcount += 1;
                $scope.earnings.averagetip = $scope.earnings.tiptotal / $scope.earnings.mealcount;
            }

    		if ($scope.mealForm.$invalid)
    			alert('form not valid');
    	};

    	$scope.cancel = function(){
    		$scope.data = {};
    	};

        $scope.reset = function(){
            $scope.data = {};
            initializeEarnings();
        };

        function initializeEarnings(){
            $scope.earnings = {
                tiptotal: 0,
                mealcount: 0,
                averagetip: 0
            };
        };
	});