//(function(angular) {
    angular.module('invoice1',['finance'])
    .controller('InvoiceController',['currencyConverter', function(currencyConverter){
        this.qty = 1;
        this.cost = 2;
        this.inCurr = 'EUR';
        this.currencies = currencyConverter.currencies;
        this.pay = function pay(){
            window.alert('Thanks!');
        };
        this.total = function total(currcyTgt){
            var totalValue = this.qty*this.cost;
            return currencyConverter.convert(totalValue, this.inCurr, currcyTgt);
        };

    }]);
//})(window.angular);
