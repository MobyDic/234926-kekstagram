'use strict';

window.initializeFilters = (function () {

  return function () {
    filter.addEventListener('click', logicFilters);

    filter.addEventListener('keydown', function (evt) {
      if (window.isActivateEvent(evt)) {
        window.logicFilters(evt.target);
      }
    });
  }
}) ();

function logicFilters (e) {
  var photo = overlay.querySelector('.upload-form-preview');
  var photoFilters = filter.querySelectorAll('input[name="upload-filter"]');

  var activeFilter = (e.type === 'click') ? findFilter(e.target) : replaceFilter(e.getAttribute("for"));
  console.log(activeFilter);

  for (var j = 0; j < photoFilters.length; j++) {
    photo.classList.remove(findFilter(photoFilters[j]));
  }

  photo.classList.add(activeFilter);
  toggleRadio(e.target);
}

function findFilter (filter) {
  return 'filter-' + filter.value;
}

function replaceFilter( filter) {
  return filter.replace('upload-','');
}

function toggleRadio (element) {
  var filterLabels = filter.querySelectorAll('label');

  for (var k = 0; k < filterLabels.length; k++) {
    filterLabels[k].setAttribute("aria-checked", "false");
  }
  element.setAttribute("aria-checked", "true");
}