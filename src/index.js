import './style.css';
import './layout.js';

import home from './home';

const buttons = document.querySelectorAll('button');

const homepage = new home;
homepage.load();
document.querySelector('.home').classList.toggle('active');

function unload(){
    const body = document.querySelector('.container');
    if(body){
        body.remove();
    }
}

buttons.forEach(button => button.addEventListener('click', () => {
    buttons.forEach(butt => {
        if(butt.classList.contains('active')){
            butt.classList.toggle('active');
        }
    })
    if(button.classList.contains('home')){
        unload();
        button.classList.toggle('active');
        homepage.load();
    }else if(button.classList.contains('menu')){
        unload();
        button.classList.toggle('active');
    }else if(button.classList.contains('contact')){
        unload();
        button.classList.toggle('active');
    }
}));