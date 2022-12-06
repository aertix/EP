
let opener = document.querySelector('.opening')
let canva = document.querySelector('canvas')

document.querySelector('#enter').addEventListener('click', ()=>{
            document.querySelector('main').style.display = 'block';
        canva.classList.add('fadeOut')
        setTimeout(()=>{
            canva.style.display = 'none'

        },2000)
        console.log('IT WORKED')

        opener.classList.add('fadeOut')
        setTimeout(()=>{
            opener.style.display = 'none'
        },2000)
        console.log('IT WORKED')
    
})


// the eye animation on the landing page
const eye = document.querySelector('#eye');
eye.classList.add('opennclose')
eye.addEventListener('mouseover', ()=>{
    eye.classList.remove('opennclose')
    setTimeout(()=>{
        eye.classList.add('openUp')
    },500)

})

eye.addEventListener('mouseout', ()=>{
    eye.classList.add('opennclose')
})

let inverse = false;
eye.addEventListener('click', ()=>{

    if(inverse == false){
        document.querySelector('body').classList.add('reverse')
        inverse = true;
    }
    else{
        document.querySelector('body').classList.remove('reverse')
        inverse = false;
    }

})