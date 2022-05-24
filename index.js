
// const hamburger = document.querySelector('.menu');
// const container = document.getElementsByClassName('container7');



    const hambergur = document.querySelector('.menu');
    const container = document.querySelector('nav .container7');

    hambergur.addEventListener('click',()=>{
        console.log('clicked');
        hambergur.classList.toggle('menu-active');
        container.classList.toggle('active')
    })

