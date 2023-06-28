import htmlFactory from './htmlFactory';

class menu {
    body = document.querySelector('.body-content');
    load(){

        const container = htmlFactory('div', {class: 'menu-container'}, 'this is the menu');
        this.body.append(container);
    }
}

export default menu;