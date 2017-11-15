angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page7',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl',
     onEnter: function($state){
        if(localStorage['auth']=='true'){
           $state.go('tabsController.millionOpportunities');
        }
        
      }
  })

  .state('signup', {
    url: '/page8',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })
  .state('oauthcallback', {
    url: '/page881',
    templateUrl: 'templates/oauthcallback.html',
    controller: 'loginCtrl'
  })
  .state('manageAds', {
    url: '/page9',
    templateUrl: 'templates/manageAds.html',
    controller: 'manageAdsCtrl',
    onEnter: function($state){
        if(localStorage['auth']!='true'){
         $state.go('login');
        }
      }
  })

  .state('details', {
    url: '/page11/:id',
    templateUrl: 'templates/details.html',
    controller: 'detailsCtrl',
     
  })

  .state('tabsController.favourite', {
    url: '/page12',
    views: {
      'tab1': {
        templateUrl: 'templates/favourite.html',
        controller: 'favouriteCtrl',
         
      }
    },
    onEnter: function($state){
        if(localStorage['auth']!='true'){
         $state.go('login');
        }
      }
  })

  .state('tabsController.postAdd', {
    url: '/page13',
    views: {
      'tab4': {
        templateUrl: 'templates/postAdd.html',
        controller: 'postAddCtrl',
        
      }
    },
     onEnter: function($state){
        if(localStorage['auth']!='true'){
         $state.go('login');
        }
      }
  })
  .state('tabsController.postAdd2', {
    url: '/page31',
    views: {
      'tab4': {
        templateUrl: 'templates/postAdd2.html',
        controller: 'postAddCtrl2',   
      }
    },
     onEnter: function($state){
        if(localStorage['auth']!='true'){
         $state.go('login');
        }
      }
  })

  .state('tabsController.setting', {
    url: '/page14',
    views: {
      'tab2': {
        templateUrl: 'templates/setting.html',
        controller: 'settingCtrl',

      }
    },
     onEnter: function($state){
        if(localStorage['auth']!='true'){
         $state.go('login');
        }
      }
  })

  .state('tabsController.help', {
    url: '/page15',
    views: {
      'tab3': {
        templateUrl: 'templates/help.html',
        controller: 'helpCtrl'
      }
    }
  })

  .state('tabsController.millionOpportunities', {
    url: '/page16',
    views: {
      'tab5': {
        templateUrl: 'templates/millionOpportunities.html',
        controller: 'millionOpportunitiesCtrl'
      }
    }
  })

  .state('aboutUs', {
    url: '/page17',
    templateUrl: 'templates/aboutUs.html',
    controller: 'aboutUsCtrl'
  })

  .state('howItWork', {
    url: '/page18',
    templateUrl: 'templates/howItWork.html',
    controller: 'howCtrl'
  })

  .state('contactUs', {
    url: '/page19',
    templateUrl: 'templates/contactUs.html',
    controller: 'contactUsCtrl'
  })

  .state('profile', {
    url: '/page20',
    templateUrl: 'templates/profile.html',
    controller: 'profileCtrl',
    onEnter: function($state){
        if(localStorage['auth']!='true'){
         $state.go('login');
        }
      }
  })

  .state('pay', {
    url: '/page21',
    templateUrl: 'templates/pay.html',
    controller: 'payCtrl',
  })

  .state('stripes', {
    url: '/page211',
    templateUrl: 'templates/stripe.html',
    controller: 'stripeCtrl',
  })

   .state('forget', {
    url: '/page311',
    templateUrl: 'templates/forgetpswd.html',
    controller: 'forgetCtrl',
  })

  .state('paypal', {
    url: '/page51',
    templateUrl: 'templates/paypal.html',
    controller: 'paypalCtrl',
   
  })
  .state('filterimage', {
    url: '/page51',
    templateUrl: 'templates/filterimage.html',
    controller: 'filterimageCtrl',
   
  })
  .state('search', {
    url: '/page51',
    templateUrl: 'templates/Search.html',
    controller: 'searchCtrl',
   
  })
  .state('tabsController.editpostAdd', {
    url: '/page52/:id',
    views: {
      'tab4': {
        templateUrl: 'templates/editpostAdd.html',
        controller: 'editpostAddCtrl',
        
      }
    },
     onEnter: function($state){
        if(localStorage['auth']!='true'){
         $state.go('login');
        }
      }
  })
  .state('tabsController.editpostAdd2', {
    url: '/page53/:id',
    views: {
      'tab4': {
        templateUrl: 'templates/editpostAdd2.html',
        controller: 'editpostAddCtrl2',   
      }
    },
     onEnter: function($state){
        if(localStorage['auth']!='true'){
         $state.go('login');
        }
      }
  })



   .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.chats', {
    url: '/chats/{username}',
    params: { username: { value: null } },
    views: {
      'tab-chats': {
        templateUrl: 'templates/tab-chats.html',
        controller: 'ChatCtrl'
      }
    }
  })

  .state('tab.users', {
      url: '/users',
      views: {
        'tab-users': {
          templateUrl: 'templates/tab-users.html',
        }
      }
    })

.state('createNewAudition', {
    url: '/page5411',
    templateUrl: 'templates/createNewAudition.html',
    controller: 'creatCtrl',
   
  })
.state('callback', {
    url: '/page5412',
    templateUrl: 'templates/oauthcallback.html',
    controller: 'loginCtrl',
   
  })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

$urlRouterProvider.otherwise('/page1/page16')

  

});