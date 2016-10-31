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



.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

        .state('login', {
            url: '/login',
            templateUrl: 'auth/login.html',
            controller: 'loginCtrl'
        })

        .state('signup',{
          url: '/signup',
          templateUrl: 'auth/signup.html',
          controller: 'signupCtrl'
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


    $urlRouterProvider.otherwise('/login');
})
