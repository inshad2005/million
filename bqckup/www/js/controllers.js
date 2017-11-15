angular.module('app.controllers', [])
     
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('loginCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $state, $http,$cordovaOauth, $ionicPopup,$cordovaToast, $ionicLoading, $ionicPlatform,$ionicSideMenuDelegate,$stateParams,$ionicPopover,$ionicModal, $timeout,ngFB) {
 $ionicSideMenuDelegate.canDragContent(false);  
        $scope.$on('$ionicView.beforeEnter', function(event, viewData) {
                                console.debug('[StoryController] $ionicView.beforeEnter');


                                viewData.enableBack = true;
                         if(localStorage['auth']!='true'){

                      var alertPopup = $ionicPopup.alert({
                                      title: 'Alert',
                                      template: 'Please login to continue'
                                  });

}
});
        
 $scope.LoginwithFacebook = function(){
        console.log("clicked");
        $cordovaOauth.facebook("1204592029619718", ["email"]).then(function(result) {
                //alert("Auth Success..!!"+JSON.stringify(result));
                if(result.access_token){
            $http.get("https://graph.facebook.com/v2.2/me", { params: { access_token: result.access_token, fields: "id,email,name,gender,location,website,picture,relationship_status", format: "json" }}).then(function(result) {
                $scope.profileData = result.data;
                console.log(result.data);
                if(result.data)
                {
                  $ionicLoading.show({
                             template: 'Redirecting...'
                        });
                            $http({
                                  method: 'POST',
                                  url: 'http://europa.promaticstechnologies.com/million/webservicefb_login',
                                  data: {
                                    'email': result.data.email,
                                    'session_id': result.data.id,
                                    'name': result.data.name
                                  },
                                  headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                  }
                            }).success(function (data, status, header, config, message) {
                                 $ionicLoading.hide();
                                    if (data) {
                                                   console.log(JSON.stringify(data));   
                                                    localStorage.setItem('auth', "true");
                                                     localStorage.setItem('rEmail', data.result);
                                                    // console.log('user_id' + localStorage ['rEmail']);
                                                    logsuc();
                                                  //localStorage.setItem('status', data.result.status);
                                            } 
                                }).error(function (data, status, header, config, message) {
                                                 //  $ionicLoading.hide();
                                               });	
                }
               // alert(JSON.stringify(result.data));
            }, function(error) {
                alert("There was a problem getting your profile.  Check the logs for details.");
                console.log(error);
            });
        } else {
            alert("Not signed in");
            $location.path("/login");
        }
            }, function(error) {
                alert("Auth Failed..!!"+JSON.stringify(error));
            });





         logsuc = function () {
                                  var alertPopup = $ionicPopup.alert({
                                      title: 'Alert',
                                      template: 'Logged-In successfully! '
                                  });
                                  alertPopup.then(function (res) {
                                        console.log('Logged-In successfully! ');
                                        $state.go('tabsController.millionOpportunities');

                                  });
                                  console.log('Login successfull');
                                  
                      }
          // logfail = function () {
          //                         var alertPopup = $ionicPopup.alert({
          //                             title: 'Alert',
          //                             template: 'Either Email or Password is incorrect!'
          //                         });
          //                         alertPopup.then(function (res) {
          //                         //	$state.reload('login');
          //                                 console.log(res);
          //                                 console.log('User not login');
          //                            });
          //   };
      };

               
$scope.login = function () {
                        $ionicLoading.show({
                             template: 'Redirecting...'
                        });
                            $http({
                                  method: 'POST',
                                  url: 'http://europa.promaticstechnologies.com/million/webservicelogin',
                                  data: {
                                    'email': $scope.user.email,
                                    'password': $scope.user.password
                                  },
                                  headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                  }
                            }).success(function (data, status, header, config, message) {
                                 $ionicLoading.hide();
                                    if (data.response) {

                                                  
                                                    localStorage.setItem('auth', "true");
                                                    localStorage.setItem('rEmail', $scope.user.email);
                                                    console.log('user_id' + localStorage ['rEmail']);
                                                    logsuc();
                                                  //localStorage.setItem('status', data.result.status);
                                            } else {
                                                   logfail();
                                                    }
                                }).error(function (data, status, header, config, message) {
                                                   $ionicLoading.hide();
                                               });
             }

          logsuc = function () {
                                  var alertPopup = $ionicPopup.alert({
                                      title: 'Alert',
                                      template: 'Logged-In successfully! '
                                  });
                                  alertPopup.then(function (res) {
                                        console.log('Logged-In successfully! ');
                                        $state.go('tabsController.millionOpportunities');

                                  });
                                  console.log('Login successfull');
                                  
                      }
          logfail = function () {
                                  var alertPopup = $ionicPopup.alert({
                                      title: 'Alert',
                                      template: 'Either Email or Password is incorrect!'
                                  });
                                  alertPopup.then(function (res) {
                                  //	$state.reload('login');
                                          console.log(res);
                                          console.log('User not login');
                                     });
            };
})
 
.controller('signupCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $state, $http, $ionicPopup, $ionicLoading, $ionicPlatform,$ionicSideMenuDelegate,$stateParams,$ionicPopover) {

 

              $scope.signup=function(){
		              	$ionicLoading.show({
		                                       template: 'Please Wait...'
		                                    });
		              					$http({
                                            method: 'POST',
                                            url: 'http://europa.promaticstechnologies.com/million/webservicesign_up', 
                                            data: 
                                            {  
                                               'firstname':$scope.firstName,
                                                'lastname':$scope.lastName,
                                                'email':$scope.email,
                                                'password':$scope.password,
                                                'username':$scope.userName,
                                                
                                               
                                               
                                             }, 
                                            headers: 
                                            {
                                              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                            }
                                              }).success(function(data, status, header, config, message) {

                                          $ionicLoading.hide();
                                          if(data.response){
                                            regsuc();
                                            $state.go("login");
                                          }else{
                                            regfail(); 
                                          }
                                  }).error(function(data, status, header, config, message) {
                                    $ionicLoading.hide();
                                    regfail();
                                    });
                   }
                    regsuc = function() {
                            var alertPopup = $ionicPopup.alert({
                            title: 'Congratulations !',
                            template: 'Registration Completed successfully! '
                            });
                            alertPopup.then(function(res) {
                            console.log('User Registered');
                            });
                    };
                  regfail = function() {
                           var alertPopup = $ionicPopup.alert({
                           title: 'Alert',
                           template: ' Email Address is Already Registered! '
                           });
                           alertPopup.then(function(res) {
                            $state.reload('signup');
                           console.log('User Not Registered');
                           });
            };
        


})

   


.controller('postAddCtrl', 
function ($scope, $state, $http, $ionicPopup,$cordovaFileTransfer, $ionicLoading, $ionicPlatform, $ionicSideMenuDelegate, $stateParams, $ionicPopover,$cordovaCamera,$cordovaImagePicker){
 $ionicSideMenuDelegate.canDragContent(false);  
        $scope.$on('$ionicView.beforeEnter', function(event, viewData) {
    
                                console.debug('[StoryController] $ionicView.beforeEnter');
                                $scope.email=localStorage['rEmail'];
 //                            var ladka=[];
 //                            var ladki=[];
 //                            var mausa=[];
 //                           //$scope.total;
 //                       // $ionicLoading.show({
 //                       //  template: 'Please Wait...'
 //                       //  });
 //                       //  $http({
 //                       //  method: 'POST',
 //                       //  url: 'http://europa.promaticstechnologies.com/million/webserviceprice', 
 //                       //  data: {}, 
 //                       //  headers: 
 //                       //  {
 //                       //  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
 //                       //  }
 //                       //  }).success(function(data, status, header, config, message) {

 //                       //      $ionicLoading.hide();
 //                       //      if(data.result){
 //                       //        $scope.adprice=angular.fromJson(data.result.ad.price);
 //                       //        localStorage.setItem('adprice',data.result.ad.price);
 //                       //        localStorage.setItem('adduration',data.result.ad.duration);
                            
 //                       //      }else{
 //                       //     // regfail(); 
 //                       //      }
 //                       //      }).error(function(data, status, header, config, message) {
 //                       //     $ionicLoading.hide();
 //                       //      //regfail();
 //                       //      });

 //                       //              console.log('dusri strst')

          
                                $http({
                                    method: 'post',
                                    url: 'http://europa.promaticstechnologies.com/million/webserviceclick_post_id',
                                    data:{
                                        
                                    },
                                    headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                    }
                                }).success(function (data, status, header, config, message) {
                                $ionicLoading.hide();
                                if (data.response) {
                                     localStorage.setItem('post_id',data.result);
                                     
                                }
                                console.log('postid page 1 '+localStorage['post_id'])
                                }).error(function (data, status, header, config, message) {
                                   $ionicLoading.hide();

                                });
                              });

 $scope.next = function(data){

                          if($scope.check1!=true)
                                      {
                                        var con_name=null;
                                      }else{
                                        var con_name=$scope.name;
                                        //var webduration=
                          }

                          if($scope.check2!=true)
                                      {
                                        var contact_no=null;
                                      }else{
                                        var contact_no=$scope.contactno;
                                        //var webduration=
                          }

                          if($scope.check3!=true)
                                      {
                                        var con_email=null;
                                      }else{
                                        var con_email=$scope.email;
                                        //var webduration=
                          }
                
                         if(data=='Motors')
                        {
                            localStorage.setItem('name',con_name);
                            localStorage.setItem('contact',contact_no);
                            localStorage.setItem('email',con_email);
                            localStorage.setItem('category',$scope.category);
                            localStorage.setItem('subcategory',$scope.subcategory);
                            localStorage.setItem('radio',$scope.radio);
                            localStorage.setItem('title',$scope.adtitle);
                           // localStorage.setItem('addescription',$scope.addescription);
                            localStorage.setItem('licence',$scope.licence);
                            localStorage.setItem('mileage',$scope.mileage);
                            localStorage.setItem('price',$scope.price);
                            localStorage.setItem('make',$scope.make);
                            localStorage.setItem('year',$scope.year);
                            localStorage.setItem('admodel',$scope.admodel);
                            localStorage.setItem('fuel',$scope.fuel);
                            localStorage.setItem('adbody',$scope.adbody);
                            localStorage.setItem('transmission',$scope.transmission);
                            localStorage.setItem('color',$scope.color);
                            localStorage.setItem('engine',$scope.engine);
                            localStorage.setItem('admileage',$scope.admileage);

                            console.log('category'+localStorage['category']);
                            console.log('subcategory'+localStorage['subcategory']);
                            console.log('name'+localStorage['name']);
                            console.log('contact'+localStorage['contact']);
                            console.log('contact'+localStorage['email']);
                            console.log('radio'+localStorage['radio']);
                            console.log('Title'+localStorage['title']);
                           // console.log('description'+localStorage['addescription']);
                            console.log('licence'+localStorage['licence']);
                            console.log('mileage'+localStorage['mileage']);
                            console.log('price'+localStorage['price']);
                             //console.log('licence'+$scope.licence);
                            console.log('make'+localStorage['make']);
                            console.log('year'+localStorage['year']);
                            console.log('admodel'+localStorage['admodel']);
                            console.log('fuel'+localStorage['fuel']);
                            console.log('adnody'+localStorage['adbody']);
                            console.log('transmission'+localStorage['transmission']);
                            console.log('color'+localStorage['color']);
                            console.log('engine'+localStorage['engine']);
                            console.log('admileage'+localStorage['admileage']);
                            $state.go("tabsController.postAdd2");
                      }else{
                            localStorage.setItem('name',con_name);
                            localStorage.setItem('contact',contact_no);
                            localStorage.setItem('email',con_email);
                            localStorage.setItem('category',$scope.category);
                            localStorage.setItem('subcategory',$scope.subcategory);
                            // localStorage.setItem('address',$scope.address);
                            // localStorage.setItem('pincode',$scope.pincode);
                            localStorage.setItem('radio',$scope.radio);
                            localStorage.setItem('title',$scope.adtitle);
                           // localStorage.setItem('addescription',$scope.addescription);
                            localStorage.setItem('licence','');
                            localStorage.setItem('mileage','');
                            localStorage.setItem('price','');
                            localStorage.setItem('make','');
                            localStorage.setItem('year','');
                            localStorage.setItem('admodel','');
                            localStorage.setItem('fuel','');
                            localStorage.setItem('adbody','');
                            localStorage.setItem('transmission','');
                            localStorage.setItem('color','');
                            localStorage.setItem('engine','');
                            localStorage.setItem('admileage','');
                            console.log('category'+localStorage['category']);
                            console.log('subcategory'+localStorage['subcategory']);
                             console.log('name'+localStorage['name']);
                            console.log('contact'+localStorage['contact']);
                            console.log('contact'+localStorage['email']);
                            console.log('radio'+localStorage['radio']);
                            console.log('Title'+localStorage['title']);
                           // console.log('description'+localStorage['addescription']);
                            console.log('licence'+localStorage['licence']);
                            console.log('mileage'+localStorage['mileage']);
                            console.log('price'+localStorage['price']);
                             //console.log('licence'+$scope.licence);
                            console.log('make'+localStorage['make']);
                            console.log('year'+localStorage['year']);
                            console.log('admodel'+localStorage['admodel']);
                            console.log('fuel'+localStorage['fuel']);
                            console.log('adnody'+localStorage['adbody']);
                            console.log('transmission'+localStorage['transmission']);
                            console.log('color'+localStorage['color']);
                            console.log('engine'+localStorage['engine']);
                            console.log('admileage'+localStorage['admileage']);
                            $state.go("tabsController.postAdd2");
                      }
                 }
                 
            })


