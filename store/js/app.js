(function (){
    var app = angular.module('store', []);
    app.controller('StoreController',function(){
        this.myproduct = gem;
    });
    var gem = {
        name: 'Dodecahedron',
        price: 2.95,
        description: '...',
    };
})();