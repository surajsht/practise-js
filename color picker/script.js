let btn = document.querySelector('[data-generate]');
const colorRef = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


btn.addEventListener('click', () => {

  let generatedColor = '';

  for (i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * colorRef.length);
    generatedColor += colorRef[randomNumber];
  }

  document.body.style.backgroundColor = `#${generatedColor}`;

});