.controller('postAddCtrl2', 
function ($scope, $state, $http, $ionicPopup,$cordovaFileTransfer, $ionicLoading, $ionicPlatform, $ionicSideMenuDelegate, $stateParams, $ionicPopover,$cordovaCamera,$cordovaImagePicker) {
 $scope.$on('$ionicView.beforeEnter', function(event, viewData) {
    
                                console.debug('[StoryController] $ionicView.beforeEnter');
                                console.log('postid page 2 '+localStorage['post_id']) 
                                $scope.email=localStorage['rEmail'];
                            var ladka=[];
                            var ladki=[];
                            var imp=[];
                            var flash=[];
                            var mausa=[];
                           //$scope.total;
                       $ionicLoading.show({
                        template: 'Please Wait...'
                        });
                        $http({
                        method: 'POST',
                        url: 'http://europa.promaticstechnologies.com/million/webserviceprice', 
                        data: {}, 
                        headers: 
                        {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                        }
                        }).success(function(data, status, header, config, message) {

                            $ionicLoading.hide();
                            if(data.result){
                              $scope.pricelist=angular.fromJson(data.result);
                             // $scope.adprice=angular.fromJson(data.result.ad.price);
                              localStorage.setItem('adprice',data.result.ad.price);
                              localStorage.setItem('adduration',data.result.ad.duration);
                              
                              console.log('adprice'+localStorage['adprice']);
                              angular.forEach(data.recommended, function(v,k){
                             //   var ladki="duration"+k;
                                  ladka.push(v.duration);
                                  ladki.push(v.price);
                                  mausa.push(v.feat_duration+ ' days-$'+v.feat_price);

                                 // console.log(ladki);
                              });
                              angular.forEach(data.important, function(v,k){
                             //   var ladki="duration"+k;
                                  ladka.push(v.duration);
                                  ladki.push(v.price);
                                  imp.push(v.urgent_duration+ ' days-$'+v.urgent_price);

                                 // console.log(ladki);
                              });
                              angular.forEach(data.flashlight, function(v,k){
                             //   var ladki="duration"+k;
                                  ladka.push(v.duration);
                                  ladki.push(v.price);
                                  flash.push(v.spot_duration+ ' days-$'+v.spot_price);

                                 // console.log(ladki);
                              });
                              console.log(ladka);
                              console.log(ladki);
                              $scope.duration=mausa;
                              $scope.impoption=imp;
                              $scope.flashoption=flash;
                              // $scope.featureddurationlist=angular.fromJson(data.featured_duration);
                              
                            //regsuc();
                           // $state.go("tabsController.millionOpportunities");
                            }else{
                           // regfail(); 
                            }
                            }).error(function(data, status, header, config, message) {
                           $ionicLoading.hide();
                            //regfail();
                            });

                       // console.log('total'+filename)

                         });console.log();

 $scope.select=function(){
              console.log('changed');
              $scope.check2=false;
              $scope.check3=false;
              $scope.check4=false;
              $scope.check5=false;
              $scope.check6=false;

 }

$scope.post=function(a,b,c,d,e,f){
                              console.log('check'+$scope.check4)
                              
                                      if($scope.check2!=true)
                                      {
                                        var website=0;
                                      }else{
                                        var website = $scope.pricelist.web.price;
                                        //var webduration=
                                      }



                                       if($scope.check3!=true)
                                      {
                                        var youtube=0;
                                      }else{
                                        var youtube = $scope.pricelist.youtube.price;
                                        //var webduration=
                                      }



                                      if($scope.check4!=true)
                                      {
                                        var urgent=0;
                                        var urgent_time= null;
                                      }else{

                                        var urgent = $scope.important.split("$").pop();
                                        var urgentduration= $scope.important.split(" ");
                                        var urgent_time= urgentduration[0];
                                        console.log("ggg urgent"+urgent_time)
                                        
                                        console.log("price urgent"+urgent);
                                        console.log("priceddd urgent "+ urgentduration);
                                        // var urgent = $scope.pricelist.urgent.price;
                                        // var urgentduration= $scope.pricelist.urgent.duration;
                                        // console.log("price"+urgent);
                                        // console.log("dur"+urgentduration);
                                      }




                                      if($scope.check5!=true)
                                      {
                                        var featured=0;
                                        var featured_time=null;
                                      }else{
                                        var featured = $scope.recommended.split("$").pop();
                                        var featuredduration= $scope.recommended.split(" ");
                                        var featured_time= featuredduration[0];
                                        console.log("ggg"+featured_time)
                                        
                                        console.log("price"+featured);
                                        console.log("priceddd "+ featuredduration);
                                        
                                      }


                                      if($scope.check6!=true)
                                      {
                                        var spolight=0;
                                        var spolight_time=null;
                                      }else{
                                        // var spolight = $scope.pricelist.spolight.price;
                                        // var spoduration= $scope.pricelist.spolight.duration;
                                        var spolight = $scope.flashlight.split("$").pop();
                                        var spoduration= $scope.flashlight.split(" ");
                                        var spolight_time= spoduration[0];
                                        console.log("ggg"+spolight)
                                        
                                        console.log("price"+spolight);
                                        console.log("priceddd "+ spoduration);
                                      }
                            
                              // if($scope.check4!=true)
                              // {
                              //   var email_id='';
                              // }else{
                              //   var email_id = $scope.email;
                              // }
                              // if($scope.check5!=true)
                              // {
                              //   var contact='';
                              // }else{
                              //   var contact = $scope.contactno;
                              // }
                              
                          
                           //console.log('ssss'+filename);
                         $scope.total=parseInt(website)+parseInt(youtube)+parseInt(urgent)+parseInt(featured)+parseInt(spolight)+parseInt(localStorage['adprice']);
                            console.log('total'+$scope.total);
                            localStorage.setItem('total',$scope.total);
                            console.log('total_local'+localStorage['total'])

                            var confirmPopup = $ionicPopup.confirm({
                                        title: 'Confirm',
                                        template: 'your  post cost total is $ ' +$scope.total+' if you want proceed  press Ok otherwise cancel'
                                    });
                                        confirmPopup.then(function(res) {
                                          if(res){
                                                  $ionicLoading.show({
                                                  template: 'Please Wait...'
                                                  });
                                                  $http({
                                                  method: 'POST',
                                                  url: 'http://europa.promaticstechnologies.com/million/webservicepost_ad', 
                                                  data: 
                                                  { 
                                                
                                                  'post_id':localStorage['post_id'], 
                                                  'address':localStorage['name'],
                                                  'email':localStorage['email'],
                                                  'email_me':localStorage['rEmail'],
                                                  'call_me':localStorage['contact'],
                                                  'category':localStorage['category'],
                                                  'sub_category':localStorage['subcategory'],
                                                  'postal_code':$scope.address,
                                                  'seller_type':localStorage['radio'],
                                                  'ad_title':localStorage['title'],
                                                  'price':localStorage['price'],
                                                  'video_link':$scope.youtubelink,
                                                   'web_link':$scope.websitelink,
                                                  'description':$scope.longdescription,
                                                  'web_check':website,
                                                  'you_check':youtube,
                                                  'urgent':urgent,
                                                  'urgent_duration':urgent_time,
                                                  'featured':featured,
                                                  'featured_duration':featured_time,
                                                  'spolight':spolight,
                                                  'spotlight_duration':spolight_time,
                                                  'ad_duration':localStorage['adduration'],
                                                  'ad_posting':localStorage['adprice'],
                                                  'model':localStorage['admodel'] ,
                                                  'color':localStorage['color'],
                                                  'v_make':localStorage['make'] ,
                                                  'v_body_type':localStorage['adbody'] ,
                                                  'v_purchase_year': localStorage['year'],
                                                  'fuel_type': localStorage['fuel'],
                                                  'transmission':localStorage['transmission'],
                                                  'engine_size':localStorage['engine'],
                                                  'v_mileage':localStorage['admileage'],
                                                 
                                                 
                                                  }, 
                                                  headers: 
                                                  {
                                                  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                                  }
                                                  }).success(function(data, status, header, config, message) {

                                                      $ionicLoading.hide();
                                                      localStorage.setItem('postid_pay',data.result2);
                                                      console.log('post_idfor pay'+localStorage['postid_pay']);
                                                      if(data.response){
                                                         if($scope.total=='0')
                                                         {
                                                            regsuc();
                                                           // $state.go("tabsController.millionOpportunities");
                                                          }
                                                      else{
                                                        $state.go("stripes");

                                                      }
                                                      }else{
                                                      regfail(); 
                                                      }
                                                      }).error(function(data, status, header, config, message) {
                                                     $ionicLoading.hide();
                                                      regfail();
                                                      });   
                                      }
                                    });

                                    regsuc = function (){
                                                    var alertPopup = $ionicPopup.alert({
                                                    title: 'Alert',
                                                    template: 'Congratulations Add post successfully! '
                                                    });
                                                    alertPopup.then(function (res) {
                                                    console.log('Congratulations Add post successfully ');
                                                    $state.go('tabsController.millionOpportunities');
                                                    });
                                                  }
                                    regfail = function () {
                                                      var alertPopup = $ionicPopup.alert({
                                                          title: 'Alert',
                                                          template: ' Add post failsed! try again!!'
                                                      });
                                                      alertPopup.then(function (res) {
                                                      //  $state.reload('login');
                                                      console.log(res);
                                                      console.log('Add post failsed! try again!!');
                                                      });
                                    };
                     }
                    
  $scope.takePicture = function (options) {
                           console.log("this is camera function");
                          var path;
                          var options = {
                              quality: 100,
                              targetWidth: 200,
                              targetHeight: 200,
                              sourceType: 1,
                             // post_id :localStorage['post_id'],
                             // email_id: localStorage ['rEmail']
                          };
                          console.log(options);
                             $cordovaCamera.getPicture(options).then(function (imageData) {
                              var url = encodeURI("http://europa.promaticstechnologies.com/million/webserviceupload_photo/"+localStorage['post_id']+'/'+localStorage ['rEmail']);
                              var fileUrl = imageData;
                              $scope.picture = imageData.split('?')[0];
                               var filename =imageData.split('?')[0];
                              console.log($scope.picture);
                              path = imageData;
                              var options = {
                                  fileKey: "files",
                                  fileName: filename,
                                  httpMethod: 'POST',
                                  params: {
                                   post_id :localStorage['post_id'],
                                   email_id: localStorage ['rEmail']
                                  },
                                 
                                  trustAllHosts: true,
                                  chunkedMode: false,
                                  mimeType: "image/jpeg",
                              };
                              console.log(options);
                              options.headers = {
                                  Connection: "close"
                              };
                              console.log("requester id " + localStorage['post_id']);
                              var fileTransfer = new FileTransfer();
                              $cordovaFileTransfer.upload(url, fileUrl, options, true).then(function (result) {
                                  console.log("SUCCESS: " + JSON.stringify(result));

                                  //alert("success");
                                  console.log("uploading image");
                                  $scope.picture = imageData.split('?')[0];
                                  console.log("result is" + result);
                                  console.log("result is" + JSON.stringify(result));

                                  $ionicLoading.hide();
                                  var confirmPopup = $ionicPopup.confirm({
                                         title: 'Success!',
                                         template: 'You successfully uploaded images. Are you want to upload another images ? press OK otherwise cancel',

                                    });
                                     confirmPopup.then(function(res) {  
                                              
                                              if(res)
                                              { 
                                                  $scope.takePicture();
                                                }
                                              });
                              }, function (err) {
                                  console.log("ERROR: " + JSON.stringify(err));
                                  $ionicLoading.hide();
                                  alert('ERROR:' + JSON.stringify(err));
                              }, function (progress) {
                                 console.log('progress');
                                  var progress_status = (progress.loaded / progress.total) * 100;
                                  $ionicLoading.show({
                                      template: "Uploading please wait... "+ Math.floor(progress_status)
                                  });
                                  
                                   
                              });
                           
                                 
                                //alert('Photo Saved Sucessfully!');
                                  //$state.reload();
                               
                          }, function (err) {
                              console.log(err);
                          });
                      
              };
  $scope.pickimages=function(){
                          $scope.collection = {
                          selectedImage : ''
                          };
                          console.log('Inside Pick Images');
                          $scope.items=[];
                          var options = {
                          maximumImagesCount:5,
                          width: 800,
                          height: 800,
                          quality: 80
                          };
                          $cordovaImagePicker.getPictures(options)
                          .then(function (results) {
                          for (var i = 0; i < results.length; i++) {
                          $scope.collection.selectedImage = results[i];

                          uploadPhoto(results[i]);
                          console.log('Image URI: ' + results[i]);
                          }

                          }, function(error) {
                          // error getting photos
                          })
                 }
                 function uploadPhoto(imageData) {
                            console.log("upload");
                          var url = encodeURI("http://europa.promaticstechnologies.com/million/webserviceupload_photo/"+localStorage['post_id']+'/'+localStorage ['rEmail']);
                              var fileUrl = imageData;
                              $scope.picture = imageData.split('?')[''];
                               var filename =imageData.split('?')[''];
                              console.log($scope.picture);
                              path = imageData;
                              var options = {
                                  fileKey: "files",
                                  fileName: filename,
                                  httpMethod: 'POST',
                                  params: {
                                   post_id :localStorage['post_id'],
                                   email_id: localStorage ['rEmail']
                                  },
                                 
                                  trustAllHosts: true,
                                  chunkedMode: false,
                                  mimeType: "image/jpeg",
                              };
                              console.log(options);
                              options.headers = {
                                  Connection: "close"
                              };
                              console.log("requester id " + localStorage['post_id']);
                              var fileTransfer = new FileTransfer();
                              $cordovaFileTransfer.upload(url, fileUrl, options, true).then(function (result) {
                                 // console.log("SUCCESS: " + JSON.stringify(result));

                                  //alert("success");
                                  console.log("uploading image");
                                  $scope.picture = imageData.split('?')[0];
                                //  console.log("result is" + result);
                                console.log("result is" + JSON.stringify(result));
                                  $ionicLoading.hide();
                              }, function (err) {
                                  console.log("ERROR: " + JSON.stringify(err));
                                  $ionicLoading.hide();
                                  alert('ERROR:' + JSON.stringify(err));
                              }, function (progress) {
                                // console.log('progress');
                                  var progress_status = (progress.loaded / progress.total) * 100;
                                  $ionicLoading.show({
                                      template: "Uploading please wait... "+ Math.floor(progress_status)
                                  });
                                  
                                   
                              });
                    }       
                  

   

 })
