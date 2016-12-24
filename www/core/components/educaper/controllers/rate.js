angular.module('mm.core.educaper')

.controller('mmEndOfCourseCtrl', function($scope, $rootScope $mmSettingsDelegate) {
    $scope.isIOS = ionic.Platform.isIOS();
    $scope.handlers = $mmSettingsDelegate.getHandlers();
    $scope.areHandlersLoaded = $mmSettingsDelegate.areHandlersLoaded;
  
  $scope.rate = function(rate){
      // do something 
      $rootScope.done = true ;
  }
});