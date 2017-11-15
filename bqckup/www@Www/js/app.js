// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
  'ionic', 
  'starter.controllers',
  'categoryTree',
  'ion-tree-list',
  'ngCordova',
  'ngSanitize'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
  if(window.plugins && window.plugins.AdMob) {
  console.log('hereeeeeeeeeeee');
                var admob_key = device.platform == "Android" ? "ca-app-pub-5594872470406718/5676538187" : "IOS_PUBLISHER_KEY";
                var admob = window.plugins.AdMob;
                admob.createBannerView( 
                    {
                        'publisherId': admob_key,
                        'adSize': admob.AD_SIZE.BANNER,
                        'bannerAtTop': false
                    }, 
                    function() {
                        admob.requestAd(
                            { 'isTesting': false }, 
                            function() {
                                admob.showAd(true);
                            }, 
                            function() { console.log('failed to request ad'); }
                        );
                    }, 
                    function() { console.log('failed to create banner view'); }
                );
            }
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
   
    .state('app.forum', {
    url: '/forum/:id',
     
views: {
      'menuContent': {
        templateUrl: 'templates/forum.html',
         controller: 'forumCtrl'
      }
    }
  })
    .state('app.forum2', {
    url: '/forum2/:id',
views: {
      'menuContent': {
        templateUrl: 'templates/forum2.html',
         controller: 'forum2Ctrl'
      }
    }
  })
   
.state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html'
      }
    }
  })

  .state('app.category', {
    url: '/category/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/category.html',
        controller: 'CategoryCtrl'
      }
    }
  })
  .state('app.articles', {
    url: '/articles/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/articles.html',
        controller: 'ArticleCtrl'
      }
    }
  })
  .state('app.comment', {
    url: '/page7/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/comment.html',
       controller: 'commentCtrl',
      }
    },
     onEnter: function($state){
        if(localStorage['auth']!='true'){
         $state.go('app.login');
        }
      }
  })
  
   .state('app.seeComment', {
    url: '/page12/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/seeComment.html',
       controller: 'seeCommentCtrl'
      }
    },
   /* onEnter: function($state){
        if(localStorage['auth']!='true'){
         $state.go('app.login');
        }
      }*/
  })
 
  


    .state('app.detail', {
    url: '/detail/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/detail.html',
        controller: 'DetailCtrl'
      }
    }
  })
    .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
         controller: 'loginCtrl'
      }
    }
  })
    .state('app.signup', {
    url: '/signup',
    views: {
      'menuContent': {
        templateUrl: 'templates/signup.html',
         controller: 'signupCtrl'
      }
    }
  })
  .state('app.other', {
    url: '/other',
    views: {
      'menuContent': {
        templateUrl: 'templates/other.html'
      }
    }
  });
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