.controller('stripeCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $state, $http, $ionicPopup, $ionicLoading, $cordovaFileTransfer,$cordovaDevice, $ionicPlatform,$ionicSideMenuDelegate,$stateParams,$ionicPopover) {
    $scope.total='$'+localStorage['total'];
    $scope.cardType = {};
    $scope.card = {};

    $scope.makeStripePayment = makeStripePayment;


    /**
     */
    function makeStripePayment(_cardInformation) {
      $ionicLoading.show({
                            template: 'Please Wait...'
                        });
      
      if (!window.stripe) {
        alert("stripe plugin not installed");
        return;
      }

      if (!_cardInformation) {
        alert("Invalid Card Data");
        return;
      }
      stripe.charges.create({
          // amount is in cents so * 100
          amount: localStorage['total'] * 100,
          currency: 'usd',
          card: {
            "number": _cardInformation.number,
            "exp_month": _cardInformation.exp_month,
            "exp_year": _cardInformation.exp_year,
            "cvc": _cardInformation.cvc,
            "name": "Aaron Saunders"
          },
          description: "Stripe Test Charge"
        },
        function(response) {
          $ionicLoading.hide();

          //console.log(JSON.stringify(response, null, 2));
         // alert(JSON.stringify(response, null, 2));
          $scope.results=angular.fromJson(response);
          console.log(JSON.stringify(response, null, 2));
        //  alert(JSON.stringify(response, null, 2));
         if(response.status=='succeeded'){
          pay($scope.results);
          }
          else{
            $ionicLoading.hide();
            payfail();
          }
        },
        function(response) {
          $ionicLoading.hide();
          payfail();
         // alert(JSON.stringify(response))
        } // error handler
      );
    }

     pay = function(results){
                     var paydata=results;
                       console.log('data'+JSON.stringify(paydata));     

                   $ionicLoading.show({
                            template: 'Please Wait...'
                        });
                        console.log('user id' + localStorage['rEmail']);
                        $http({
                            method: 'POST',
                            url: 'http://europa.promaticstechnologies.com/million/webservicepayment', 
                            data: 
                            { 
                                 'id':localStorage['postid_pay'], 
                                 'email':localStorage['rEmail'],
                                 'status':paydata.status,
                                 'transaction_id':paydata.id,
                      }, 
                      headers: 
                          {
                          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                          }
                      }).success(function(data, status, header, config, message) {

                                $ionicLoading.hide();
                                if(data.response=='true'){
                                   console.log('pay responsce'+JSON.stringify(data));
                               //  $state.go("stripes");
                              paysuc()
                                console.log('data submitted');
                        }else{
                                 console.log('data fail to submitted');
                               payfail();
                        }
                      }).error(function(data, status, header, config, message) {
                         console.log('pay responsce'+data);
                                 $ionicLoading.hide();
                                   payfail();
                      });
                   
                    
                };

                   paysuc = function() {
                            var alertPopup = $ionicPopup.alert({
                            title: 'Congratulations !',
                            template: 'Payment successfully done. '
                            });
                            alertPopup.then(function(res) {
                           // console.log('User Registered');
                           $state.go('tabsController.millionOpportunities')
                            });
                           };
                   payfail = function() {
                           var alertPopup = $ionicPopup.alert({
                           title: 'Alert',
                           template: ' Pay Fail try again '
                           });
                           alertPopup.then(function(res) {
                          // $state.go('manageAds')
                          // console.log('User Not Registered');
                           });
                        }; 
               
})

