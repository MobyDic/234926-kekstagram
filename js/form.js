'use strict';

(function () {

  var overlay = document.querySelector('.upload-overlay');
  var selectImage = document.querySelector('#upload-select-image');
  var uploadFile = document.querySelector('#upload-file');
  var formCancel = overlay.querySelector('.upload-form-cancel');

  // открытие - закрытие формы
  hideFormElement();

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
  }

  function hideFormElement() {
    overlay.classList.add('invisible');
    selectImage.classList.remove('invisible');
  }


  // Изменение размеров фото
  var scaleElement = document.querySelector('.upload-resize-controls');
  var pictureElement = document.querySelector('.filter-image-preview');
  var SCALE_STEP = 25;
  var INITIAL_SCALE = 100;

  var adjustScale = function (scale) {
    pictureElement.style.transform = 'scale(' + (scale + 45) / 100 + ')';
  };

  window.initializeScale(scaleElement, SCALE_STEP, INITIAL_SCALE, adjustScale);

  // Переключение фильтров
  var filter = overlay.querySelector('.upload-filter-controls');
  window.initializeFilters(filter, window.applyFilter);

} ) ();

