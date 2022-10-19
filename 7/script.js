const button = document.querySelector('button')
      first = document.querySelector('.first')
      second = document.querySelector('.second')
      third = document.querySelector('.third')
;

let isVisible = false;

function showElements() {
    if(!isVisible) {
        first.classList.add('visible');
        second.classList.add('visible');
        third.classList.add('visible');
        isVisible = true;
    } else {
        first.classList.remove('visible');
        second.classList.remove('visible');
        third.classList.remove('visible');
        isVisible = false;
    }
    
}

button.addEventListener('click',showElements)