'use strict';

(function () {

  var DATA_URL = 'https://intensive-javascript-server-myophkugvq.now.sh/kekstagram/data';

  window.load(DATA_URL, onLoad);


  function onLoad(evt) {
    var target = evt.target;
    var pictures = target.response;
    // орисовка элементов на основе шаблона
    drawPictures(pictures);

    if (target.status !== 200) {
      alert(target.status + ': ' + target.statusText);
      return;
    }
  }

  function drawPictures(pictures) {

    var templateElement = document.querySelector('#picture-template');
    var elementToClone = templateElement.content.querySelector('.picture');
    var picturesContainer = document.querySelector('.pictures');

    pictures.forEach(function (picturesArray) {
      var content = elementToClone.cloneNode(true);

      content.querySelector('img').src = picturesArray.url;
      content.querySelector('.picture-likes').textContent = picturesArray.likes;
      content.querySelector('.picture-comments').textContent = picturesArray.comments.length;

      content.addEventListener('click', function (evt) {
        evt.preventDefault();
        window.showGallery(elementToClone);
      });
      picturesContainer.appendChild(content);

    });
  }
})();