. controller('detailsCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $state, $http, $ionicPopup, $ionicLoading, $cordovaFileTransfer,$ionicPopover,$cordovaDevice, $ionicPlatform,$ionicSideMenuDelegate,$stateParams,$cordovaSocialSharing){
        $ionicSideMenuDelegate.canDragContent(false);  
        $scope.$on('$ionicView.beforeEnter', function(event, viewData) {
    
                                console.debug('[StoryController] $ionicView.beforeEnter');


                                viewData.enableBack = true;
                                console.log($stateParams);
                                console.log($stateParams.id);
                                var id =$stateParams.id;
                                console.log(id);
                                $ionicLoading.show({
                                   template: 'Please Wait...'
                                });
                                $http({
                                    method: 'post',
                                    url: 'http://europa.promaticstechnologies.com/million//webservicead_details',
                                    data:{
                                        'id':id,
                                        

                                    },
                                    headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                    }
                                }).success(function (data, status, header, config, message) {
                                $ionicLoading.hide();
                                if (data.response) {
                                     $scope.detailsdata=angular.fromJson(data.result);
                                     $scope.imagedata=angular.fromJson(data.result.images);
                                      $scope.timedata=data.c_time;
                                      $scope.emailcheck=localStorage ['rEmail'];


                                }
                                //LoadingSpinner.hide('pageLoading');
                                }).error(function (data, status, header, config, message) {
                                   $ionicLoading.hide();

                                });

                            $scope.shareAnywhere = function(dis,title,image) {
                           var discription=dis;
                           var title=title;
                           var image=image;
                           var c_image="http://europa.promaticstechnologies.com/million/uploads/"+image.replace('[','').replace('"','').replace('"','').replace(']','');
                          
                         //  var sentence="Audition Name: "+name+", "+"Starting: "+str+", "+"Ending: "+end+", "+"Descripton: "+discription+", "+"Location: "+location;
                           console.log(discription);
                           console.log(title);
                           console.log(image);
                           console.log('co'+c_image);
                         //  console.log(sentence);
                          $cordovaSocialSharing.share(discription,title,c_image,"http://europa.promaticstechnologies.com/million/");
                }

                $scope.addfavorite=function(id){

                                  var post_id=id;
                                  console.log('addid' +post_id)
                                   $ionicLoading.show({
                                template: 'Please Wait...'
                                });
                                $http({
                                    method: 'post',
                                    url: 'http://europa.promaticstechnologies.com/million/webservicefav',
                                    data:{
                                         'post_id':post_id,
                                         'user_email':localStorage ['rEmail']



                                    },
                                headers: {
                                  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                }
                                }).success(function (data, status, header, config, message) {
                                $ionicLoading.hide();
                                $state.reload('details');
                                if (data.response) {


                                   
                                   
                                }
                                //LoadingSpinner.hide('pageLoading');
                                }).error(function (data, status, header, config, message) {
                                 $ionicLoading.hide();

                                });
                              };  
                              $scope.removefavorite=function(id){

                                  var fav_id=id;
                                  console.log('fav' +fav_id)
                                   $ionicLoading.show({
                                template: 'Please Wait...'
                                });
                                $http({
                                    method: 'post',
                                    url: 'http://europa.promaticstechnologies.com/million/webserviceunfav',
                                    data:{
                                         'id':fav_id,

                                    },
                                headers: {
                                  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                }
                                }).success(function (data, status, header, config, message) {
                                $ionicLoading.hide();
                                $state.reload('details');
                                if (data.response) {


                                   
                                   
                                }
                                //LoadingSpinner.hide('pageLoading');
                                }).error(function (data, status, header, config, message) {
                                 $ionicLoading.hide();

                                });
                              };     
});
$scope.sendMail = function(email){
    console.log('here');
     window.open("mailto:"+email+"?subject=Contact Request From millionOpportunities App",'_system');
    }
    $scope.openInExternalBrowser = function(web)
{
 // Open in external browser
 console.log(web.replace(/\s+/g, '+'));
 window.open('http://' + web.replace(/\s+/g, '+'),'_system','location=yes');
};
$scope.openExternal = function($event) {
  if ($event.currentTarget && $event.currentTarget.attributes['data-external'])
   window.open($event.currentTarget.attributes['data-external'], '_blank', 'location=yes');
 }


})
.controller('manageAdsCtrl', 
function ($scope, $state, $http, $ionicPopup, $ionicLoading, $ionicPlatform,$stateParams,$ionicPopover) {
        $scope.$on('$ionicView.beforeEnter', function(event, viewData) {
                                console.debug('[StoryController] $ionicView.beforeEnter');


                                viewData.enableBack = true;                    
                         $ionicLoading.show({
                                template: 'Please Wait...'
                                });
                                $http({
                                    method: 'post',
                                    url: 'http://europa.promaticstechnologies.com/million/webservicemanage_ad',
                                    data:{
                                         'email_id':localStorage ['rEmail']



                                    },
                                headers: {
                                  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                }
                                }).success(function (data, status, header, config, message) {
                                $ionicLoading.hide();
                                if (data.response) {


                                  console.log('email_id' + localStorage ['rEmail'])
                                    $scope.details=angular.fromJson(data.result);  
                                   
                                }
                                //LoadingSpinner.hide('pageLoading');
                                }).error(function (data, status, header, config, message) {
                                 $ionicLoading.hide();

                                });
                               
                                $scope.delete=function(qwerty){

                                  var addid=qwerty;
                                  console.log('addid' +addid)
                                   $ionicLoading.show({
                                template: 'Please Wait...'
                                });
                                $http({
                                    method: 'post',
                                    url: 'http://europa.promaticstechnologies.com/million/webservicedelete_ad',
                                    data:{
                                         'id': addid



                                    },
                                headers: {
                                  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                }
                                }).success(function (data, status, header, config, message) {
                                $ionicLoading.hide();
                                $state.reload('manageAds');
                                if (data.response) {


                                   
                                   
                                }
                                //LoadingSpinner.hide('pageLoading');
                                }).error(function (data, status, header, config, message) {
                                 $ionicLoading.hide();

                                });

};
});
})

 .controller('editpostAddCtrl', 
                                        function ($scope, $state, $http, $ionicPopup,$cordovaFileTransfer, $ionicLoading, $ionicPlatform, $ionicSideMenuDelegate, $stateParams, $ionicPopover,$cordovaCamera,$cordovaImagePicker){
                                        $ionicSideMenuDelegate.canDragContent(false); 
                                        $scope.$on('$ionicView.beforeEnter', function(event, viewData) {

                                        console.debug('[StoryController] $ionicView.beforeEnter');


                                        viewData.enableBack = true;
                                        console.log($stateParams);
                                        console.log($stateParams.id);
                                        var id =$stateParams.id;
                                        localStorage.setItem('eeditid',id);
                                        console.log(id);
                                        /* $ionicLoading.show({
                                        template: 'Please Wait...'
                                        });*/
                                        $http({
                                        method: 'post',
                                        url: 'http://europa.promaticstechnologies.com/million//webservicead_details', 
                                        data:{
                                        'id':id,
                                        },
                                        headers: {
                                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                        }
                                        }).success(function (data, status, header, config, message) {
                                        $ionicLoading.hide();
                                        if (data.response) {
                                        $scope.editdata=angular.fromJson(data.result);
                                        $scope.timedata=data.c_time;
                                        $scope.emailcheck=localStorage ['rEmail'];
                                        if(data.result.contact_no!=null ||data.result.contact_no!='')
                                        {
                                          $scope.check2=true;
                                        }
                                        {
                                          $scope.check2=false; 
                                        }
                                      }
                                        //LoadingSpinner.hide('pageLoading');
                                        }).error(function (data, status, header, config, message) {
                                        $ionicLoading.hide();

                                        });


                                        $scope.next = function(data){

                                        if(data=='Motors')
                                        {
                                        $state.go("tabsController.editpostAdd2");
                                        localStorage.setItem('ename',$scope.editdata.address);
                                        localStorage.setItem('econtact',$scope.editdata.contact_no);
                                        localStorage.setItem('eemail',$scope.editdata.email_id);
                                        localStorage.setItem('ecategory',$scope.editdata.category);
                                        localStorage.setItem('esubcategory',$scope.editdata.subcategory);
                                        localStorage.setItem('eaddress',$scope.editdata.address);
                                        localStorage.setItem('epincode',$scope.editdata.postal_code);
                                        localStorage.setItem('eradio',$scope.editdata.seller_type);
                                        localStorage.setItem('etitle',$scope.editdata.ad_title);
                                       // localStorage.setItem('addescription',$scope.editdata.short_description);
                                        localStorage.setItem('elicence',$scope.licence);

                                        localStorage.setItem('eprice',$scope.price);
                                        localStorage.setItem('emake',$scope.editdata.v_make);
                                        localStorage.setItem('eyear',$scope.editdata.v_purchase_year);
                                        localStorage.setItem('eadmodel',$scope.editdata.model);
                                        localStorage.setItem('efuel',$scope.editdata.fuel_type);
                                        localStorage.setItem('eadbody',$scope.editdata.v_body_type);
                                        localStorage.setItem('etransmission',$scope.editdata.transmission);
                                        localStorage.setItem('ecolor',$scope.editdata.color);
                                        localStorage.setItem('eengine',$scope.editdata.engine_size);
                                        localStorage.setItem('emileage',$scope.editdata.mileage);

                                        console.log('category'+localStorage['ecategory']);
                                        console.log('subcategory'+localStorage['esubcategory']);
                                        console.log('pincode'+localStorage['eaddress']);
                                        console.log('pincode'+localStorage['epincode']);
                                        console.log('radio'+localStorage['eradio']);
                                        console.log('Title'+localStorage['etitle']);
                                        console.log('description'+localStorage['eaddescription']);
                                        console.log('licence'+localStorage['elicence']);
                                        console.log('mileage'+localStorage['emileage']);
                                        console.log('price'+localStorage['eprice']);
                                        //console.log('licence'+$scope.licence);
                                        console.log('make'+localStorage['emake']);
                                        console.log('year'+localStorage['eyear']);
                                        console.log('admodel'+localStorage['eadmodel']);
                                        console.log('fuel'+localStorage['efuel']);
                                        console.log('adnody'+localStorage['eadbody']);
                                        console.log('transmission'+localStorage['etransmission']);
                                        console.log('color'+localStorage['ecolor']);
                                        console.log('engine'+localStorage['eengine']);


                                        }else{
                                        $state.go("tabsController.editpostAdd2");
                                         localStorage.setItem('ename',$scope.editdata.address);
                                        localStorage.setItem('econtact',$scope.editdata.contact_no);
                                        localStorage.setItem('eemail',$scope.editdata.email_id);
                                        localStorage.setItem('ecategory',$scope.editdata.category);
                                        localStorage.setItem('esubcategory',$scope.editdata.subcategory);
                                        localStorage.setItem('eaddress',$scope.editdata.address);
                                        localStorage.setItem('epincode',$scope.editdata.postal_code);
                                        localStorage.setItem('eradio',$scope.editdata.seller_type);
                                        localStorage.setItem('etitle',$scope.editdata.ad_title);
                                        //localStorage.setItem('addescription',$scope.editdata.short_description);
                                        localStorage.setItem('elicence','');
                                        localStorage.setItem('emileage','');
                                        localStorage.setItem('eprice','');
                                        localStorage.setItem('emake','');
                                        localStorage.setItem('eyear','');
                                        localStorage.setItem('eadmodel','');
                                        localStorage.setItem('efuel','');
                                        localStorage.setItem('eadbody','');
                                        localStorage.setItem('etransmission','');
                                        localStorage.setItem('ecolor','');
                                        localStorage.setItem('eengine','');

                                        console.log('category'+localStorage['ecategory']);
                                        console.log('subcategory'+localStorage['esubcategory']);
                                        console.log('pincode'+localStorage['eaddress']);
                                        console.log('pincode'+localStorage['epincode']);
                                        console.log('radio'+localStorage['eradio']);
                                        console.log('Title'+localStorage['etitle']);
                                        console.log('description'+localStorage['eaddescription']);
                                        console.log('licence'+localStorage['elicence']);
                                        console.log('mileage'+localStorage['emileage']);
                                        console.log('price'+localStorage['eprice']);
                                        //console.log('licence'+$scope.licence);
                                        console.log('make'+localStorage['emake']);
                                        console.log('year'+localStorage['eyear']);
                                        console.log('admodel'+localStorage['eadmodel']);
                                        console.log('fuel'+localStorage['efuel']);
                                        console.log('adnody'+localStorage['eadbody']);
                                        console.log('transmission'+localStorage['etransmission']);
                                        console.log('color'+localStorage['ecolor']);
                                        console.log('engine'+localStorage['eengine']);
                                        console.log('admileage'+localStorage['eadmileage']);

                                        }
                                        }
                                        }); 

                                        }) 
