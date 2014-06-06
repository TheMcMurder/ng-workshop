angular.module('app').controller('Feedback', function($scope){
  $scope.workshop = {
    score : 10
  };

  $scope.save = function(workshop){
    alert('Thanks for the ' + workshop.score + '!');
  };
});