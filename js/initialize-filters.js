'use strict';

(function () {

  var applyFilter = function (e) {
    var photo = document.querySelector('.upload-form-preview');
    var photoFilters = document.querySelectorAll('input[name="upload-filter"]');

    var activeFilter = (e.type === 'click') ? findFilter(e.target) : replaceFilter(e.getAttribute('for'));
    for (var j = 0; j < photoFilters.length; j++) {
      photo.classList.remove(findFilter(photoFilters[j]));
    }
    if (activeFilter) {
      photo.classList.add(activeFilter);
      toggleRadio(activeFilter);
    }
  };

  var applyFilterOnPress = function (evt) {
    if (window.isActivateEvent(evt)) {
      applyFilter(evt.target);
      var activeRadio = evt.target.previousElementSibling;
      activeRadio.checked = true;
    }
  };

  window.initializeFilters = function (filterElement) {
    var filterDefault = filterElement.querySelector('[for="upload-filter-none"]');
    var radioDefault = filterDefault.previousElementSibling;
    radioDefault.checked = true;
    applyFilter(filterDefault);

    filterElement.addEventListener('click', applyFilter);
    filterElement.addEventListener('keydown', applyFilterOnPress);
  };

  window.unsubscribeFiltersHandlers = function (filterElement) {
    filterElement.removeEventListener('click', applyFilter);
    filterElement.removeEventListener('keydown', applyFilterOnPress);
  };

  function findFilter(filter) {
    var valueFilter;
    if (filter.value) {
      valueFilter = 'filter-' + filter.value;
    }
    return valueFilter;
  }

  function replaceFilter(filter) {
    return filter.replace('upload-', '');
  }

  function toggleRadio(attribute) {
    var filterLabels = document.querySelectorAll('label');

    for (var k = 0; k < filterLabels.length; k++) {
      if (filterLabels[k].getAttribute('for') === 'upload-' + attribute) {
        filterLabels[k].setAttribute('aria-checked', 'true');
      } else {
        filterLabels[k].setAttribute('aria-checked', 'false');
      }
    }
  }
})();
