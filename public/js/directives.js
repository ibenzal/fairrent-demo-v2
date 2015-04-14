/**
 * Created by Sandeep on 01/06/14.
 */
angular.module('fairRentApp.directives', [])
.directive('geocomplete', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            $(element).geocomplete({
                country: 'uk'
        });
        }
    };
});