angular.module('starter.controllers', [])

.factory('Geo', function(){
    var Geo = this;
    Geo.latitude = "55.67610";
    Geo.longitude = "12.56834";
    Geo.city = "Copenhagen";
    return this;
})

.factory('Auth', function(){
    var Auth = this;
    Auth.username = "Unknow";
    Auth.firstName = "Unknow";
    Auth.lastName = "Unknow";
    return this;
})

.controller('AppCtrl', function($scope, $ionicModal, $timeout, Auth, Geo) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    $scope.geo = Geo;
    // Form data for the login modal
    $scope.loginData = {
    };

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
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
        $scope.loginData.username = 'demo';
        $scope.loginData.password = 'ABC';
        var url = 'http://banhngononline.com/test.php';
        console.log('Doing login', $scope.loginData);
        $.ajax({
            type: "POST",
            //cache:false,
            //timeout:10000,
            data: {},
            dataType: 'json',
            url: url,
            crossDomain: true,
            beforeSend: function() {

            },
            complete: function() {

            },
            success: function(data_result) {
                Auth.firstName = data_result.data.firstName;
                Auth.lastName = data_result.data.lastName;
                $scope.closeLogin();
                Geo.city = "Ho Chi Minh";
                $scope.auth = Auth;
            },
            error: function(xhr, ajaxOptions, thrownError) {
                alert('Error');
            }
        });
        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        // $timeout(function() {
        //   $scope.closeLogin();
        // }, 1000);
    };
    $scope.doSomething = function() {
        console.log('Doing some thing', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function() {
            $scope.closeLogin();
        }, 1000);
    };
})

.controller('PlaylistsCtrl', function($scope) {
    $scope.playlists = [{
        title: 'Reggae',
        id: 1
    }, {
        title: 'Chill',
        id: 2
    }, {
        title: 'Dubstep',
        id: 3
    }, {
        title: 'Indie',
        id: 4
    }, {
        title: 'Rap',
        id: 5
    }, {
        title: 'Cowbell',
        id: 6
    }];
    console.log('Here')
})

.controller('PlaylistCtrl', function($scope, $stateParams) {});