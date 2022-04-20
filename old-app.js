//document.body.children[1].children[0].href = 'http://google.com';

//console.dir(document);

//let anchorElement = document.getElementById('external-link');
//anchorElement.href = 'http://google.com';

//document.querySelector('#external-id');
//anchorElement.href = 'https://academind.com';

let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://google.com';
newAnchorElement.textContent = 'This leads to Google';

let firstParagraph = document.querySelector('p');

firstParagraph.append(newAnchorElement);

let firstH1Element = document.querySelector('h1');

//firstH1Element.remove();
firstH1Element.parentElement.removeChild(firstH1Element);

firstParagraph.parentElement.append(firstParagraph);

console.log(firstParagraph.innerHTML);

firstParagraph.innerHTML = 'Hi! This is <strong>important</strong>.';
