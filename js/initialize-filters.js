'use strict';

window.initializeFilters = function (filterElement, applyFilter) {
  filterElement.addEventListener('click', applyFilter);

  filterElement.addEventListener('keydown', function (evt) {
    if (window.isActivateEvent(evt)) {
      applyFilter(evt.target);
    }
  });
};

window.applyFilter = function (e) {
  var photo = document.querySelector('.upload-form-preview');
  var photoFilters = filter.querySelectorAll('input[name="upload-filter"]');

  var activeFilter = (e.type === 'click') ? findFilter(e.target) : replaceFilter(e.getAttribute('for'));
  for (var j = 0; j < photoFilters.length; j++) {
    photo.classList.remove(findFilter(photoFilters[j]));
  }

  photo.classList.add(activeFilter);
  toggleRadio(activeFilter);
};

function findFilter(filter) {
  return 'filter-' + filter.value;
}

function replaceFilter(filter) {
  return filter.replace('upload-', '');
}

function toggleRadio(attribute) {
  var filterLabels = filter.querySelectorAll('label');

  for (var k = 0; k < filterLabels.length; k++) {
    if (filterLabels[k].getAttribute('for') === 'upload-' + attribute) {
      filterLabels[k].setAttribute('aria-checked', 'true');
    }
    else
    {
      filterLabels[k].setAttribute('aria-checked', 'false');
    }
  }
}
