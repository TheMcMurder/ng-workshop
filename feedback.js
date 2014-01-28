angular.module('app').controller('Feedback', function($scope, FeedbackService, $firebase) {
  $scope.workshop = {
    score : 10
  };

  $scope.save = FeedbackService.sendFeedback;

  var formattedDate = FeedbackService.generateFormattedDate();
  var url = 'https://ng-workshop.firebaseio.com/chat/' + formattedDate;
  var chatRef = new Firebase(url);

  // This is the magic line for 3 way binding!
  $scope.messages = $firebase(chatRef);
  
  $scope.addMessage = function(e) {
    if (e.keyCode != 13) return;
    $scope.messages.$add({
      from: $scope.workshop.attendee,
      body: $scope.msg
    });
    $scope.msg = '';
  };
});