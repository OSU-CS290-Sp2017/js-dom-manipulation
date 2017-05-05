console.log("document:", document);
console.log("document.body:", document.body);

console.log("document.body.childNodes:", document.body.childNodes);
console.log("document.body.childNodes[1]:", document.body.childNodes[1]);

console.log("document.body.firstChild:", document.body.firstChild);
console.log("document.body.lastChild:", document.body.lastChild);

console.log("document.body.firstChild.nextSibling:", document.body.firstChild.nextSibling);
console.log("document.body.lastChild.previousSibling:", document.body.lastChild.previousSibling);

var elem = document.body.firstChild;
// while (elem) {
//   console.log(elem);
//   elem = elem.nextSibling;
// }

console.log("elem.parentNode:", elem.parentNode);

var photoContainer = document.getElementById('photo-card-container');
console.log("container:", photoContainer);

var photoCards = document.getElementsByClassName('photo-card');
console.log("cards:", photoCards);
// photoCards.forEach(function (card) {});
for (var i = 0; i < photoCards.length; i++) {
  console.log("cards[" + i + "]:", photoCards[i]);
}

var links = document.getElementsByTagName('a');
console.log("links:", links);

var caption = document.querySelector('div.caption');
console.log("caption:", caption);

var images = document.querySelectorAll('.img-container img');
console.log("images:", images);


var firstPhotoCard = photoCards[0];
console.log("firstPhotoCard.innerHTML:", firstPhotoCard.innerHTML);
console.log("firstPhotoCard.textContent:", firstPhotoCard.textContent);

console.log("links[0].href:", links[0].href);
console.log("images[0].src:", images[0].src);

var loremCard = document.querySelector('.lorem-card');
console.log("loremCard.offsetWidth:", loremCard.offsetWidth);
console.log("loremCard.offsetHeight:", loremCard.offsetHeight);

console.log("loremCard.clientWidth:", loremCard.clientWidth);
console.log("loremCard.clientHeight:", loremCard.clientHeight);

console.log("loremCard.scrollWidth:", loremCard.scrollWidth);
console.log("loremCard.scrollHeight:", loremCard.scrollHeight);

console.log("loremCard.scrollLeft:", loremCard.scrollLeft);
console.log("loremCard.scrollTop:", loremCard.scrollTop);
