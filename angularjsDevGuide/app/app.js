//(function(angular) {
    angular.module('invoice1',[]).controller('InvoiceController',function(){
        this.qty = 1;
        this.cost = 2;
        this.inCurr = 'EUR';
        this.currencies = ['USD', 'EUR', 'CNY'];
        this.usdToForeignRates = {
            USD: 1,
            EUR:0.74,
            CNY:6.09
        };
        this.total = function(currcyTgt){
            var totalValue = this.qty*this.cost;
            return this.transferCurrency(totalValue, this.inCurr, currcyTgt);
        };
        this.transferCurrency = function(curcyValue, incurr, currcyTgt){
            //change currency Src to currcyTgt
            return (curcyValue/this.usdToForeignRates[incurr])*this.usdToForeignRates[currcyTgt];
        };
        this.pay = function(){
            alert("Thanks!");
        };
    });
//})(window.angular);
