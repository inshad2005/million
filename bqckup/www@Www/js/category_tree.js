angular.module('categoryTree', [])
  .directive('categoryTree', function() {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        categories: '=',
        categoryState: '@' // default: FALSE
      },
      replace: false,
      templateUrl: 'templates/category_tree.html',
      controller: ['$scope', '$ionicSideMenuDelegate', '$state', '$stateParams', '$ionicHistory', '$location', function($scope, $ionicSideMenuDelegate, $state, $stateParams, $ionicHistory, $location) {
        // Use ui-router's state to specify the active menu item
        var CATEGORY_STATE = $scope.categoryState || false;

        $scope.checkLink = function(cat) {
          //console.log('check link function');
          console.log(cat);
          if (angular.isUndefined(cat.items) || cat.items.length == 0) {
            if (cat.url) {
              console.log('previous url' + cat.url);
              $location.path(cat.url);
              $scope.toggleLeft();
            } else if (CATEGORY_STATE) {
              console.log('debug else part:'+cat.id);
              localStorage['main_game']=cat.id.split('-')[0];
              localStorage['nfl_id']=cat.id.split('-')[1];
               localStorage['fourm_NFL']=cat.name;
              console.log('inside category cat'+JSON.stringify(cat));
              console.log('Main Game: '+localStorage['main_game']);
              console.log('Main Game id: '+localStorage['nfl_id']);
              if(localStorage['main_game']=='NFL' || localStorage['main_game']=='BASKETBALL'){
                $state.go('app.articles');
              }else{
              $state.go(CATEGORY_STATE, {id: cat.id});
              console.log("exit");
              $scope.toggleLeft();
            }
            }
          }
        }

        $scope.isActive = function(cat) {
          if (cat.url && $location.path().indexOf(cat.url) !== -1) {
            return 'active';
          } else if (CATEGORY_STATE && $state.includes(CATEGORY_STATE) && $stateParams.id == cat.id) {
            return 'active';
          }
        }

        $scope.toggleCat = function(cat) {
          $scope.checkLink(cat);

          if ($scope.isCatShown(cat)) {
            $scope.activeCat = null;
          } else {
            $scope.activeCat = cat;
          }
          $scope.activeSubCat = null;// Also hide all subCats
        };

        $scope.isCatShown = function(cat) {
          return $scope.activeCat === cat;
        };

        $scope.toggleSubCat = function(cat) {
          $scope.checkLink(cat);

          if ($scope.isSubCatShown(cat)) {
            
            $scope.activeSubCat = null;
          } else {
            $scope.activeSubCat = cat;
           

          }
        };

        $scope.isSubCatShown = function(cat) {
          return $scope.activeSubCat === cat;

        };

        $scope.toggleLeft = function() {
          $ionicSideMenuDelegate.toggleLeft();

          $ionicHistory.nextViewOptions({
            disableBack: true
          });
        };
      }]
    }
  });
