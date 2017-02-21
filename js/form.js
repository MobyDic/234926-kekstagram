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
var scaleElement = document.querySelector('.upload-resize-controls');
var pictureElement = document.querySelector('.filter-image-preview');
var SCALE_STEP = 25;
var INITIAL_SCALE = 100;

var adjustScale = function(scale) {
  pictureElement.style.transform = 'scale(' + (scale + 45)/ 100 + ')';
};

window.initializeScale(scaleElement, SCALE_STEP, INITIAL_SCALE, adjustScale);

// Переключение фильтров
var filter = overlay.querySelector('.upload-filter-controls');
var photo = overlay.querySelector('.upload-form-preview');
var photoFilters = filter.querySelectorAll('input[name="upload-filter"]');

var applyFilter = function(e) {
  var activeFilter = (e.type === 'click') ? findFilter(e.target) : replaceFilter(e.getAttribute('for'));
  for (var j = 0; j < photoFilters.length; j++) {
    photo.classList.remove(findFilter(photoFilters[j]));
  }

  photo.classList.add(activeFilter);
  toggleRadio(activeFilter);
}

window.initializeFilters(filter, applyFilter);
