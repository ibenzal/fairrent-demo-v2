/**
 * Created by Sandeep on 01/06/14.
 */

angular.module('fairRentApp.services',[]).factory('Flat',function($resource){
    //return $resource('http://fairrent.azurewebsites.net/flat/:id',{id:'@_id'},{
    return $resource('http://fairrent-demo-v2.herokuapp.com/flat/:id', { id: '@_id' }, {
        update: {
            method: 'PUT'
        }
    });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});
/*

angular.module('fairRentApp.services', []).factory('Flat', function ($resource) {
    //return $resource('http://azureexpress01.azurewebsites.net/Flat/:id',{id:'@_id'},{
    return $resource('http://landregistry.data.gov.uk/landregistry/query', { id: '@_id' }, {
        update: {
            method: 'PUT'
        }
    });
});*/

/*angular.module('fairRentApp.services', []).factory('Flat', function ($scope, $http) {
    $http.jsonp('http://landregistry.data.gov.uk/app/hpi/qonsole/query', {
        method: 'GET',
        params: {
            query: "prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> prefix owl: <http://www.w3.org/2002/07/owl#> prefix xsd: <http://www.w3.org/2001/XMLSchema#> prefix sr: <http://data.ordnancesurvey.co.uk/ontology/spatialrelations/> prefix lrhpi: <http://landregistry.data.gov.uk/def/hpi/> prefix lrppi: <http://landregistry.data.gov.uk/def/ppi/> prefix skos: <http://www.w3.org/2004/02/skos/core#> prefix lrcommon: <http://landregistry.data.gov.uk/def/common/> SELECT ?paon ?saon ?street ?town ?county ?postcode ?amount ?date WHERE { ?transx lrppi:pricePaid ?amount ; lrppi:transactionDate ?date ; lrppi:propertyAddress ?addr. ?addr lrcommon:postcode "PL6 8RU"^^xsd:string. ?addr lrcommon:postcode ?postcode. OPTIONAL {?addr lrcommon:county ?county} OPTIONAL {?addr lrcommon:paon ?paon} OPTIONAL {?addr lrcommon:saon ?saon} OPTIONAL {?addr lrcommon:street ?street} OPTIONAL {?addr lrcommon:town ?town} } ORDER BY ?amount",
            output: 'json'
        },
        headers: { Authorization: auth }
    }).success(function (res) {
        console.log(res.data);
        $scope.data = res.data;
    });
});*/

/*phonecatServices.factory('Flat', ['$resource',
  function ($resource) {
    return $resource('http://landregistry.data.gov.uk/app/hpi/qonsole/query=:params', {}, {
        query: { method: 'GET', params: { params: 'phones' }, isArray: true }
    });
}]);*/