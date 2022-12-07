
let opener = document.querySelector('.opening')
let canva = document.querySelector('canvas')

document.querySelector('#enter').addEventListener('click', () => {
    document.querySelector('main').style.display = 'block';
    canva.classList.add('fadeOut')
    setTimeout(() => {
        canva.style.display = 'none'

    }, 2000)


    opener.classList.add('fadeOut')
    setTimeout(() => {
        opener.style.display = 'none'
    }, 2000)


})


// the eye animation on the landing page
const eye = document.querySelector('#eye');
eye.classList.add('opennclose')
eye.addEventListener('mouseover', () => {
    eye.classList.remove('opennclose')
    setTimeout(() => {
        eye.classList.add('openUp')
    }, 500)

})

eye.addEventListener('mouseout', () => {
    eye.classList.add('opennclose')
})

let inverse = false;
eye.addEventListener('click', () => {

    if (inverse == false) {
        document.querySelector('body').classList.add('reverse')
        inverse = true;
    }
    else {
        document.querySelector('body').classList.remove('reverse')
        inverse = false;
    }

})
let nav = document.querySelector('.navular')
let switch2 = 1;
document.querySelector('.button-three').addEventListener('click', () => {

    if (switch2 == 1) {
        nav.style.display = 'flex'
        nav.classList.add('fadeIn')
        switch2 = -switch2;
        console.log('IT WORKED')
        eye.style.left = "23vw"
    }
    else if (switch2 == -1) {
        nav.classList.remove('fadeIn')
        nav.classList.add('fadeOut')
        eye.style.left = "0vw"
        switch2 = -switch2;
        setTimeout(() => {
            nav.style.display = 'none'

        }, 1000)
    }


})