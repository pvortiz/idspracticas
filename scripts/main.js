// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/sgp.jpg') {
    myImage.setAttribute ('src','images/sgp2.jpg');
  } else {
    myImage.setAttribute ('src','images/sgp.jpg');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Ingresa tu nombre');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'The Beatles, Bienvenido: ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'The Beatles, Bienvenido: ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
