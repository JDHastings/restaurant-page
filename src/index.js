import './style.css';
import './layout.js';

import page from './pages';

const buttons = document.querySelectorAll('button');

const pages = new page;

pages.loadHome();
document.querySelector('.home').classList.toggle('active');

function unload(){
    const body = document.querySelector('.body-content').firstChild;
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
        pages.loadHome();
    }else if(button.classList.contains('menu')){
        unload();
        button.classList.toggle('active');
        pages.loadMenu();
    }else if(button.classList.contains('contact')){
        unload();
        button.classList.toggle('active');
        pages.loadContact();
    }
}));