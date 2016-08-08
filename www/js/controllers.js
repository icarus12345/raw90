angular.module('starter.controllers', [])

.factory('Geo', function() {
    var Geo = this;
    Geo.latitude = "55.67610";
    Geo.longitude = "12.56834";
    Geo.city = "Copenhagen";
    return this;
})

.factory('Auth', function() {
    var Auth = this;
    Auth.username = undefined;
    Auth.firstName = undefined;
    Auth.lastName = undefined;
    Auth.authorization = function($scope, $ionicModal) {
        $scope.loginData = {
            username: 'Username',
            password: 'Password'
        };
        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('templates/login.html', {
            scope: $scope
        }).then(function(modal) {
            $scope.modal = modal;
            // Modal loaded
            if (!Auth.username)
                $scope.login();
        });

        // Triggered in the login modal to close it
        $scope.closeLogin = function() {
            $scope.modal.hide();
        };

        // Open the login modal
        $scope.login = function() {
            $scope.modal.show();
        };

        // Perform the login action when the user submits the login form
        $scope.doLogin = function() {
            Auth.username = 'Username';
            Auth.password = 'Password';
            console.log('Doing login', $scope.loginData);
            $scope.closeLogin();
        };
    }
    return this;
})

.controller('AppCtrl', function($scope, $ionicModal, $timeout, Auth, Geo) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    Auth.authorization($scope, $ionicModal);

})

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
        Chats.remove(chat);
    };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})


.controller('LoginCtrl', function($scope, $location, $ionicModal, $timeout, $state, Auth, Geo) {
    $scope.geo = Geo;
    $scope.loginData = {
        username: 'demo'
    };
    $scope.doLogin = function() {
        console.log('ABC');
        $location.path("/app/home");
        // $location.path("/tab/dash");
        // window.location = ("/#/tab/dash");
        // $state.go("/tab/dash");
    };
})

.controller('ProjectsCtrl', function($scope, $ionicModal, $timeout, Auth, Projects) {
    $scope.windowHeight = (window.innerHeight);
    $scope.projects = Projects.all();;
    $scope.toggleGroup = function(project) {
        project.active = !project.active;
        // if ($scope.isGroupShown(project)) {
        //     $scope.shownGroup = null;
        // } else {
        //     $scope.shownGroup = project;
        // }
    };
    $scope.isGroupShown = function(project) {
        return project.active;
        return $scope.shownGroup === project;
    };
    Auth.authorization($scope, $ionicModal);
})

.controller('ProjectDetailCtrl', function($scope, $stateParams, $ionicHistory, Projects) {
    $scope.project = Projects.get($stateParams.projectId);
    $scope.rawGoBack = function () { $ionicHistory.goBack(); }
})

.controller('ProjectDetailOverallCtrl', function($scope, $stateParams, Projects) {
    $scope.project = Projects.get($stateParams.projectId);
    $scope.ocw = {
        labels: ["1", "2", "3", "4", "5", "6", "7"],
        data: [
            [65, 59, 90, 81, 56, 55, 40],
            [28, 48, 40, 19, 96, 27, 100]
        ],
        colors: [ '#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
        options: {
            legendTemplate : '<ul class="tc-chart-js-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
        }
    };

})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
});