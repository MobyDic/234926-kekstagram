'use strict';

var overlay = document.querySelector('.upload-overlay');
var selectImage = document.querySelector('#upload-select-image');
var uploadFile = document.querySelector('#upload-file');
var formCancel = overlay.querySelector('.upload-form-cancel');

// открытие - закрытие формы
hideFormElement();

uploadFile.addEventListener('change', openFormElement);
formCancel.addEventListener('click', openFormElement);

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
var decControl = overlay.querySelector('.upload-resize-controls-button-dec');
var incControl = overlay.querySelector('.upload-resize-controls-button-inc');
var valControl = overlay.querySelector('.upload-resize-controls-value');
var step = 25;
window.initializeScale(decControl, step, valControl);
window.initializeScale(incControl, step, valControl);

// Переключение фильтров
var filter = overlay.querySelector('.upload-filter-controls');
window.initializeFilters(filter);
