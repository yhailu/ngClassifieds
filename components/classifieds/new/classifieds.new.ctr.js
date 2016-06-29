(function () {
    "use strict";

    angular.module('ngClassifieds').controller('newClassifiedsCtrl', function ($scope, $state, $mdSidenav, $timeout, $mdDialog, classifiedsFactory, $mdComponentRegistry) {
        var vm = this;
        vm.closeSidebar = closeSidebar;

        $timeout(function () {
            $mdComponentRegistry.when('left').then(function () {
                $mdSidenav('left').open();
            });

        });

        $scope.$watch('vm.sidenavOpen', function (sidenav) {
            if (sidenav === false) {
                $mdComponentRegistry.when('left').then(function () {
                    $mdSidenav('left').close().then(function () {
                        $state.go('classifieds');
                    });
                });
            }
        });

        function closeSidebar() {
            vm.sidenavOpen = false;
        }
    })
})();