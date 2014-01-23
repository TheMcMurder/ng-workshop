angular.module('app').controller('Feedback', function($scope, FeedbackService) {
  $scope.workshop = {
    score : 10
  };

  $scope.save = FeedbackService.sendFeedback;
});