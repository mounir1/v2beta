angular.module('mm.core.educaper')

.controller('mmEndOfCourseCtrl', function($scope, $mmSettingsDelegate) {
    $scope.isIOS = ionic.Platform.isIOS();
    $scope.handlers = $mmSettingsDelegate.getHandlers();
    $scope.areHandlersLoaded = $mmSettingsDelegate.areHandlersLoaded;
});