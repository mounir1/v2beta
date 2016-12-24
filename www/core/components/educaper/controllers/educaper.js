// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

angular.module('mm.core.educaper')

/**
 * Controller to handle the list of sections in App settings.
 *
 * @module mm.core.settings
 * @ngdoc controller
 * @name mmSettingsListCtrl
 */
.controller('mmEducaperCtrl', function($scope, $ionicPopup, $ionicModal) {
    $scope.isIOS = ionic.Platform.isIOS();
    $scope.Departments = null;

    $scope.ShowDep = function() {
        $scope.Departments = [{
                name: "Engineering Department",
                id: "E"
            },
            {
                name: "College of Law",
                id: "L"
            },
            {
                name: "School of Tourizm",
                id: "t"
            },
            {
                name: "Business Administration",
                id: ""
            }
        ];
    };
    $scope.hide = function(dep) {
        $scope.Departments = null;
        console.log("you clicked on " + dep.name);
    };
    $scope.showAlert = function() {
        var alertPopup = $ionicPopup.alert({
            title: 'TODO',
            template: 'This function is under construction !'
        });
        console.log("showAlert");;
        alertPopup.then(function(res) {
            console.log('Thank you for not eating my delicious ice cream cone');
        });
    };
    // $scope.RateTheLesson = function() {
    //         $ionicPopup.show({
    //             scope: $scope,
    //             title: 'Rate!',
    //             templateUrl: 'core/components/educaper/templates/rate.html'

    //         });
    //     }
    // Setup help modal.
    $ionicModal.fromTemplateUrl('core/components/educaper/templates/rate.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(helpModal) {
        $scope.showrate = function() {
            helpModal.show();
        };
        $scope.closerate = function() {
            helpModal.hide();
        };
        $scope.$on('$destroy', function() {
            helpModal.remove();
        });
    });

    $ionicModal.fromTemplateUrl('core/components/educaper/templates/comment.html', {
        scope: $scope,
        animation: 'slide-in-down'
    }).then(function(helpModal) {
        $scope.showcomment = function() {
            helpModal.show();
        };
        $scope.closecomment = function() {
            helpModal.hide();
        };
        $scope.$on('$destroy', function() {
            helpModal.remove();
        });
    });
    // $ionicModal.fromTemplateUrl('core/components/educaper/templates/rate.html', {
    //     scope: $scope,
    //     animation: 'slide-in-up'
    // }).then(function(helpModal) {
    //     $scope.RateTheLesson = function() {
    //         helpModal.show();
    //     };
    //     $scope.closeHelp = function() {
    //         helpModal.hide();
    //     };
    //     $scope.$on('$destroy', function() {
    //         helpModal.remove();
    //     });
    // });
});