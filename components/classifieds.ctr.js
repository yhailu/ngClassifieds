(function () {
    "use strict";

    angular.module("ngClassifieds")
        .controller("classifieds.Ctrl", function ($scope, $http, classifiedsFactory, $mdSidenav, $mdToast) {

            classifiedsFactory.getClassifieds().then(function (classifieds) {
                $scope.classifieds = classifieds.data;
            });

            var contact = {
                name: "Will",
                phone: "07738392938",
                email: "will@will.com"
            };

            $scope.openSidebar = function () {
                $mdSidenav('left').open();
            };

            $scope.closeSidebar = function () {
                $mdSidenav('left').close();
            };

            $scope.saveClassified = function (classified) {
                if (classified) {
                    classified.contact = contact;
                    $scope.classifieds.push(classified);
                    $scope.classified = {};
                    $scope.closeSidebar();
                    $mdToast.show($mdToast.simple().content("Classified Saved!").position("top, right").hideDelay(3000))
                }
            }
        });
})();