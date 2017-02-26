'use strict';

(function () {
  var filters = document.querySelector('.filters');
  var picturesContainer = document.querySelector('.pictures');

  var DATA_URL = 'https://intensive-javascript-server-myophkugvq.now.sh/kekstagram/data';

  window.load(DATA_URL, onLoad);


  function onLoad(evt) {
    var target = evt.target;
    var pictures = target.response;
    // орисовка элементов на основе шаблона
    drawPictures(pictures);

    if (target.status !== 200) {
      document.write(target.status + ': ' + target.statusText);
      return;
    }

    filters.classList.remove('hidden');
    filters.addEventListener('click', selectFilter);

    //фильтр фото
    function selectFilter(e) {
      var element = e.target;

      picturesContainer.innerHTML = '';

      switch (element.value) {
        case 'popular':
          drawPictures(pictures);
          break;
        case 'new':
          drawPictures(sortByNew(pictures));
          break;
        case 'discussed':
          drawPictures(sortByDiscussed(pictures));
          break;
      }
    }

  }

  function drawPictures(pictures) {

    var templateElement = document.querySelector('#picture-template');
    var elementToClone = templateElement.content.querySelector('.picture');

    pictures.forEach(function (picturesArray) {
      var content = elementToClone.cloneNode(true);

      content.querySelector('img').src = picturesArray.url;
      content.querySelector('.picture-likes').textContent = picturesArray.likes;
      content.querySelector('.picture-comments').textContent = picturesArray.comments.length;;

      content.addEventListener('click', function (evt) {
        evt.preventDefault();
        window.showGallery(elementToClone);
      });
      picturesContainer.appendChild(content);

    });

  }

  function sortByNew(array) {
    var newArray = array.slice();
    var sorted = [];

    while (sorted.length < 10) {
      var element = newArray[Math.floor(Math.random() * array.length)];
      var index = sorted.indexOf(element);

      if (index === -1) {
        sorted.push(element);
      }
    }

    return sorted;
  }

  function sortByDiscussed(array) {
    var sorted = array.slice();
    sorted.sort(function (a, b) {
      return b.comments.length - a.comments.length;
    });

    return sorted;
  }

})();
