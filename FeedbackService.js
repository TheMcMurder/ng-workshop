angular.module('app').factory('FeedbackService', function($log) {
  return {
    sendFeedback: function(workshop) {
      function addZero(num) {
        return (num < 10 ? '0' : '') + num;
      }
      var d = new Date();
      var formattedDate = d.getFullYear() + '-' + addZero(d.getMonth() + 1) + '-' + addZero(d.getDate());
      var url = 'https://ng-workshop.firebaseio.com/feedback/' + formattedDate;
      var feedback = new Firebase(url);
      $log.info('Thanks for the ' + workshop.score + '!');
      feedback.push(workshop);
    }
  }
});