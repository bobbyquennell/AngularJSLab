(function (){
    var app = angular.module('store', []);
    app.controller('StoreController',function(){
        // this.myproduct = gem;
        this.products = gems;
    });
    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: '...',
            canPurchase: true,
            soldOut:false,
            images: [
                {
                    full: 'dodecahedron-01-full.jpg',
                    thumb: 'dodecahedron-01-thumb.jpg'
                }
            ]
        },
        {
            name: 'Pentagonal Gem',
            price:5.95,
            description: "...",
            canPurchase: true,
            soldOut:false
        }
    ];
})();