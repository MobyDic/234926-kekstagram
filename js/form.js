'use strict';

(function () {

  var overlay = document.querySelector('.upload-overlay');
  var selectImage = document.querySelector('#upload-select-image');
  var uploadFile = document.querySelector('#upload-file');
  var formCancel = overlay.querySelector('.upload-form-cancel');
  var filter = overlay.querySelector('.upload-filter-controls');
  // Изменение размеров фото
  var scaleElement = document.querySelector('.upload-resize-controls');
  var pictureElement = document.querySelector('.filter-image-preview');
  var SCALE_STEP = 25;
  var INITIAL_SCALE = 100;

  uploadFile.addEventListener('change', openFormElement);
  formCancel.addEventListener('click', hideFormElement);

  document.addEventListener('keydown', function (evt) {
    if (window.isCloseEvent(evt)) {
      hideFormElement();
    }
  });

  function openFormElement() {
    overlay.classList.remove('invisible');
    selectImage.classList.add('invisible');
    window.initializeScale(scaleElement, SCALE_STEP, INITIAL_SCALE, adjustScale);
    window.initializeFilters(filter);
  }

  function hideFormElement() {
    window.unsubscribeScaleHandlers(scaleElement);
    window.unsubscribeFiltersHandlers(filter);
    selectImage.classList.remove('invisible');
    overlay.classList.add('invisible');
    uploadFile.value = '';
  }

  var adjustScale = function (scale) {
    pictureElement.style.transform = 'scale(' + scale / 100 + ')';
  };


  hideFormElement();

})();

