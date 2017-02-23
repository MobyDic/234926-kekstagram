'use strict';

(function () {
  window.isCloseEvent = (function (evt) {
    var ESCAPE_KEY_CODE = 27;

    return function (evt) {
      return evt.keyCode === ESCAPE_KEY_CODE;
    };
  })();

  window.isActivateEvent = (function (evt) {
    var SPACE_KEY_CODE = 32;
    var ENTER_KEY_CODE = 13;

    return function (evt) {
      return evt.keyCode && (evt.keyCode === ENTER_KEY_CODE || evt.keyCode === SPACE_KEY_CODE);
    };
  })();
} ) ();
