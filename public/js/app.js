/**
 * Created by Sandeep on 01/06/14.
 */

angular.module('fairRentApp',['ui.router','ngResource','fairRentApp.controllers','fairRentApp.services','fairRentApp.directives']);

angular.module('fairRentApp').config(function($stateProvider,$httpProvider){
    $stateProvider.state('Flats', {
        url: '/Flats',
        templateUrl: 'partials/flats.html',
        controller: 'FlatListController'
    }).state('viewFlat', {
        url: '/Flats/:id/view',
        templateUrl: 'partials/flat-view.html',
        controller: 'FlatViewController'
    }).state('newFlat', {
        url: '/Flats/new',
        templateUrl: 'partials/flat-add.html',
        controller: 'FlatCreateController'
    }).state('editFlat', {
        url: '/Flats/:id/edit',
        templateUrl: 'partials/flat-edit.html',
        controller: 'FlatEditController'
    });
}).run(function($state){
   $state.go('Flats');
});