


angular.module('HRM', [
    'ui.router',
    'wall.controller',
    'auth.controller',
    'project.controller',
    'leave.controller',
    'main.controller',
    'ngMaterial',
    'firebase'
])

var config = {
apiKey: "AIzaSyB3KmqQ8pi2HLx5AbWUhQtC3Hjg4aVsy6s",
authDomain: "tgcgh-12f3d.firebaseapp.com",
databaseURL: "https://tgcgh-12f3d.firebaseio.com",
storageBucket: "tgcgh-12f3d.appspot.com",
messagingSenderId: "287082907847"
};
firebase.initializeApp(config);
.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

        .state('login', {
            url: '/login',
            templateUrl: 'auth/login.html',
            controller: 'authCtrl'
        })

        .state('main', {
            url: '/',
            templateUrl: 'wall/wall.html',
            controller: 'wallCtrl'
        })

        .state('leave', {
            url: '/leave',
            templateUrl: 'leave/leave.html',
            controller: 'leaveCtrl'
        })

        .state('project', {
            url: '/project',
            templateUrl: 'project/project.html',
            controller: 'projectCtrl'
        })


    $urlRouterProvider.otherwise('/');
})
