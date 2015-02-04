// Right now, the InvoiceController contains all logic of our example. When the application grows 
// it is a good practice to move view independent logic from the controller into a so called "service", 
// so it can be reused by other parts of the application as well. Later on, we could also change 
// that service to load the exchange rates from the web, e.g. by calling the Yahoo Finance API, 
// without changing the controller.

// Let's refactor our example and move the currency conversion into a service in another file:
  angular.module('finance',[]).factory('currencyConverter', function(){      
        var currencies = ['USD', 'EUR', 'CNY'];
        var usdToForeignRates = {
            USD: 1,
            EUR:0.74,
            CNY:6.09
        };
        
        var convert = function(curcyValue, incurr, currcyTgt){
            //change currency Src to currcyTgt
            return (curcyValue/usdToForeignRates[incurr])*usdToForeignRates[currcyTgt];
        };
        return{
            currencies:currencies,
            convert:convert
        };
    });
