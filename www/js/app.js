// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','chart.js'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
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

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    

    // setup an abstract state for the tabs directive
    .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
    })

    // Each tab has its own nav history stack:

    .state('tab.dash', {
        url: '/dash',
        views: {
            'tab-dash': {
                templateUrl: 'templates/tab-dash.html',
                controller: 'DashCtrl'
            }
        }
    })

    .state('tab.chats', {
        url: '/chats',
        views: {
            'tab-chats': {
                templateUrl: 'templates/tab-chats.html',
                controller: 'ChatsCtrl'
            }
        }
    })
        .state('tab.chat-detail', {
            url: '/chats/:chatId',
            views: {
                'tab-chats': {
                    templateUrl: 'templates/chat-detail.html',
                    controller: 'ChatDetailCtrl'
                }
            }
        })

    .state('tab.account', {
        url: '/account',
        views: {
            'tab-account': {
                templateUrl: 'templates/tab-account.html',
                controller: 'AccountCtrl'
            }
        }
    })

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        // controller: 'AppCtrl'
    })

    .state('app.home', {
        url: '/home',
        views: {
            menuContent: {
                templateUrl: 'templates/app.html',
                controller: 'AppCtrl'
            }
        }
    })
    .state('projects', {
        url: '/',
        templateUrl: 'templates/projects.html',
        controller: 'ProjectsCtrl'
    })

    .state('project-detail', {
        url: '/project-detail/:projectId',
        templateUrl: 'templates/project-detail.html',
        controller: 'ProjectDetailCtrl'
    })

    .state('project-detail-overall', {
        url: '/project-detail-overall/:projectId',
        templateUrl: 'templates/project-detail-overall.html',
        controller: 'ProjectDetailOverallCtrl'
    })

    .state('graph-chart', {
        url: '/graph-chart/:projectId/:type',
        templateUrl: 'templates/graph-chart.html',
        controller: 'GraphChartCtrl'
    })

    .state('app.browse', {
        url: '/browse',
        views: {
            'menuContent': {
                templateUrl: 'templates/browse.html'
            }
        }
    })

    .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
        // parent: 'tab'
    });

    // // if none of the above states are matched, use this as the fallback
    // $urlRouterProvider.otherwise('/tab/dash');
    $urlRouterProvider.otherwise("/");
});
app.directive('tooltip', function () {
    return {
        restrict: 'C',
        link: function (scope, element, attrs) {
            // if (attrs.title) {
                var $element = $(element);
                $element.tooltipster({
                    animation: attrs.animation,
                    trigger: "click",
                    position: "right",
                    theme: 'tooltipster-light',
                    positionTracker: true,
                    maxWidth: 500,
                    contentAsHTML: true,
                    contentCloning:true
                });
            // }
        }
    };
});