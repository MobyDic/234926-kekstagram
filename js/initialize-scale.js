'use strict';

window.initializeScale = function (element, step, valCont) {

  element.addEventListener('click', function() {
    var val = valCont.value;
    var toggle = element.classList.contains('upload-resize-controls-button-dec');
    var nextval = (toggle) ? trimLast(val) - step : trimLast(val) + step;

    if (nextval < 0) nextval = 0;
    if (nextval > 100) nextval = 100;

    resize(nextval);
  });
}

function trimLast (val) {
  return +val.substr(0, val.length - 1);
}

function resize (size) {
  var imagePreview = document.querySelector('.filter-image-preview');
  var scale = (size + 45) / 100;
  imagePreview.style.transform = 'scale(' + scale + ')';
  valControl.value = size + '%';
}