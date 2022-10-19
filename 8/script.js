const button = document.querySelector('button')
      container = document.querySelector('.container')        
;

const displayWidth = document.documentElement.clientWidth;
const displayHeight = document.documentElement.clientHeight;

const getRndNum = (min, max) => {
    return Math.floor(Math.random()*(max - min)) + min;
    };

const getRndColor = () => {
    return ('#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase());
}

const getSquare = () => {
    container.textContent = '';
    let num = getRndNum(10,100);
    console.log(num);
    for (let i = 0; i < num; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.top = `${getRndNum(50, displayHeight-50)}px`
        square.style.left = `${getRndNum(50, displayWidth-50)}px`
        square.style.backgroundColor = getRndColor();
        container.append(square);
    }
}

    button.addEventListener('click',getSquare);