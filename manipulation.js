var loremCard = document.querySelector('.lorem-card');

var userInput = "<img src=x onerror=\"alert('Uh oh')\" >";
// loremCard.innerHTML = userInput;  // This is bad!
loremCard.textContent = userInput;

var newDiv = document.createElement('div');
var newText = document.createTextNode("This is come new content.");
newDiv.appendChild(newText);
newDiv.classList.add('new-class');
newDiv.classList.add('container');
newDiv.classList.remove('new-class');
newDiv.setAttribute('id', 'the-divs-id');

// newDiv.style.color = 'orange';
// newDiv.style.border = '3px dashed purple';
newDiv.classList.add('ugly');

newText.textContent = "";

var newP = document.createElement('p');
var paragraphText = document.createTextNode("This will be a cat.");
newP.appendChild(paragraphText);
newDiv.appendChild(newP);

var newImg = document.createElement('img');
newImg.src = "http://placekitten.com/320/320/";
newDiv.appendChild(newImg);

loremCard.appendChild(newDiv);
// loremCard.insertBefore(newDiv, loremCard.firstChild);
// loremCard.replaceChild(newDiv, loremCard.firstChild);

// newDiv.parentNode.removeChild(newDiv);
newDiv.remove();

document.body.appendChild(newDiv);
