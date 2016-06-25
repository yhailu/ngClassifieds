(function () {
    "use strict";

    angular.module("ngClassifieds")
        .controller("classifieds.Ctrl", function ($scope, $http, classifiedsFactory, $mdSidenav) {

            classifiedsFactory.getClassifieds().then(function (classifieds) {
                $scope.classifieds = classifieds.data;
            });

            $scope.openSidebar = function () {
                $mdSidenav('left').open();
            };

            $scope.closeSidebar = function () {
                $mdSidenav('left').close();
            };

            $scope.saveClassified = function (classified) {
                if (classified) {
                    $scope.classifieds.push(classified);
                    $scope.classified = {};
                }
            }
        });
})();