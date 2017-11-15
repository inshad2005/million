

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'ngCordova', 'credit-cards', 'appConstant', 'ngSanitize', 'app.controllers', 'app.routes', 'app.directives', 'app.services', 'btford.socket-io', 'ionic-zoom-view', 'ngOpenFB', 'ngCordovaOauth'])

.run(function ($ionicPlatform, ngFB) {
    ngFB.init({

        appId: '1967200716840297',
        xfbml: true,
        version: 'v2.8'


    });
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        // Readyui.setApiKey("G5RKA-QC9NE-3DUPN-9EFRU-DK9FA");
        // Readyui.login("cathy_njeri@yahoo.com","Mio2016");
        // Readyui.launchCometChat();
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }


       // console.log("window.stripe ", window.stripe);
        //alert(window.stripe);

        //createCharge()
    });

    function testStripe() {
        // https://stripe.com/docs/api#list_customers
        stripe.customers.list({
                limit: "2" // both value as string and number are supported
            },
            function (response) {
                console.log(JSON.stringify(response, null, 2));

                createCustomer();
            },
            function (response) {
                alert(JSON.stringify(response))
            } // error handler
        );
    }


    function createCustomer() {
        // creating a customer: https://stripe.com/docs/api#create_customer
        stripe.customers.create({
                description: "Aaron Saunders",
                email: "aaron@clearlyinnovative.com"
            },
            function (response) {
                alert("Customer created:\n\n" + JSON.stringify(response))
                console.log(JSON.stringify(response, null, 2))
            },
            function (response) {
                alert(JSON.stringify(response))
            } // error handler
        );
    }
})


.filter('trustAsResourceUrl', ['$sce', function ($sce) {
        return function (val) {
            return $sce.trustAsResourceUrl(val);
        };

    }])
    .directive('disableSideMenuDrag', ['$ionicSideMenuDelegate', '$rootScope', function ($ionicSideMenuDelegate, $rootScope) {
        return {
            restrict: "A",
            controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {

                function stopDrag() {
                    $ionicSideMenuDelegate.canDragContent(false);
                }

                function allowDrag() {
                    $ionicSideMenuDelegate.canDragContent(true);
                }

                $rootScope.$on('$ionicSlides.slideChangeEnd', allowDrag);
                $element.on('touchstart', stopDrag);
                $element.on('touchend', allowDrag);
                $element.on('mousedown', stopDrag);
                $element.on('mouseup', allowDrag);

            }]
        };
    }])
    .factory('PaypalService', ['$q', '$ionicPlatform', 'shopSettings', '$filter', '$timeout', function ($q, $ionicPlatform, shopSettings, $filter, $timeout) {


        var init_defer;
        /**
         * Service object
         * @type object
         */
        var service = {
            initPaymentUI: initPaymentUI,
            createPayment: createPayment,
            configuration: configuration,
            onPayPalMobileInit: onPayPalMobileInit,
            makePayment: makePayment
        };


        /**
         * @ngdoc method
         * @name initPaymentUI
         * @methodOf app.PaypalService
         * @description
         * Inits the payapl ui with certain envs. 
         *
         * 
         * @returns {object} Promise paypal ui init done
         */
        function initPaymentUI() {

            init_defer = $q.defer();
            $ionicPlatform.ready().then(function () {

                var clientIDs = {
                    //"PayPalEnvironmentProduction": shopSettings.payPalProductionId,
                    "PayPalEnvironmentSandbox": shopSettings.payPalSandboxId
                };
                PayPalMobile.init(clientIDs, onPayPalMobileInit)
            });

            return init_defer.promise;

        }


        /**
         * @ngdoc method
         * @name createPayment
         * @methodOf app.PaypalService
         * @param {string|number} total total sum. Pattern 12.23
         * @param {string} name name of the item in paypal
         * @description
         * Creates a paypal payment object 
         *
         * 
         * @returns {object} PayPalPaymentObject
         */
        function createPayment(total, name) {

            // "Sale  == >  immediate payment
            // "Auth" for payment authorization only, to be captured separately at a later time.
            // "Order" for taking an order, with authorization and capture to be done separately at a later time.
            var payment = new PayPalPayment("" + total, "EUR", "" + name, "Sale");
            return payment;
        }
        /**
         * @ngdoc method
         * @name configuration
         * @methodOf app.PaypalService
         * @description
         * Helper to create a paypal configuration object
         *
         * 
         * @returns {object} PayPal configuration
         */
        function configuration() {
            // for more options see `paypal-mobile-js-helper.js`
            var config = new PayPalConfiguration({
                merchantName: shopSettings.payPalShopName,
                merchantPrivacyPolicyURL: shopSettings.payPalMerchantPrivacyPolicyURL,
                merchantUserAgreementURL: shopSettings.payPalMerchantUserAgreementURL
            });
            return config;
        }

        function onPayPalMobileInit() {
            $ionicPlatform.ready().then(function () {
                // must be called
                // use PayPalEnvironmentNoNetwork mode to get look and feel of the flow
                PayPalMobile.prepareToRender(shopSettings.payPalEnv, configuration(), function () {

                    $timeout(function () {
                        init_defer.resolve();
                    });

                });
            });
        }

        /**
         * @ngdoc method
         * @name makePayment
         * @methodOf app.PaypalService
         * @param {string|number} total total sum. Pattern 12.23
         * @param {string} name name of the item in paypal
         * @description
         * Performs a paypal single payment 
         *
         * 
         * @returns {object} Promise gets resolved on successful payment, rejected on error 
         */
        function makePayment(total, name) {


            var defer = $q.defer();
            total = $filter('number')(total, 2);
            $ionicPlatform.ready().then(function () {
                PayPalMobile.renderSinglePaymentUI(createPayment(total, name), function (result) {
                    console.log(JSON.stringify(result));
                    $timeout(function () {
                        defer.resolve(result);
                    });
                }, function (error) {

                    $timeout(function () {
                        defer.reject(error);
                    });
                });
            });

            return defer.promise;
        }

        return service;
    }]);

//To use this service 


// shop settings
// include appConstant into your app.js

angular.module('appConstant', []).constant('shopSettings', {


    payPalSandboxId: 'AW60OQKulWNYEVUYEIRdIkrp4657Lr0ljtwCmZjxMRwtSaall8SypEfi7iXgcqk20O2m4Up5Bekhhy-L',
    //payPalProductionId : 'promatics.inder@gmail.com',
    payPalEnv: 'testing', // for testing  production for production
    payPalShopName: 'million',
    payPalMerchantPrivacyPolicyURL: 'url to policy',
    payPalMerchantUserAgreementURL: ' url to user agreement '


});

