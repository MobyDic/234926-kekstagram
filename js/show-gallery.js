'use strict';

window.showGallery = (function () {
  var galleryOverlay = document.querySelector('.gallery-overlay');
  var galleryImage = galleryOverlay.querySelector('.gallery-overlay-image');
  var galleryLike = galleryOverlay.querySelector('.likes-count');
  var galleryComments = galleryOverlay.querySelector('.comments-count');
  var galleryClose = galleryOverlay.querySelector('.gallery-overlay-close');

  galleryClose.addEventListener('click', hiddenGallery);
  document.addEventListener('keydown', hiddenGalleryByEscape);

  function hiddenGalleryByEscape(event) {
    if (window.isCloseEvent(event)) {
      hiddenGallery();
    }
  }

  function hiddenGallery() {
    galleryOverlay.classList.add('invisible');
  }

  return function (data) {
    galleryOverlay.classList.remove('invisible');
    galleryImage.src = data.url;
    galleryLike.textContent = data.likes;
    galleryComments.textContent = data.comments.length;
    galleryClose.focus();
  };
})();
