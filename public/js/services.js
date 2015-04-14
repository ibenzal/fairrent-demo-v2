/**
 * Created by Sandeep on 01/06/14.
 */

angular.module('fairRentApp.services',[]).factory('Flat',function($resource){
    //return $resource('http://fairrent.azurewebsites.net/flat/:id',{id:'@_id'},{
    return $resource('https://fairrent-demo-v2.herokuapp.com/flat/:id', { id: '@_id' }, {
        update: {
            method: 'PUT'
        }
    });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});