.controller('editpostAddCtrl2', 
function ($scope, $state, $http, $ionicPopup,$cordovaFileTransfer, $ionicLoading, $ionicPlatform, $ionicSideMenuDelegate, $stateParams, $ionicPopover,$cordovaCamera,$cordovaImagePicker) {
                $ionicSideMenuDelegate.canDragContent(false); 
                $scope.$on('$ionicView.beforeEnter', function(event, viewData) {

                console.debug('[StoryController] $ionicView.beforeEnter');


                console.log($stateParams);
                console.log($stateParams.id);
                var id =$stateParams.id;
             //   localStorage.setItem('editid',id);
                console.log(id);

              $ionicLoading.show({
                template: 'Please Wait...'
                });
                  $http({
                  method: 'post',
                  url: 'http://europa.promaticstechnologies.com/million//webservicead_details', 
                  data:{
                  'id':localStorage['editid'],
                  },
                  headers: {
                  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                  }
                  }).success(function (data, status, header, config, message) {
                  $ionicLoading.hide();
                  if (data.response) {
                  $scope.editdata=angular.fromJson(data.result);
                  $scope.timedata=data.c_time;
                  $scope.editadid=data.result.ad_id;
                  $scope.total_edit=data.total;
                   localStorage.setItem('total',data.total);
                   localStorage.setItem('pay_status',data.payment_status);
                  localStorage.setItem('edit_id',$scope.editadid);
                  localStorage.setItem('user_id',data.result.user.id);
                  localStorage.setItem('ad_id',data.result.ad_id);
                          }
                          //LoadingSpinner.hide('pageLoading');
                          }).error(function (data, status, header, config, message) {
                          $ionicLoading.hide();

                          });
                    
                  $http({
                  method: 'post',
                  url: 'http://europa.promaticstechnologies.com/million/webservicephotos', 
                  data:{
                  'id':localStorage['editid'],
                  },
                  headers: {
                  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                  }
                  }).success(function (data, status, header, config, message) {
                  $ionicLoading.hide();
                  if (data.response) {
                  
                  $scope.imagedata=angular.fromJson(data.result);
                          }
                          //LoadingSpinner.hide('pageLoading');
                          }).error(function (data, status, header, config, message) {
                          $ionicLoading.hide();

                          });


         $scope.post=function(){


                          $ionicLoading.show({
                          template: 'Please Wait...'
                          });
                          $http({
                          method: 'POST',
                          url: 'http://europa.promaticstechnologies.com/million/webserviceedit_post_ad', 
                          data: 
                          { 
                           'user_id':localStorage['user_id'],
                           'ad_id':localStorage['ad_id'],
                          'id':localStorage['editid'],
                          'category':localStorage['ecategory'],
                          'sub_category':localStorage['esubcategory'],
                          'address':localStorage['ename'],
                          'postal_code':$scope.editdata.postal_code,
                          'seller_type':localStorage['eradio'],
                          'ad_title':localStorage['etitle'],
                          //'short_description':localStorage['addescription'],
                          'plate_number':localStorage['elicence'],
                          'v_mileage':localStorage['emileage'],
                          'price':localStorage['eprice'],
                           'email':localStorage['eemail'],
                          //'email_me':$scope.editdata.email_id,
                          'web_link':$scope.editdata.video_link,
                          'description':$scope.editdata.description,
                          // 'web_check':$scope.editdata.web_link,
                          // 'urgent':$scope.editdata.urgent,
                          // 'featured':$scope.editdata.featured,
                          // 'spolight':$scope.editdata.spolight,
                          'call_me':localStorage['econtact'],
                          'model':localStorage['eadmodel'] ,
                          'color':localStorage['ecolor'],
                          'v_make':localStorage['emake'] ,
                          'v_body_type':localStorage['eadbody'] ,
                          'v_purchase_year': localStorage['eyear'],
                          'fuel_type': localStorage['efuel'],
                          'transmission':localStorage['etransmission'],
                          'engine_size':localStorage['eengine'],
                         'vehicle_details':'', 
                        'video_link':$scope.editdata.video_link,
                        }, 
                        headers: 
                        {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                        }
                        }).success(function(data, status, header, config, message) {

                        $ionicLoading.hide();
                        if(data.response){
                        regsuc();
                        //$state.go("tabsController.millionOpportunities");
                        }else{
                        regfail(); 
                        }
                        }).error(function(data, status, header, config, message) {
                        $ionicLoading.hide();
                        regfail();
                        });
                        }
                        regsuc = function() {
                        var alertPopup = $ionicPopup.alert({
                        title: 'Congratulations !',
                        template: 'post edited successfully ! '
                        });
                        alertPopup.then(function(res) {
                          if(res)
                          {
                            if(localStorage['pay_status']=='succeeded')
                              {
                              $state.go('manageAds');
                                                           // $state.go("tabsController.millionOpportunities");
                               }
                              else{
                                  $state.go("stripes");
                              }
                          }
                        // console.log('User Registered');
                        });
                        };
                        regfail = function() {
                        var alertPopup = $ionicPopup.alert({
                        title: 'Alert',
                        template: ' post failed! '
                        });
                        alertPopup.then(function(res) {
                        //$state.reload('signup');
                        // console.log('User Not Registered');
                        });
                        };



                         $scope.imagedelete=function(imagename){
                         var image=imagename;
                                  console.log('imagename' +imagename)
                                   $ionicLoading.show({
                                template: 'Please Wait...'
                                });
                                $http({
                                    method: 'post',
                                    url: 'http://europa.promaticstechnologies.com/million/webservicedelete_upload_photo',
                                    data:{
                                          'id':localStorage['editid'],
                                         'edit_img': imagename,
                                         'edit_id':localStorage['edit_id'],




                                    },
                                headers: {
                                  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                }
                                }).success(function (data, status, header, config, message) {
                                $ionicLoading.hide();
                                $state.reload('tabsController.editpostAdd2');
                                if (data.response) {


                                   
                                   
                                }
                                //LoadingSpinner.hide('pageLoading');
                                }).error(function (data, status, header, config, message) {
                                 $ionicLoading.hide();

                                });


                       }

                        var template = '<ion-popover-view><ion-header-bar> <h1 class="title">Select option</h1></ion-header-bar> <ion-content ng-controller="editpostAddCtrl2"><div style="width:200px;height:10px"><ion-item style="" id="myDashboard-list-item3" class="item-icon-left" ng-click="takePicture()"><i class="icon ion-camera"></i>Camera</ion-item><ion-item style="" id="myDashboard-list-item4" class="item-icon-left" ng-click="getPicture()"> <i class="icon ion-images"></i>Gallery</ion-item></div></ion-content></ion-popover-view>';

                        $scope.popover = $ionicPopover.fromTemplate(template, {
                        scope: $scope
                        });

                        // .fromTemplateUrl() method



                        $scope.openPopover = function($event,data) {
                        $scope.popover.show($event);
                        //$scope.index=index;
                        var id=data;
                        console.log('editimage :'+id);
                        localStorage.setItem('edit_img',id)
                        console.log('image name'+localStorage['edit_img']);
                        console.log('unic id'+localStorage['edit_id']); 

                        };
                        $scope.closePopover = function() {
                        $scope.popover.hide();
                        };
                        //Cleanup the popover when we're done with it!
                        $scope.$on('$destroy', function() {
                        $scope.popover.remove();
                        });
                        // Execute action on hide popover
                        $scope.$on('popover.hidden', function() {
                        // Execute action
                        });
                        // Execute action on remove popover
                        $scope.$on('popover.removed', function() {
                        // Execute action
                        });

                        });

                       
                        $scope.takePicture = function (options) {
                          $scope.popover.hide();
                        console.log("this is camera function");
                        var path;
                        var options = {
                        quality: 100,
                        targetWidth: 200,
                        targetHeight: 200,
                        sourceType: 1,
                        // post_id :localStorage['post_id'],
                        // email_id: localStorage ['rEmail']
                        };
                        console.log(options);
                        $cordovaCamera.getPicture(options).then(function (imageData) {
                        var url = encodeURI("http://europa.promaticstechnologies.com/million/webserviceedit_upload_photo/"+localStorage['edit_id']+'/'+localStorage ['edit_img']);
                        var fileUrl = imageData;
                        $scope.picture = imageData.split('?')[0];
                        var filename =imageData.split('?')[0];
                        console.log($scope.picture);
                        path = imageData;
                        var options = {
                        fileKey: "files",
                        fileName: filename,
                        httpMethod: 'POST',
                        params: {
                        edit_id :localStorage['edit_id'],
                        edit_img: localStorage ['edit_img'],

                        },

                        trustAllHosts: true,
                        chunkedMode: false,
                        mimeType: "image/jpeg",
                        };
                        console.log(options);
                        options.headers = {
                        Connection: "close"
                        };
                        //console.log("requester id " + localStorage['post_id']);
                        var fileTransfer = new FileTransfer();
                        $cordovaFileTransfer.upload(url, fileUrl, options, true).then(function (result) {
                        console.log("SUCCESS: " + JSON.stringify(result));

                        //alert("success");
                        console.log("uploading image");
                        $scope.picture = imageData.split('?')[0];
                        console.log("result is" + result);
                        console.log("result is" + JSON.stringify(result));

                        $ionicLoading.hide();
                        var confirmPopup = $ionicPopup.alert({
                        title: 'Success!',
                        template: 'You successfully uploaded image.',

                        });
                        confirmPopup.then(function(res) { 

                        if(res)
                        { 
                        
                        }
                        });
                        }, function (err) {
                        console.log("ERROR: " + JSON.stringify(err));
                        $ionicLoading.hide();
                        alert('ERROR:' + JSON.stringify(err));
                        }, function (progress) {
                        console.log('progress');
                        var progress_status = (progress.loaded / progress.total) * 100;
                        $ionicLoading.show({
                        template: "Uploading please wait... "+ Math.floor(progress_status)
                        });


                        });


                        //alert('Photo Saved Sucessfully!');
                        //$state.reload();

                        }, function (err) {
                        console.log(err);
                        });

                        };
                        

                        $scope.getPicture = function () {
                          $scope.popover.hide();
                        console.log("this is getpicture function");
                        //console.log("responderid" + localStorage['rId']);
                        var path;
                        var options = {
                        quality: 75,
                        /* targetWidth: 200,
                        targetHeight: 200,*/
                        sourceType: 0

                        };
                        console.log(options);
                        $cordovaCamera.getPicture(options).then(function (imageData) {
                        
                        console.log($scope.picture);
                        var url = encodeURI("http://europa.promaticstechnologies.com/million/webserviceedit_upload_photo/"+localStorage['edit_id']+'/'+localStorage ['edit_img']);
                        var fileUrl = imageData;
                        $scope.picture = imageData.split('?')[0];
                        var filename =imageData.split('?')[0];
                        console.log($scope.picture);
                        path = imageData;

                       
                        var options = {




                        fileKey: "files",
                        fileName: filename,
                        params: {
                        edit_id :localStorage['edit_id'],
                        edit_img: localStorage ['edit_img'],
                        },
                        trustAllHosts: true,
                        chunkedMode: false,
                        mimeType: "image/jpeg",
                        };
                        //var headers = {'headerParam':'headerValue'};
                        //options.headers = headers;
                        options.headers = {
                        Connection: "close"
                        };

                        //console.log(imageData);
                        //var imgData = readFileAsBinaryString(fileUrl);
                        var fileTransfer = new FileTransfer();
                        $cordovaFileTransfer.upload(url, fileUrl, options, true).then(function (result) {
                        console.log("SUCCESS: " + JSON.stringify(result));
                        //alert("success");
                        console.log("result is" + result);
                        //$scope.picture=path;
                        // alert(JSON.stringify($scope.input));
                        // PostAudition.setAuditionData(localStorage.getItem('audition_id'),$scope.input.firstName,$scope.input.lastName,$scope.input.age,$scope.input.email,$scope.input.phone,$scope.input.url);
                        alert('Photo Saved Sucessfully!');
                        //alert(localStorage.getItem('audition_id')+$scope.input.firstName+$scope.input.lastName+$scope.input.age+$scope.input.email+$scope.input.phone+$scope.input.url);
                        /*$http.post("http://mercury.promaticstechnologies.com/Neotera/ws_sendresponse",{session_id: 1, first_name: $scope.input.firstName,last_name:$scope.input.lastName,age:$scope.input.age,email:$scope.input.email,url:$scope.input.url },function(data){
                        alert(JSON.stringify(data));
                        }, function(err){
                        alert(JSON.stringify(err));
                        $ionicLoading.hide();
                        });*/
                        $ionicLoading.hide();
                        //location.href = location.origin;
                        //$window.location.reload(true);
                        //navigator.app.loadUrl("file:///android_asset/www/index.html");
                        // alert(JSON.stringify(result.response));
                        console.log("result is" + result.result);
                        }, function (err) {
                        console.log("ERROR: " + JSON.stringify(err));
                        $ionicLoading.hide();
                        alert('ERROR:' + JSON.stringify(err));
                        }, function (progress) {
                        var progress_status = (progress.loaded / progress.total) * 100;
                        $ionicLoading.show({
                        template: "Uploading please wait... "
                        });
                        });
                        }, function (err) {
                        console.log("fsfsfsfs" +JSON.stringify(err));
                        });

                        };


}) 
   

   
.controller('filterimageCtrl',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $state, $http, $ionicPopup, $ionicLoading, $cordovaFileTransfer,$ionicPopover,$cordovaDevice, $ionicPlatform,$ionicSideMenuDelegate,$stateParams,$cordovaSocialSharing){
        $ionicSideMenuDelegate.canDragContent(false);  
        $scope.$on('$ionicView.beforeEnter', function(event, viewData) {
    
                                console.debug('[StoryController] $ionicView.beforeEnter');


                               
                                $ionicLoading.show({
                                   template: 'Please Wait...'
                                });
                                $http({
                                    method: 'post',
                                    url: 'http://europa.promaticstechnologies.com/million/webservicecategory',
                                    data:{
                                        'category':localStorage['filter'],
                                    },
                                    headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                    }
                                }).success(function (data, status, header, config, message) {
                                $ionicLoading.hide();
                                if (data.response) {
                                     $scope.detailsdata=angular.fromJson(data.result);
                                      $scope.titledata=data.category;
                                }
                                //LoadingSpinner.hide('pageLoading');
                                }).error(function (data, status, header, config, message) {
                                   $ionicLoading.hide();

                                });

                            $scope.shareAnywhere = function(dis,title,image) {
                           var discription=dis;
                           var title=title;
                           var image=image;
                           var c_image="http://europa.promaticstechnologies.com/million/uploads/"+image.replace('[','').replace('"','').replace('"','').replace(']','');
                          
                         //  var sentence="Audition Name: "+name+", "+"Starting: "+str+", "+"Ending: "+end+", "+"Descripton: "+discription+", "+"Location: "+location;
                           console.log(discription);
                           console.log(title);
                           console.log(image);
                           console.log('co'+c_image);
                         //  console.log(sentence);
                          $cordovaSocialSharing.share(discription,title,c_image,"http://europa.promaticstechnologies.com/million/");
                }     
});
})
   
.controller('favouriteCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $state, $http, $ionicPopup, $ionicLoading, $ionicPlatform,$stateParams,$ionicPopover) {
        $scope.$on('$ionicView.beforeEnter', function(event, viewData) {
                                console.debug('[StoryController] $ionicView.beforeEnter');


                                viewData.enableBack = true;                    
                         $ionicLoading.show({
                                template: 'Please Wait...'
                                });
                                $http({
                                    method: 'post',
                                    url: 'http://europa.promaticstechnologies.com/million/webserviceuser_fav',
                                    data:{
                                         'user_email':localStorage ['rEmail']



                                    },
                                headers: {
                                  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                }
                                }).success(function (data, status, header, config, message) {
                                $ionicLoading.hide();
                                if (data.response) {
                                    $scope.details=angular.fromJson(data.result); 

                                   //  $scope.details=angular.fromJson(data.result.images);  
                                }
                                //LoadingSpinner.hide('pageLoading');
                                }).error(function (data, status, header, config, message) {
                                 $ionicLoading.hide();

                                });
                               
                                $scope.delete=function(qwerty){

                                  var addid=qwerty;
                                  console.log('addid' +addid)
                                   $ionicLoading.show({
                                template: 'Please Wait...'
                                });
                                $http({
                                    method: 'post',
                                    url: 'http://europa.promaticstechnologies.com/million/webservicedelete_ad',
                                    data:{
                                         'id': addid



                                    },
                                headers: {
                                  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                }
                                }).success(function (data, status, header, config, message) {
                                $ionicLoading.hide();
                                $state.reload('manageAds');
                                if (data.response) {


                                   
                                   
                                }
                                //LoadingSpinner.hide('pageLoading');
                                }).error(function (data, status, header, config, message) {
                                 $ionicLoading.hide();

                                });
                                 
                            
                                

    

};
});
})

