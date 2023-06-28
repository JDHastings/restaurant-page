import './style.css';
import './layout.js';

import home from './home';
import menu from './menu';

const buttons = document.querySelectorAll('button');

const homepage = new home;
const menupage = new menu;

menupage.load();
document.querySelector('.menu').classList.toggle('active');

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
        homepage.load();
    }else if(button.classList.contains('menu')){
        unload();
        button.classList.toggle('active');
        menupage.load();
    }else if(button.classList.contains('contact')){
        unload();
        button.classList.toggle('active');
    }
}));