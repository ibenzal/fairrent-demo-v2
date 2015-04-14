/**
 * Created by Sandeep on 01/06/14.
 */

angular.module('fairRentApp',['ui.router','ngResource','fairRentApp.controllers','fairRentApp.services','fairRentApp.directives']);

angular.module('fairRentApp').config(function($stateProvider,$httpProvider){
    $stateProvider.state('Flats', {
        url: '/Flats',
        templateUrl: 'partials/Flats.html',
        controller: 'FlatListController'
    }).state('viewFlat', {
        url: '/Flats/:id/view',
        templateUrl: 'partials/Flat-view.html',
        controller: 'FlatViewController'
    }).state('newFlat', {
        url: '/Flats/new',
        templateUrl: 'partials/Flat-add.html',
        controller: 'FlatCreateController'
    }).state('editFlat', {
        url: '/Flats/:id/edit',
        templateUrl: 'partials/Flat-edit.html',
        controller: 'FlatEditController'
    });
}).run(function($state){
   $state.go('Flats');
});