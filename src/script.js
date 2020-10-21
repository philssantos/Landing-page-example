function carousselOne(carousselTwo) {
    const search = document.querySelector('.inner-caroussel')
    const img = document.querySelector('.inner-caroussel > img')
    const text = document.querySelector('.inner-caroussel > h2')
    const indicators = document.querySelectorAll('[indItem]')
    if(search.id == 'cr-1' ) {
        img.setAttribute('src', './images/travelling.png')
        text.innerHTML = 'Caroussel 2'
        indicators[0].classList.add('unselected')
        indicators[0].classList.remove('selected')
        indicators[1].classList.add('selected')
        indicators[1].classList.remove('unselected')
        indicators[2].classList.add('unselected')
        indicators[2].classList.remove('selected')
        search.id = 'cr-2'
        return
    }
    if(search.id == 'cr-2') {
        img.setAttribute('src', './images/maps.png')
        text.innerHTML = 'Lorem Ipsum'
        indicators[0].classList.add('unselected')
        indicators[0].classList.remove('selected')
        indicators[1].classList.add('unselected')
        indicators[1].classList.remove('selected')
        indicators[2].classList.add('selected')
        indicators[2].classList.remove('unselected')
        search.id = 'cr-3'
        return
    }
    else {
        img.setAttribute('src', './images/truck.png')
        text.innerHTML = 'Caroussel 1'
        indicators[0].classList.add('selected')
        indicators[0].classList.remove('unselected')
        indicators[1].classList.add('unselected')
        indicators[1].classList.remove('selected')
        indicators[2].classList.add('unselected')
        indicators[2].classList.remove('selected')
        search.id = 'cr-1'
    }
}

function callMenu() {
    const nav = document.querySelector('nav')
    const aside = document.querySelector('aside')
    const sideMenu = document.querySelector('.side-menu')
    aside.classList.remove('d-none')
    sideMenu.classList.remove('d-none')
    nav.style.position = 'fixed'
}

function closeMenu() {
    const nav = document.querySelector('nav')
    const aside = document.querySelector('aside')
    const sideMenu = document.querySelector('.side-menu')
    aside.classList.add('d-none')
    sideMenu.classList.add('d-none')
    nav.style.position = ''
}

var imgIndex = 0;
var arr = ['./images/img-slide1.png', './images/img-slide2.png', './images/img-slide3.png']
var img = document.querySelector('#image-slide')
var buttonRight = document.querySelector('[br]')
var buttonLeft = document.querySelector('[bl]')

function imgSlideForward() {
    if(imgIndex == 0) {
        imgIndex += 1
        img.style.background = `url(${arr[imgIndex]})`
        img.removeAttribute('fp')
        buttonLeft.classList.remove('arrow-slide-off')
        buttonLeft.classList.add('arrow-slide-on')
    }
    else if (imgIndex == 1) {
        imgIndex += 1
        img.style.background = `url(${arr[imgIndex]})`
        buttonRight.classList.remove('arrow-slide-on')
        buttonRight.classList.add('arrow-slide-off')
    }
}

function imgSlideBackwards() {
    if(imgIndex == 1) {
        imgIndex -= 1
        img.style.background = `url(${arr[imgIndex]})`
        buttonLeft.classList.remove('arrow-slide-on')
        buttonLeft.classList.add('arrow-slide-off')
    }
    else if(imgIndex == 2) {
        imgIndex -= 1
        img.style.background = `url(${arr[imgIndex]})`
        buttonRight.classList.remove('arrow-slide-off')
        buttonRight.classList.add('arrow-slide-on')
    }
}

window.addEventListener("load", () => setInterval(carousselOne, 4000))