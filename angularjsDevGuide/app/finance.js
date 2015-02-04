// Right now, the InvoiceController contains all logic of our example. When the application grows 
// it is a good practice to move view independent logic from the controller into a so called "service", 
// so it can be reused by other parts of the application as well. Later on, we could also change 
// that service to load the exchange rates from the web, e.g. by calling the Yahoo Finance API, 
// without changing the controller.

// Let's refactor our example and move the currency conversion into a service in another file:
  angular.module('finance',[]).factory('currencyConverter', ['$http', 
    function($http){
        var YAHHO_FINACE_URL_PATTERN = '//query.yahooapis.com/v1/public/yql?q=select * from '+
        'yahoo.finance.xchange where pair in ("PAIRS")&format=json&'+
        'env=store://datatables.org/alltableswithkeys&callback=JSON_CALLBACK';      
        var currencies = ['USD', 'EUR', 'CNY'];
        var usdToForeignRates = {};
        
        var convert = function(curcyValue, incurr, currcyTgt){
            //change currency Src to currcyTgt
            return (curcyValue/usdToForeignRates[incurr])*usdToForeignRates[currcyTgt];
        };
        var refresh = function(){
            var url = YAHHO_FINACE_URL_PATTERN.replace('PAIRS', 'USD' + 
                currencies.join('","USD'));
            return $http.jsonp(url).success(function(data){
                var newUsdToForeighRates = {};
                angular.forEach(data.query.results.rate, function(rate){
                    var currency = rate.id.substring(3,6);
                    newUsdToForeighRates[currency] = window.parseFloat(rate.Rate);
                });
                usdToForeignRates = newUsdToForeighRates;
            });
        };
        refresh();

        return{
            currencies:currencies,
            convert:convert,
            refresh:refresh
        };
    }]);
