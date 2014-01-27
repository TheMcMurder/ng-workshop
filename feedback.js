angular.module('app').controller('Feedback', function($scope, FeedbackService, $firebase) {
  $scope.workshop = {
    score : 10
  };

  $scope.save = FeedbackService.sendFeedback;
  function addZero(num) {
    return (num < 10 ? '0' : '') + num;
  }
  var d = new Date();
  var formattedDate = d.getFullYear() + '-' + addZero(d.getMonth() + 1) + '-' + addZero(d.getDate());
  var url = 'https://ng-workshop.firebaseio.com/chat/' + formattedDate;
  var chatRef = new Firebase(url);
  $scope.messages = $firebase(chatRef);
  $scope.addMessage = function(e) {
    if (e.keyCode != 13) return;
    $scope.messages.$add({from: $scope.workshop.attendee, body: $scope.msg});
    $scope.msg = '';
  };
  $scope.autoscroll = true;
});