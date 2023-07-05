/* global AmpConfig, AmpAccess */

function handleLogin () {
  angular.module('studioScaleApp')
      .constant('sessionLogout', () => true)
      .constant('isOnline', true)
      .constant('requestOnlineNotifications', () => true);


  angular.element(document).ready(function () {
      angular.bootstrap( document, ['studioScaleApp'] );
  });
}

handleLogin();

/**
 * Application Cache Events
 */

window.applicationCache.addEventListener('updateready', function(e) {
    if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
      // Browser downloaded a new app cache.
      // Swap it in and reload the page to get the new hotness.
      window.applicationCache.swapCache();
      if (confirm('A new version of your app is available. Please, load it?')) {
        window.location.reload();
      }
    } else {
      // Manifest hasn't changed. Nothing new to serve.
    }
}, false);