.controller('settingCtrl', 
  function($scope, $ionicHistory, $state, $http,$cordovaToast, $ionicPopup, $ionicLoading, $cordovaFileTransfer,$cordovaDevice, $ionicPlatform,$ionicSideMenuDelegate,$stateParams,$ionicPopover) {
  $scope.$on('$ionicView.beforeEnter', function(event, viewData) {
                
             $scope.email=localStorage['rEmail'];
               console.log($scope.email);
               viewData.enableBack = true;
               viewData.hideMenu = true;

               $scope.myVar=false;
    //$scope.myVar1=false;
    $scope.toggle= function() {
         //$scope.myVar1[$index] = false;    
         console.log('toggle')
        $scope.myVar = !$scope.myVar;
         // $scope.myVar1=false;
         // $scope.myVar2=false;
         // $scope.myVar3=false;
         // $scope.myVar4=false;

    };
               });
                $scope.logOut = function(){
                  $scope.email=localStorage['rEmail'];
                   console.log($scope.email);
                     // localStorage.setItem('auth', "kuch v");
                    localStorage.clear();
                    //$ionicHistory.clearCache();
                   // $ionicHistory.clearHistory();
                     $state.go("login");
                };


                $scope.Subscribe = function (a) {
                    var email=a;
                        $ionicLoading.show({
                             template: 'Redirecting...'
                        });
                            $http({
                                  method: 'POST',
                                  url: 'http://europa.promaticstechnologies.com/million/webservicenewsletter_subs',
                                  data: {
                                    'email': email,
                                    
                                  },
                                  headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                  }
                            }).success(function (data, status, header, config, message) {
                                 $ionicLoading.hide();
                                    if (data.response) {

                                                  
                                                    // localStorage.setItem('auth', "true");
                                                    // localStorage.setItem('rEmail', $scope.user.email);
                                                    // console.log('user_id' + localStorage ['rEmail']);
                                                    subsuc();
                                                  //localStorage.setItem('status', data.result.status);
                                            } else {
                                                   subfail();
                                                    }
                                }).error(function (data, status, header, config, message) {
                                                   $ionicLoading.hide();
                                               });
             }

          subsuc = function () {
                                  var alertPopup = $ionicPopup.alert({
                                      title: 'Alert',
                                      template: 'Subscribed successfully '
                                  });
                                  alertPopup.then(function (res) {
                                        console.log('Logged-In successfully! ');
                                        if(res){
                                        $state.go('tabsController.millionOpportunities');
                                    }

                                  });
                                  console.log('Login successfull');
                                  
                      }
          subfail = function () {
                                  var alertPopup = $ionicPopup.alert({
                                      title: 'Alert',
                                      template: 'Something went wormg try again'
                                  });
                                  alertPopup.then(function (res) {
                                  //	$state.reload('login');
                                          console.log(res);
                                          console.log('User not login');
                                     });
            };


            $scope.feedback = function (a,b,c,d,e) {
                  var exp=a;
                   var def=b;
                    var enh=c;
                     var rec=d;
                      var radio=e;

            	    if(localStorage['auth']=='true'){
            	    	var user=localStorage ['rEmail'];
            	    }else{
            	    	var user='Guest';
            	    }
                        $ionicLoading.show({
                             template: 'Redirecting...'
                        });
                            $http({
                                  method: 'POST',
                                  url: 'http://europa.promaticstechnologies.com/million/webservicefeedback',
                                  data: {
                                    'experience': exp,
                                    'difficulty': def,
                                    'improve_service': enh,
                                    'recommend_friend': rec,
                                    'rating':radio,
                                    'user': user
                                  },
                                  headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                  }
                            }).success(function (data, status, header, config, message) {
                                 $ionicLoading.hide();
                                    if (data.response) {

                                                  
                                                    // localStorage.setItem('auth', "true");
                                                    // localStorage.setItem('rEmail', $scope.user.email);
                                                    // console.log('user_id' + localStorage ['rEmail']);
                                                    fedsuc();
                                                  //localStorage.setItem('status', data.result.status);
                                            } else {
                                                   fedfail();
                                                    }
                                }).error(function (data, status, header, config, message) {
                                                   $ionicLoading.hide();
                                               });
             }

          fedsuc = function () {
                                  var alertPopup = $ionicPopup.alert({
                                      title: 'Alert',
                                      template: 'Feedback submitted successfully '
                                  });
                                  alertPopup.then(function (res) {
                                        console.log('Logged-In successfully! ');
                                        if(res){
                                        $state.go('tabsController.millionOpportunities');
                                    }

                                  });
                                  console.log('Login successfull');
                                  
                      }
          fedfail = function () {
                                  var alertPopup = $ionicPopup.alert({
                                      title: 'Alert',
                                      template: 'Something went wormg try again'
                                  });
                                  alertPopup.then(function (res) {
                                  //	$state.reload('login');
                                          console.log(res);
                                          console.log('User not login');
                                     });
            };
                
})
 
   

 .controller('helpCtrl',
function ($scope, $state, $http, $ionicPopup, $ionicLoading, $ionicPlatform,$stateParams,$ionicPopover) {
                            
                

                $ionicLoading.show({
                                template: 'Please Wait...'
                                });
                                $http({
                                    method: 'post',
                                    url: 'http://europa.promaticstechnologies.com/million/webservicehelp_us',
                                    data:{
                                        

                                    },
                                headers: {
                                  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                }
                                }).success(function (data, status, header, config, message) {
                                $ionicLoading.hide();
                                if (data.response) {
                                        $scope.details=angular.fromJson(data.result); 
                                   
                                }
                                //LoadingSpinner.hide('pageLoading');
                                }).error(function (data, status, header, config, message) {
                                 $ionicLoading.hide();

                                });



})
   
