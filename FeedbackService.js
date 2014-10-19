angular.module('app').factory('FeedbackService', function($log) {
  var service = {
    generateFormattedDate: function() {
      function addZero(num) {
        return (num < 10 ? '0' : '') + num;
      }
      var d = new Date();
      var formattedDate = d.getFullYear() + '-' + addZero(d.getMonth() + 1) + '-' + addZero(d.getDate());
      return formattedDate;
    },
    sendFeedback: function(workshop) {
      var formattedDate = service.generateFormattedDate();
      var url = 'https://burning-inferno-7602.firebaseio.com/feedback/' + formattedDate;
      var feedback = new Firebase(url);
      $log.info('Thanks for the ' + workshop.score + '!');
      feedback.push(workshop);
    }
  }
  return service;
});
