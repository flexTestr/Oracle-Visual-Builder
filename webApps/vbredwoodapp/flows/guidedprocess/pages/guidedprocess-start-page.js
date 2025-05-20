define([], () => {
  'use strict';

  class PageModule {

    checkWithUser() {
      var self = this;
      var checkPromise = new Promise(function (resolve) {
        // save away the reference to the promise resolvling function
        self.userInputComplete = resolve;

        // Show the dialog
        document.getElementById('dirtyDataWarningDialog').open();
      });

      return checkPromise;
    };

    userResponse(response) {
      var self = this;
      if (self.userInputComplete) {
        self.userInputComplete(response);
        delete self.userInputComplete;
      }
    };
  }

  return PageModule;
});