.controller('millionOpportunitiesCtrl',
function ($scope, $state, $http, $ionicPopup, $ionicLoading, $ionicPlatform,$stateParams,$ionicPopover) {
    $scope.$on('$ionicView.beforeEnter', function(event, viewData) {

                              console.debug('[StoryController] $ionicView.beforeEnter');
                              viewData.enableBack = false;



                  $http({
                                  method: 'post',
                                  url: 'http://europa.promaticstechnologies.com/million/webservicepost_details',
                                  data: {
                                    
                              },
                              headers: {
                               'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                              }
                              }).success(function (data, status, header, config, message) {
                                 $ionicLoading.hide();
                                  if (data.response) {
                                   // console.log('response'+data.response);
                                 //   console.log('response'+JSON.stringify(data.result));
                                     
                                     $scope.details=angular.fromJson(data.result);
                                   }
                             // console.log('count'+localStorage['count']);
                              }).error(function (data, status, header, config, message) {
                                   // $ionicLoading.hide();
                              });
                         
                        $scope.postad1=function(){
                         $state.go("tabsController.postAdd");
                        }
                        $scope.chat=function(){
                                            var confirmPopup = $ionicPopup.confirm({
                                                title: 'Confirmation',
                                                template:'for chat you redict to website.if you want to proceed press ok! otherwise cancel', 
                                              });
                                                confirmPopup.then(function(res) {
                                                  if(res){
                                                  window.open('http://europa.promaticstechnologies.com/million/', '_system', 'location=yes'); 
                                                  return false
                                                  }
                                                console.log('limit check');
                                            });
                        }
                        $scope.filter=function(val){

                           localStorage.setItem('filter',val);
                           console.log('title'+localStorage['filter']);
                         $state.go("filterimage");
                        }
                         $scope.like=function(id){

                                  var post_id=id;
                                  console.log('addid' +post_id)
                                   $ionicLoading.show({
                                template: 'Please Wait...'
                                });
                                $http({
                                    method: 'post',
                                    url: 'http://europa.promaticstechnologies.com/million/webservicelike',
                                    data:{
                                         'post_id':post_id,
                                         'user_email':localStorage ['rEmail']



                                    },
                                headers: {
                                  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                }
                                }).success(function (data, status, header, config, message) {
                               // $ionicLoading.hide();
                                $state.reload('tabsController.millionOpportunities');
                                if (data.response) {    
                                }
                                //LoadingSpinner.hide('pageLoading');
                                }).error(function (data, status, header, config, message) {
                                 $ionicLoading.hide();

                                });
                              }; 
                              $scope.unlike=function(id){

                                  var post_id=id;
                                  console.log('unlike' +post_id)
                                   $ionicLoading.show({
                                template: 'Please Wait...'
                                });
                                $http({
                                    method: 'post',
                                    url: 'http://europa.promaticstechnologies.com/million/webserviceunlike',
                                    data:{
                                         'id':post_id,
                                     },
                                headers: {
                                  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                }
                                }).success(function (data, status, header, config, message) {
                                //$ionicLoading.hide();
                                $state.reload('tabsController.millionOpportunities');
                                if (data.response) {    
                                }
                                //LoadingSpinner.hide('pageLoading');
                                }).error(function (data, status, header, config, message) {
                                 $ionicLoading.hide();

                                });
                              }; 
                       }); 
})


   
.controller('aboutUsCtrl',
  function ($scope, $state, $http, $ionicPopup, $ionicLoading, $ionicPlatform,$stateParams,$ionicPopover) {
                            
                

								$ionicLoading.show({
                                template: 'Please Wait...'
                                });
                                $http({
                                    method: 'post',
                                    url: 'http://europa.promaticstechnologies.com/million/webserviceabout_us',
                                    data:{
                                        

                                    },
                                headers: {
                                  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                }
                                }).success(function (data, status, header, config, message) {
                                $ionicLoading.hide();
                                if (data.response) {
                                    $scope.details=angular.fromJson(data.result[0]);   
                                }
                                //LoadingSpinner.hide('pageLoading');
                                }).error(function (data, status, header, config, message) {
                                 $ionicLoading.hide();

                                });



})



   
.controller('howItWorkCtrl',  function ($scope, $state, $http, $ionicPopup, $ionicLoading, $ionicPlatform,$stateParams,$ionicPopover) {
                            
                            var viewdata;

                                
                                $http({
                                  method: 'POST',
                                  url: 'http://europa.promaticstechnologies.com/million/webservicehow_it_works',
                                  data:{
                                      

                                  },
                                 
                              }).then(function mySucces(response) {
      $scope.title = response.data;
      $scope.description=response.data;
    }, function myError(response) {
      $scope.title = response.statusText;
  });
})
                                //  console.log('data submitted');
                             //console.log('check'+viewdata);
                                  
                               // }
                                       //   invitesfail();
                                    
                                //LoadingSpinner.hide('pageLoading');
                            //    }).error(function (data, status, header, config, message) {
                           //     $ionicLoading.hide();

                               
.controller('contactUsCtrl',
function ($scope, $state, $http, $ionicPopup, $ionicLoading, $ionicPlatform,$ionicSideMenuDelegate,$stateParams,$ionicPopover) {

 

              $scope.submit=function(){
                    $ionicLoading.show({
                                           template: 'Please Wait...'
                                        });
                            $http({
                                            method: 'POST',
                                            url: 'http://europa.promaticstechnologies.com/million/webservicecontact_and_email', 
                                            data: 
                                            {  
                                               
                                                'name':$scope.name,
                                                'email':$scope.email,
                                                'message':$scope.message,
                                                
                                               
                                               
                                             }, 
                                            headers: 
                                            {
                                              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                            }
                                              }).success(function(data, status, header, config, message) {

                                          $ionicLoading.hide();
                                          if(data.response){
                                            regsuc();
                                            //$state.go("login");
                                             $state.reload("contactUs");
                                          }else{
                                            regfail(); 
                                          }
                                  }).error(function(data, status, header, config, message) {
                                    $ionicLoading.hide();
                                    regfail();
                                    });
                   }
                    regsuc = function() {
                            
                            
                           
                                  var alertPopup = $ionicPopup.alert({
                                      title: 'Thank you for submitted your query!',
                                      template: 'we will reply you shortly!'
                                  });
                                  alertPopup.then(function (res) {
                                        console.log('query submitted! ');

                                        //$state.go('tabsController.millionOpportunities');

                                  });
                                 // console.log('Login successfull');
                                  
                      
                          
                    };
                  regfail = function() {
                           
                           console.log('error');
                           
            };
         $scope.sendMail = function(email){
    console.log('here');
     window.open("mailto:'admin@millionsopportunities.international'?subject=Contact Request From millionOpportunities App",'_system');
    }
    $scope.openInExternalBrowser = function(web)
{
 // Open in external browser
 console.log(web.replace(/\s+/g, '+'));
 window.open('http://' + web.replace(/\s+/g, '+'),'_system','location=yes');
};



})
   

.controller('searchCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $state, $http, $ionicPopup,$cordovaFileTransfer, $ionicLoading, $ionicPlatform, $ionicSideMenuDelegate, $stateParams, $ionicPopover,$cordovaCamera,$cordovaImagePicker){
  $scope.$on('$ionicView.beforeEnter', function(event, viewData) {

                              console.debug('[StoryController] $ionicView.beforeEnter');
                              viewData.enableBack = false;


                                 });
                       $scope.search=function(){
                         $ionicLoading.show({
                                template: 'Please Wait...'
                                });

                                $http({
                                    method: 'post',
                                    url: 'http://europa.promaticstechnologies.com/million/webservicesearch',
                                    data: {
                                              'search':$scope.searchAdd,
                                              'category':$scope.category,
                                           },
                              headers: {
                               'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                              }
                              }).success(function (data, status, header, config, message) {
                                 $ionicLoading.hide();
                                  if (data.response) {
                                   // console.log('response'+data.response);
                                 //   console.log('response'+JSON.stringify(data.result));
                                   //  console.log('balle');
                                     $scope.details=angular.fromJson(data.result);
                                     console.log('lenght'+$scope.details.length);
                                     if($scope.details=='No result Found'){
                                    var alertPopup = $ionicPopup.alert({
                                         title: 'Alert',
                                         template: ' No result found!! '
                                         });
                                         alertPopup.then(function(res) {
                                          $state.go('tabsController.millionOpportunities');
                                         console.log('User Not Registered');
                                         });
                                   } 
                                }
                                    
                             // console.log('count'+localStorage['count']);
                              }).error(function (data, status, header, config, message) {
                                  $ionicLoading.hide();
                              });
                            }
                           

})
.controller('profileCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $state, $http, $ionicPopup,$cordovaFileTransfer, $ionicLoading, $ionicPlatform, $ionicSideMenuDelegate, $stateParams, $ionicPopover,$cordovaCamera,$cordovaImagePicker) {
$scope.$on('$ionicView.beforeEnter', function(event, viewData) {
$scope.myVar=false;
    //$scope.myVar1=false;
    $scope.toggle= function() {
         //$scope.myVar1[$index] = false;    
         console.log('toggle')
        $scope.myVar = !$scope.myVar;
         $scope.myVar1=false;
         $scope.myVar2=false;
         $scope.myVar3=false;
         $scope.myVar4=false;

    };


    $scope.myVar1=false;
    //$scope.myVar1=false;
    $scope.pass= function() {
         //$scope.myVar1[$index] = false;    
         console.log('toggle')
        $scope.myVar1 = !$scope.myVar1;
         $scope.myVar=false;
         $scope.myVar2=false;
         $scope.myVar3=false;
         $scope.myVar4=false;


    };
    $scope.myVar2=false;
    //$scope.myVar1=false;
    $scope.email= function() {
         //$scope.myVar1[$index] = false;    
         console.log('toggle')
        $scope.myVar2= !$scope.myVar2;
        $scope.myVar1=false;
         $scope.myVar=false;
         $scope.myVar3=false;
         $scope.myVar4=false;


    };
    $scope.myVar3=false;
    //$scope.myVar1=false;
    $scope.cv= function() {
         //$scope.myVar1[$index] = false;    
         console.log('toggle')
        $scope.myVar3 = !$scope.myVar3;
        $scope.myVar1=false;
         $scope.myVar2=false;
         $scope.myVar=false;
         $scope.myVar4=false;


    };
    $scope.myVar4=false;
    //$scope.myVar1=false;
    $scope.account= function() {
         //$scope.myVar1[$index] = false;    
         console.log('toggle')
        $scope.myVar4 = !$scope.myVar4;
        $scope.myVar1=false;
         $scope.myVar2=false;
         $scope.myVar3=false;
         $scope.myVar=false;


    };
  });

    $scope.contact=function(a,b,c){
       var first=a;
       var second=b;
       var contact=c;
       console.log("first"+a);
      $ionicLoading.show({
                                           template: 'Please Wait...'
                                        });
                            $http({
                                            method: 'POST',
                                            url: 'http://europa.promaticstechnologies.com/million/webserviceupdate_user_info', 
                                            data: 
                                            {  
                                               'email':localStorage['rEmail'] ,
                                                'firstname':first,
                                                'lastname':second,
                                                'contact_no':contact
                                                
                                               
                                               
                                             }, 
                                            headers: 
                                            {
                                              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                            }
                                              }).success(function(data, status, header, config, message) {
                                                    
                                          $ionicLoading.hide();
                                          
                                          if(data){
                                           consuc();
                                           // $state.go("login");
                                          }else{
                                           confail(); 
                                          }
                                  }).error(function(data, status, header, config, message) {
                                    $ionicLoading.hide();
                                    confail();
                                    });
                   
                    consuc = function() {
                            var alertPopup = $ionicPopup.alert({
                            title: 'Check your email ',
                            template: 'Contact details updated successfully!  '
                            });
                            alertPopup.then(function(res) {
                                
                                if(res)
                                {
                                  $state.reload('profile');
                                }
                                
                            console.log('password resetccc');
                            });
                    };
                  confail = function() {
                           var alertPopup = $ionicPopup.alert({
                           title: 'Alert',
                           template: ' Network Error !!! please try after some time '
                           });
                           alertPopup.then(function(res) {
                            $state.reload('profile');
                           console.log('failed');
                           });
            };
        

    }

    $scope.Passwordchanged=function(a,b){
       var old=a;
       var pass=b;
      
       console.log("first"+a);
      $ionicLoading.show({
                                           template: 'Please Wait...'
                                        });
                            $http({
                                            method: 'POST',
                                            url: 'http://europa.promaticstechnologies.com/million/webservicechange_user_password', 
                                            data: 
                                            {  
                                               'email':localStorage['rEmail'] ,
                                                'old_password':old,
                                                'password':pass,
                                               
                                             }, 
                                            headers: 
                                            {
                                              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                            }
                                              }).success(function(data, status, header, config, message) {

                                          $ionicLoading.hide();
                                          $state.reload('profile');
                                          if(data){
                                           passsuc();
                                           // $state.go("login");
                                          }else{
                                            passfail(); 
                                          }
                                  }).error(function(data, status, header, config, message) {
                                    $ionicLoading.hide();
                                    passfail(); 
                                    });
                   
                    passsuc = function() {
                            var alertPopup = $ionicPopup.alert({
                            title: 'Check your email ',
                            template: 'Password  updated successfully!  '
                            });
                            alertPopup.then(function(res) {
                              if(res){
                               
                                  $state.reload('profile');
                              }
                              
                               
                            console.log('password reset');
                            });
                    };
                  passfail = function() {
                           var alertPopup = $ionicPopup.alert({
                           title: 'Alert',
                           template: ' Network Error !!! please try after some time '
                           });
                           alertPopup.then(function(res) {
                            $state.reload('profile');
                           });
            };
        

    }

    $scope.changeemail=function(a){
       var email=a;
       //var pass=b;
      
       console.log("first"+a);
      $ionicLoading.show({
                                           template: 'Please Wait...'
                                        });
                            $http({
                                            method: 'POST',
                                            url: 'http://europa.promaticstechnologies.com/million/webservicechange_emailweb', 
                                            data: 
                                            {  
                                               'email':email ,
                                               'old_email':localStorage['rEmail'] ,
                                               
                                               
                                               
                                             }, 
                                            headers: 
                                            {
                                              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                            }
                                              }).success(function(data, status, header, config, message) {
                                              $state.reload('profile');
                                          $ionicLoading.hide();
                                          if(data.response){
                                           // regsuc();
                                           // $state.go("login");
                                          }else{
                                           // regfail(); 
                                          }
                                  }).error(function(data, status, header, config, message) {
                                    $ionicLoading.hide();
                                   // regfail();
                                    });
                   
            //         regsuc = function() {
            //                 var alertPopup = $ionicPopup.alert({
            //                 title: 'Check your email ',
            //                 template: 'Reset your password! '
            //                 });
            //                 alertPopup.then(function(res) {
            //                 console.log('password reset');
            //                 });
            //         };
            //       regfail = function() {
            //                var alertPopup = $ionicPopup.alert({
            //                title: 'Alert',
            //                template: ' email id not existed '
            //                });
            //                alertPopup.then(function(res) {
            //                 $state.reload('signup');
            //                console.log('failed');
            //                });
            // };
        

    }

    $scope.deactivate=function(a){
       var reason=a;
      
      
       console.log("first"+a);
      $ionicLoading.show({
                                           template: 'Please Wait...'
                                        });
                            $http({
                                            method: 'POST',
                                            url: ' http://europa.promaticstechnologies.com/million/webserviceuser_deactivate', 
                                            data: 
                                            {  
                                               'email':localStorage['rEmail'] ,
                                                'reason':reason,
                                                
                                                
                                               
                                               
                                             }, 
                                            headers: 
                                            {
                                              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                            }
                                              }).success(function(data, status, header, config, message) {

                                          $ionicLoading.hide();
                                          if(data.message=='User deactivated!'){
                                            localStorage.clear();
                                              //$ionicHistory.clearCache();
                                             // $ionicHistory.clearHistory();
                                               

                                           // decsuc();
                                           // $state.go("login");
                                          }else{
                                            $state.reload('profile');
                                           decfail(); 
                                          }
                                  }).error(function(data, status, header, config, message) {
                                    $ionicLoading.hide();
                                   decfail();
                                    });
                   
                  decsuc = function() {
                            var alertPopup = $ionicPopup.alert({
                            title: 'Check your email ',
                            template: 'Account deactivated successfully!  '
                            });
                            alertPopup.then(function(res) {
                                    if(res)
                                    {
                                  $state.go("tabsController.millionOpportunities");
                               }
                            console.log('password reset');
                            });
                    };
                  decfail = function() {
                           var alertPopup = $ionicPopup.alert({
                           title: 'Alert',
                           template: ' Network Error !!! please try after some time '
                           });
                           alertPopup.then(function(res) {
                            $state.reload('profile');
                           });
            };
        

    }
    
                            var res_id=localStorage['rId'];
                          //  var session_id=localStorage['createsessionId'];
                            // console.log(' new session id'+ session_id);
                            $scope.showValue=function(){
                              fileChooser.open(function(uri) {
                             // $scope.btn_val=uri;
                             console.log("file"+uri);
                              uploadFile(uri);
                              });
                              }
                              function uploadFile(uri){
                           var url = encodeURI("http://europa.promaticstechnologies.com/million/webserviceresume_upload");
                           var params=new Object();
                             //params.session_id=session_id;
                                    var filename = uri;
                                    console.log('first '+filename);
                              filename=filename;
                                  console.log('second '+filename);
                                    var files = uri;
                                    var options = {
                                        fileKey: "files",
                                        files: files,
                                        httpMethod: 'POST',
                                        trustAllHosts: true,
                                        chunkedMode: false,
                                params:params,
                                mimeType: 'Application/'+files.split(".").pop()
                                     
                                    };
                                               options.headers = {
                                        Connection: "close"
                                    };
                                     $cordovaFileTransfer.upload(url, fileUrl, options, true).then(function (result) {
                                        result = angular.fromJson(angular.fromJson(result));
                                        console.log("SUCCESS: " + result.response['message']);
                                        console.log("videoname " + result.response.result);
                                        console.log("result " + JSON.stringify(result));
                                $ionicLoading.hide();
                                
                                 
                                      var alertPopup = $ionicPopup.alert({
                                         title: 'Success!',
                                         template: 'You successfully uploaded  document. ',

                                    });
                                     alertPopup.then(function(res) {  
                                          
                                        });
                                }, function (err) {
                                      console.log(JSON.stringify(err));
                              $ionicLoading.hide();
                                       var alertPopup = $ionicPopup.alert({
                                  title: 'Error!',
                                  template: "Network Error Occurred. Try again later!"
                                });
                                alertPopup.then(function (err) {
                                    console.log(err);
                                        });
                                    }, function (progress) {
                                        var progress_status = (progress.loaded / progress.total) * 100;
                                        $ionicLoading.show({
                                            template: "Uploading "+ Math.floor(progress_status) +"%......"
                                        });
                                    });
                          
                          }
})


