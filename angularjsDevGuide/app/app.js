//(function(angular) {
    angular.module('invoice1',['finance'])
    .controller('InvoiceController',['currencyConverter', function(curConvert){
        this.qty = 1;
        this.cost = 2;
        this.inCurr = 'EUR';
        this.currencies = curConvert.currencies;
        this.pay = function pay(){
            window.alert('Thanks!');
        };
        this.total = function total(currcyTgt){
            var totalValue = this.qty*this.cost;
            return curConvert.convert(totalValue, this.inCurr, currcyTgt);
        };

    }]);
//})(window.angular);
