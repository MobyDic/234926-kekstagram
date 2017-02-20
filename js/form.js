'use strict';

var overlay = document.querySelector('.upload-overlay');
var selectImage = document.querySelector('#upload-select-image');
var uploadFile = document.querySelector('#upload-file');
var formCancel = overlay.querySelector('.upload-form-cancel');

overlay.classList.add('invisible');
selectImage.classList.remove('invisible');

uploadFile.addEventListener('change', function () {
  selectImage.classList.add('invisible');
  overlay.classList.remove('invisible');
});

formCancel.addEventListener('click', function () {
  overlay.classList.add('invisible');
  selectImage.classList.remove('invisible');
});

var filter = overlay.querySelector('.upload-filter-controls');
filter.addEventListener('click', window.initializeFilters);

var imagePreview = document.querySelector('.filter-image-preview');

window.initializeScale(decControl, step, valControl);
window.initializeScale(incControl, step, valControl);


var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;
var SPACE_KEY_CODE = 32;

document.addEventListener('keydown', function (evt) {
  if (isCloseEvent(evt)){
    hideFormElement();
  }
});

filter.addEventListener('keydown', function (evt) {
  if (isActivateEvent(evt)) {
    handleOnKeydownFilter(evt);
  }
});

var hideFormElement = function () {
  overlay.classList.add('invisible');
  selectImage.classList.remove('invisible');
};

var isCloseEvent = function (evt) {
  return evt.keyCode === ESCAPE_KEY_CODE;
};

var isActivateEvent = function (evt) {
  return evt.keyCode && (evt.keyCode === ENTER_KEY_CODE || evt.keyCode === SPACE_KEY_CODE);
};
