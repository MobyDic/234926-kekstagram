window.initializeFilters = function(e) {
  var activeFilter = (e.type === 'click') ? findFilter(e.target) : replaceFilter(e.getAttribute("for"));
  console.log(activeFilter);

  for (var j = 0; j < photoFilters.length; j++) {
    photo.classList.remove(findFilter(photoFilters[j]));
  }

  photo.classList.add(activeFilter);
}

function findFilter(filter) {
  return 'filter-' + filter.value;
}

function replaceFilter(filter) {
  return filter.replace('upload-','');
}
