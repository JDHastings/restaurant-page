import htmlFactory from './htmlFactory';

class menu {
    body = document.querySelector('.body-content');
    load(){
         const menuItem = (name, title, description) => {
            const pic = htmlFactory('div', {id: name, class: 'menu-image'});
            const tit = htmlFactory('div', {class: 'menu-title'}, title);
            const desc = htmlFactory('div', {class: 'item-desc'}, description);

            return htmlFactory('div', {class: 'menu-item'}, pic, tit, desc);
         }

        const bacon = menuItem('bacon-tomato-olive', 'Bacon Pizza', 'Description');
        const brocc = menuItem('brocc', 'Broccoli Pizza', 'Description');
        const hawiian = menuItem('hawiian', 'Hawiian Pizza', 'Description');
        const pepperoni = menuItem('pepperoni', 'Pepperoni Pizza', 'Description');
        const shrimp = menuItem('shrimp', 'Shrimp Pizza', 'Description');
        const spicy = menuItem('spicy', 'Spicy Pizza', 'Description');
        const tomatoBasil = menuItem('tomato-basil', 'Tomato Basil Pizza', 'Description');
        const tomatoMushroom = menuItem('tomato-mushroom', 'Tomato Mushroom Pizza', 'Description');
        const veg = menuItem('veg', 'Vegetable Pizza', 'Description');

        const container = htmlFactory('div', {class: 'menu-container'}, bacon, brocc, hawiian, pepperoni, shrimp, spicy, tomatoBasil, tomatoMushroom, veg);
        this.body.append(container);
    }
}

export default menu;