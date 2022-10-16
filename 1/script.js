const slides = document.querySelectorAll('.slide')
    sliderInner = document.querySelector('.slider-inner')
    next = document.querySelector('.next-slide')
    prev = document.querySelector('.prev-slide')
    countSlide = document.querySelector('.count-slide')
;

let offset = 0;

countSlide.textContent = `${(offset/800)+1} / 5`;


function nextSlide() {
    offset == 3200 ? offset = 0 : offset +=800;
    sliderInner.style.transform = `translateX(-${offset}px)`;
    countSlide.textContent = `${(offset/800)+1} / 5`;
}

function prevSlide() {
    offset == 0 ? offset = 3200 : offset -=800;
    sliderInner.style.transform = `translateX(-${offset}px)`;
    countSlide.textContent = `${(offset/800)+1} / 5`;
}

next.addEventListener('click', nextSlide);

prev.addEventListener('click', prevSlide);


    sliderInner.addEventListener('touchstart', (e) => {
        e.targetTouches[0].clientX > 620 ? nextSlide() : prevSlide()
        console.log(e.targetTouches[0].clientX);
    }) 