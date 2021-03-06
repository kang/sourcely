angular.module('storyList')
.factory('toggleUnread', ['$window', function(win) {
  var unreadToggle = true;
  return function(task) {
    if(task) {
      unreadToggle = !unreadToggle;
    }
    return unreadToggle;
  };
}]);