.controller('forgetCtrl',function ($scope, $state, $http, $ionicPopup,$cordovaFileTransfer, $ionicLoading, $ionicPlatform, $ionicSideMenuDelegate, $stateParams, $ionicPopover,$cordovaCamera,$cordovaImagePicker) {


  $scope.send=function(){
                    $ionicLoading.show({
                                           template: 'Please Wait...'
                                        });
                            $http({
                                            method: 'POST',
                                            url: 'http://europa.promaticstechnologies.com/million/webserviceforget_pass', 
                                            data: 
                                            {  
                                               'email':$scope.email ,
                                                
                                                
                                               
                                               
                                             }, 
                                            headers: 
                                            {
                                              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                            }
                                              }).success(function(data, status, header, config, message) {

                                          $ionicLoading.hide();
                                          if(data.response){
                                            regsuc();
                                           // $state.go("login");
                                          }else{
                                            regfail(); 
                                          }
                                  }).error(function(data, status, header, config, message) {
                                    $ionicLoading.hide();
                                    regfail();
                                    });
                   }
                    regsuc = function() {
                            var alertPopup = $ionicPopup.alert({
                            title: 'Check your email ',
                            template: 'Reset your password! '
                            });
                            alertPopup.then(function(res) {
                            console.log('password reset');
                            });
                    };
                  regfail = function() {
                           var alertPopup = $ionicPopup.alert({
                           title: 'Alert',
                           template: ' email id not existed '
                           });
                           alertPopup.then(function(res) {
                            $state.reload('signup');
                           console.log('failed');
                           });
            };
        


})

   
   
.controller('pageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])



/*.controller('creatCtrl',
function ($scope, $stateParams, $ionicSlideBoxDelegate,$http, $state,$ionicLoading) {
  $scope.$on('$ionicView.beforeEnter', function(event, viewData) {

                              console.debug('[StoryController] $ionicView.beforeEnter');

  $http({
                  method: 'post',
                  url: 'http://europa.promaticstechnologies.com/million/webservicephotos', 
                  data:{
                  'id':localStorage['editid'],
                  },
                  headers: {
                  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                  }
                  }).success(function (data, status, header, config, message) {
                  $ionicLoading.hide();
                  if (data.response) {
                  
                  $scope.imagedata=angular.fromJson(data.result);
                          }
                          //LoadingSpinner.hide('pageLoading');
                          }).error(function (data, status, header, config, message) {
                          $ionicLoading.hide();

                          });
                          });

  // Called each time the slide changes

  $scope.images = ['1', '2', '3'];;
  console.log('array'+$scope.images);
  $scope.slideChanged = function($index) {
    $scope.slideIndex = index;
  };

})*/

.controller('creatCtrl',
function ($scope, $stateParams, $ionicSlideBoxDelegate,$ionicSideMenuDelegate,$http, $state,$ionicLoading) {
   $ionicSideMenuDelegate.canDragContent(false);  
 $scope.$on('$ionicView.beforeEnter', function(event, viewData) {

                              console.debug('[StoryController] $ionicView.beforeEnter');

  $http({
                  method: 'post',
                  url: 'http://europa.promaticstechnologies.com/million/webservicephotos', 
                  data:{
                    'id':'71',


                  },
                  headers: {
                  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                  }
                  }).success(function (data, status, header, config, message) {

                     $scope.nextSlide = function() {
      $ionicSlideBoxDelegate.next();

   }

                  $ionicLoading.hide();
                  if (data.response) {
                  
                  $scope.images=angular.fromJson(data.result);
                  $scope.imagedata=angular.fromJson(data.result);
                  $scope.zoom=function(image){
                    $ionicScrollDelegate.zoomBy(2.0,true);
                  }
    }
                          //LoadingSpinner.hide('pageLoading');
                          }).error(function (data, status, header, config, message) {
                          $ionicLoading.hide();

                          });
                          });

  // Called each time the slide changes

 
})
/*function($scope, $ionicSlideBoxDelegate) {
   $scope.nextSlide = function() {
      $ionicSlideBoxDelegate.next();
   }
})*/

    .controller('howCtrl',  function ($scope, $state, $http, $ionicPopup, $ionicLoading, $ionicPlatform,$stateParams,$ionicPopover) {
                            
                

								$ionicLoading.show({
                                template: 'Please Wait...'
                                });
                                $http({
                                    method: 'post',
                                    url: 'http://europa.promaticstechnologies.com/million/webservicehow_it_works',
                                    data:{
                                        

                                    },
                                headers: {
                                  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                }
                                }).success(function (data, status, header, config, message) {
                                $ionicLoading.hide();
                                if (data.response) {
                                    $scope.details=angular.fromJson(data.result[0]);   
                                }
                                //LoadingSpinner.hide('pageLoading');
                                }).error(function (data, status, header, config, message) {
                                 $ionicLoading.hide();

                                });



})
.controller('payCtrl', function($scope,PaypalService,$http,$ionicSideMenuDelegate){
 $ionicSideMenuDelegate.canDragContent(false);

  $scope.$on('$ionicView.beforeEnter', function(event, viewData) {

                              console.debug('[StoryController] $ionicView.beforeEnter');

  $http({
                  method: 'post',
                  url: 'http://europa.promaticstechnologies.com/million/webservicephotos',
                  data:{
                  'id':'63',
                  },
                  headers: {
                  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                  }
                  }).success(function (data, status, header, config, message) {

                  
                  if (data.response) {
                  
                  $scope.images=angular.fromJson(data.result);




                          }
                          //LoadingSpinner.hide('pageLoading');
                          }).error(function (data, status, header, config, message) {
                         

                          });
                          });

   ionic.Platform.ready(function(){

    $scope.swiper = {};
 
    $scope.onReadySwiper = function (swiper) {
 
        swiper.on('slideChangeStart', function () {
            console.log('slide start');
        });
         
        swiper.on('onSlideChangeEnd', function () {
            console.log('slide end');
        });     
    };

  
  $scope.cards = [];
 
  $scope.addCard = function(img, name) {
      var newCard = {image: img, title: name};
      newCard.id = Math.random();
      $scope.cards.unshift(angular.extend({}, newCard));
  };
 
  $scope.addCards = function(count) {
    $http.get('http://api.randomuser.me/?results=' + count).then(function(value) {
      angular.forEach(value.data.results, function (v) {
        $scope.addCard(v.user.picture.medium, v.user.email);
      });
      $scope.showCards = true;
    });
  };
 
  $scope.addCards(1);
 
  $scope.cardSwiped = function(index) {
    $scope.addCards(1);
  };
 
  $scope.cardDestroyed = function(index) {
    $scope.cards.splice(index, 1);
  };

  $scope.doAnything = function() {
    var card = $ionicSwipeCardDelegate.getSwipeableCard($scope);
    card.swipe();
  };

 $scope.payPal = function( ) { 
   console.log('pay ctrl'); 
    PaypalService.initPaymentUI().then(function () {
                  PaypalService.makePayment($scope.total(), "Total").then();
    });
   }
 });
})

.controller('paypalCtrl', function($cordovaInAppBrowser,$rootScope,$scope) {
  
    console.log("paypal link");
  var options = {
      location: 'yes',
      clearcache: 'yes',
      toolbar: 'no'
    };

  document.addEventListener("deviceready", function () {
    $cordovaInAppBrowser.open('https://www.sandbox.paypal.com/webapps/adaptivepayment/flow/pay', '_blank', options)
      .then(function(event) {
        // success
      })
      .catch(function(event) {
        // error
      });


    $cordovaInAppBrowser.close();

  }, false);

  $rootScope.$on('$cordovaInAppBrowser:loadstart', function(e, event){

  });

  $rootScope.$on('$cordovaInAppBrowser:loadstop', function(e, event){
    // insert CSS via code / file
    $cordovaInAppBrowser.insertCSS({
      code: 'body {background-color:blue;}'
    });

    // insert Javascript via code / file
    $cordovaInAppBrowser.executeScript({
      file: 'script.js'
    });
  });

  $rootScope.$on('$cordovaInAppBrowser:loaderror', function(e, event){

  });

  $rootScope.$on('$cordovaInAppBrowser:exit', function(e, event){

  });

})   








.controller('ChatCtrl', function($scope, $stateParams, $ionicPopup, $timeout, Socket, Chat) {

  $scope.data = {};
  $scope.data.message = "";
  $scope.messages = Chat.getMessages();
  var typing = false;
  var lastTypingTime;
  var TYPING_TIMER_LENGTH = 250;

  Socket.on('connect',function(){

    if(!$scope.data.username){
      var nicknamePopup = $ionicPopup.show({
      template: '<input id="usr-input" type="text" ng-model="data.username" autofocus>',
      title: 'What\'s your nickname?',
      scope: $scope,
      buttons: [{
          text: '<b>Save</b>',
          type: 'button-positive',
          onTap: function(e) {
            if (!$scope.data.username) {
              e.preventDefault();
            } else {
              return $scope.data.username;
            }
          }
        }]
      });
      nicknamePopup.then(function(username) {
        Socket.emit('add user',username);
        Chat.setUsername(username);
      });
    }

  });

  Chat.scrollBottom();

  if($stateParams.username){
    $scope.data.message = "@" + $stateParams.username;
    document.getElementById("msg-input").focus();
  } 

  var sendUpdateTyping = function(){
    if (!typing) {
      typing = true;
      Socket.emit('typing');
    }
    lastTypingTime = (new Date()).getTime();
    $timeout(function () {
      var typingTimer = (new Date()).getTime();
      var timeDiff = typingTimer - lastTypingTime;
      if (timeDiff >= TYPING_TIMER_LENGTH && typing) {
        Socket.emit('stop typing');
        typing = false;
      }
    }, TYPING_TIMER_LENGTH);
  };

  $scope.updateTyping = function(){
    sendUpdateTyping();
  };

  $scope.messageIsMine = function(username){
    return $scope.data.username === username;
  };

  $scope.getBubbleClass = function(username){
    var classname = 'from-them';
    if($scope.messageIsMine(username)){
      classname = 'from-me';
    }
    return classname;
  };

  $scope.sendMessage = function(msg){
    Chat.sendMessage(msg);
    $scope.data.message = "";
  };

}) 








///////////////////////////////////////////////////////////////










///////////////////////////////////////////////////

.controller('PeopleCtrl', function($scope, Users) {
  $scope.data = Users.getUsers();
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, Chat) {
  $scope.username = Chat.getUsername();  
}, true);
 


////////////////////////////////////////just checking code ctrl

//.controller('postAddCtrl', function($scope, $cordovaImagePicker, $ionicPlatform) {
 /* $scope.takePicture = function (options) {
  
      var options = {
         quality : 75,
         targetWidth: 200,
         targetHeight: 200,
         sourceType: 1
      };

      Camera.getPicture(options).then(function(imageData) {
         $scope.picture = imageData;;
      }, function(err) {
         console.log(err);
      });
    
   };
$scope.getPicture = function (options) {
  
      var options = {
       quality : 75,
         targetWidth: 200,
         targetHeight: 200,
         sourceType: 0

    
      };

     Camera.getPicture(options).then(function(imageData) {
         $scope.picture = imageData;;
      }, function(error) {
      // error getting photos
    });


};
})*/
