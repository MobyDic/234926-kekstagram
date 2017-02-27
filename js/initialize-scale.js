'use strict';

(function () {
  window.initializeScale = function (scaleElement, SCALE_STEP, INITIAL_SCALE, adjustScale) {
    var scaleElementClassName = scaleElement.getAttribute('class');
    var decControl = scaleElement.querySelector('.' + scaleElementClassName + '-button-dec');
    var incControl = scaleElement.querySelector('.' + scaleElementClassName + '-button-inc');
    var valControl = scaleElement.querySelector('.' + scaleElementClassName + '-value');
    adjustScale(INITIAL_SCALE);
    valControl.value = '100%';  // вставить по ТЗ

    decControl.addEventListener('click', function () {
      var nextval = trimLast(valControl.value) - SCALE_STEP;
      if (nextval < 25) {
        nextval = 25;
      }
      valControl.value = nextval + '%';
      adjustScale(nextval);
    });

    incControl.addEventListener('click', function () {
      var nextval = trimLast(valControl.value) + SCALE_STEP;
      if (nextval > INITIAL_SCALE) {
        nextval = INITIAL_SCALE;
      }
      valControl.value = nextval + '%';
      adjustScale(nextval);
    });
  };

  function trimLast(val) {
    return +val.substr(0, val.length - 1);
  }
})();
