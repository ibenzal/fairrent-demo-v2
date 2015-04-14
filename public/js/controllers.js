/**
 * Created by Sandeep on 01/06/14.
 */

var fairRentControllers = angular.module('fairRentApp.controllers', []);
fairRentControllers.controller('FlatListController', function ($scope, $state, popupService, $window, Flat) {
    
    $scope.Flats = Flat.query();
    $scope.Flats.search = { type : "F" };

});
fairRentControllers.controller('FlatViewController', ['$scope', '$http','$stateParams', '$filter', 'Flat', function ($scope, $http, $stateParams, $filter, Flat) {
    
    $scope.Flat = Flat.get({ id: $stateParams.id }, function (res) {

        $scope.Flat.inflationPrice = ((res.inflation / 100) + 1) * res.price;
        $scope.Flat.fairRentPrice = $scope.Flat.inflationPrice * 0.05 / 12;
        $http.get('data/averageRent.json').success(function (data) {
            $scope.averageRentList = data[$scope.Flat.city];
            $.each($scope.averageRentList, function (key, value) {
                
                $scope.$apply(function () {
                    $scope.sizeFlat = key;
                    return false;
                });
                return false;   
            });
            
        });
        //$scope.averageRentStudio = data["Islington"]["studio"];

    });
    
    $scope.$watch('sizeFlat', function (newValue, oldValue) {
        
        if (newValue === oldValue) {
            return;
        }
        $scope.averageRent = $scope.averageRentList[newValue];
    });
    

}]);
fairRentControllers.controller('FlatCreateController', function ($scope, $state, $stateParams, Flat) {
    
    $scope.flat = new Flat();
    
    $scope.addFlat = function () {
        
        $scope.flat.$save(function () {
            $state.go('Flats');
        });
    }

});
fairRentControllers.controller('FlatEditController', function ($scope, $state, $stateParams, Flat) {
    
    $scope.updateFlat = function () {
        $scope.Flat.$update(function () {
            $state.go('Flats');
        });
    };
    
    $scope.loadFlat = function () {
        $scope.Flat = Flat.get({ id: $stateParams.id });
    };
    
    $scope.loadFlat();
});
fairRentControllers.controller('FlatSearchController', function ($scope, $state, $stateParams, Flat) {
    
    $scope.flat = new Flat();
    $scope.typeFlat = "F";
    $scope.address = "E1 2DD";

    /*$scope.searchFlat = function () {
        console.log("Address" + $scope.address);
        $scope.flat = Flat.get({ postcode: $scope.address });
        $state.go('viewFlat');
    }*/

});