'use strict';

(function () {

  var DATA_URL = 'https://intensive-javascript-server-myophkugvq.now.sh/kekstagram/data';

  window.load(DATA_URL, onLoad);


  function onLoad(evt) {
    var target = evt.target;
    var pictures = target.response;
    //орисовка элементов на основе шаблона
    drawPictures(pictures);

    if (target.status !== 200) {
      console.log(target.status + ': ' + target.statusText);
      return;
    }
  }

  function drawPictures(pictures) {

    var templateElement = document.querySelector('#picture-template');
    var elementToClone = templateElement.content.querySelector('.picture');
    var picturesContainer = document.querySelector('.pictures');

    pictures.forEach(function(pictures) {
      var content = elementToClone.cloneNode(true);

      content.querySelector('img').src = pictures.url;
      content.querySelector('.picture-likes').textContent = pictures.likes;
      content.querySelector('.picture-comments').textContent = pictures.comments.length;

      content.addEventListener('click', function (evt) {
        evt.preventDefault();
        window.showGallery(elementToClone);
      });
      picturesContainer.appendChild(content);

    });
  }
})();
