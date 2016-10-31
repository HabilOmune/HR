angular.module('auth.controller', ['firebase'])

.controller('loginCtrl', function ($rootScope,$firebaseAuth, $scope, $state, $http, $compile, $timeout) {

   $scope.login = function (frm){
     firebase.auth().signInWithEmailAndPassword(frm.email, frm.pwd)
     .then(function(res){
       console.log("login success");
       $state.transitionTo('main');
      // console.log(res.uid);
      var user = res.uid;
      $scope.requestNotificationPermision(user);
     })
     .catch(function(error) {
       // Handle Errors here.
       var errorCode = error.code;
       var errorMessage = error.message;
       console.log(errorMessage+ " " + errorCode);
     });
   };

   $scope.requestNotificationPermision = function(user){
     var userId = user;
     const  messaging = firebase.messaging();
     messaging.requestPermission()
     .then(function(){
         alert("Permission Granted");
         return messaging.getToken()
         .then(function(token){
           firebase.database().ref('users/' + userId).set({
                  FCMTOKEN:token
           });
         })
         .catch(function(err){
          console.log(err);
         });
     })
     .catch(function(err){
       console.log(err)
     });
    };








})

.controller('signupCtrl', function ($rootScope,$firebaseObject,$firebaseAuth, $scope, $state, $http, $compile, $timeout) {
//////////////CREATE ACCOUNT/////////////////////
 $scope.signup = function(frm){
   var Auth = $firebaseAuth();
   //////////CREATE USER///////////
   Auth.$createUserWithEmailAndPassword(frm.email, frm.pwd)
     .then(function(firebaseUser) {
       $scope.message = "User created with uid: " + firebaseUser.uid;
       var user = firebaseUser.uid;
       alert($scope.message);
       $rootScope.requestNotificationPermision(user);
     }).catch(function(error) {
       $scope.error = error;
       alert($scope.error);
     });
 };
//////////////NOTIFICATION PERMISSION//////////////
$rootScope.requestNotificationPermision = function(user){
  var userId = user;
  const  messaging = firebase.messaging();
  messaging.requestPermission()
  .then(function(){
      alert("Permission Granted");
      return messaging.getToken()
      .then(function(token){
        firebase.database().ref('users/' + userId).set({
               FCMTOKEN:token
        });
        $state.transitionTo('/');
      })
      .catch(function(err){
       console.log(err);
      });
  })
  .catch(function(err){
    console.log(err)
  });

 };
});
