var overlay =  document.querySelector('.upload-overlay');
var selectImage = document.querySelector('#upload-select-image');
var uploadFile = document.querySelector('#upload-file');
var formCancel = overlay.querySelector(".upload-form-cancel");

overlay.classList.add('invisible');
selectImage.classList.remove('invisible');

uploadFile.addEventListener('change', function() {
  selectImage.classList.add('invisible');
  overlay.classList.remove('invisible');
});

formCancel.addEventListener('click', function() {
  overlay.classList.add('invisible');
  selectImage.classList.remove('invisible');
});

// Переключение фильтров
var photo = overlay.querySelector('.upload-form-preview');
var filter = overlay.querySelector('.upload-filter-controls');
var photoFilters = filter.querySelectorAll('input[name="upload-filter"]');

filter.addEventListener('click', window.initializeFilters);

// function handleOnClickFilter(e) {

//     var activeFilter = (e.type === 'click') ? findFilter(e.target) : replaceFilter(e.getAttribute("for"));
//     console.log(activeFilter);

//     for (var j = 0; j < photoFilters.length; j++) {
//       photo.classList.remove(findFilter(photoFilters[j]));
//     }

//     photo.classList.add(activeFilter);

// }

// function findFilter(filter) {
//   return 'filter-' + filter.value;
// }

// function replaceFilter(filter) {
//   return filter.replace('upload-','');
// }

// Изменения масштаба
var imagePreview = document.querySelector('.filter-image-preview');
var decControl = overlay.querySelector('.upload-resize-controls-button-dec');
var incControl = overlay.querySelector('.upload-resize-controls-button-inc');
var valControl = overlay.querySelector('.upload-resize-controls-value');
var step = 25;

window.initializeScale(decControl, step, valControl);
window.initializeScale(incControl, step, valControl);

// decControl.addEventListener('click', function() {
//   var val = valControl.value;
//   var nextval = trimLast(val) - step;

//   if (nextval < 0) nextval = 0;
//   resize(nextval);
// });

// incControl.addEventListener('click', function() {
//   var val = valControl.value;
//   var nextval = trimLast(val) + step;

//   if (nextval > 100) nextval = 100;

//   resize(nextval);
// });

// function trimLast(val) {
//   return +val.substr(0, val.length - 1);
// }

// function resize(size) {
//   var scale = (size + 45) / 100;
//   imagePreview.style.transform = 'scale(' + scale + ')';
//   valControl.value = size + '%';
// }

// Работа с формой с клавиатуры
var filterLabels = filter.querySelectorAll('label');
var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;
var SPACE_KEY_CODE = 32;

document.addEventListener('keydown', function(evt) {
  if (isCloseEvent(evt)){
    hideFormElement();
  }
});

filter.addEventListener('keydown', function(evt) {
  if (isActivateEvent(evt)) {
    handleOnKeydownFilter(evt);
  }
});

var hideFormElement = function() {
  overlay.classList.add('invisible');
  selectImage.classList.remove('invisible');
};

function handleOnKeydownFilter(e) {
  window.initializeFilters(e.target);
  toggleRadio(e.target);
}


var isCloseEvent = function(evt) {
  return evt.keyCode === ESCAPE_KEY_CODE;
};


var isActivateEvent = function(evt) {
  return evt.keyCode && (evt.keyCode === ENTER_KEY_CODE || evt.keyCode === SPACE_KEY_CODE);
};

function toggleRadio(element) {
  for (var k = 0; k < filterLabels.length; k++) {
    filterLabels[k].setAttribute("aria-checked", "false");
  }
  element.setAttribute("aria-checked", "true");
}
