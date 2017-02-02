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

filter.addEventListener('click', handleOnClickFilter);

function handleOnClickFilter(e) {
    var activeFilter = findFilter(e.target);

    for (var j = 0; j < photoFilters.length; j++) {
      photo.classList.remove(findFilter(photoFilters[j]));
    }

    photo.classList.add(activeFilter);
}

function findFilter(filter) {
  return 'filter-' + filter.value;
}

// Изменения масштаба
var imagePreview = document.querySelector('.filter-image-preview');
var decControl = overlay.querySelector('.upload-resize-controls-button-dec');
var incControl = overlay.querySelector('.upload-resize-controls-button-inc');
var valControl = overlay.querySelector('.upload-resize-controls-value');
var step = 25;

decControl.addEventListener('click', function() {
  var val = valControl.value;
  var nextval = trimLast(val) - step;

  if (nextval < 0) nextval = 0;
  resize(nextval);
});

incControl.addEventListener('click', function() {
  var val = valControl.value;
  var nextval = trimLast(val) + step;

  if (nextval > 100) nextval = 100;

  resize(nextval);
});

function trimLast(val) {
  return +val.substr(0, val.length - 1);
}

function resize(size) {
  var scale = (size + 45) / 100;
  imagePreview.style.transform = 'scale(' + scale + ')';
  valControl.value = size + '%';
}
