import htmlFactory from './htmlFactory';

class page{
    body = document.querySelector('.body-content');
    loadHome(){
        const text1 = htmlFactory('div', {}, 'The best pizza on the planet');
        const text2 = htmlFactory('div', {}, 'You wont find better pizza anywhere else')
        const image = htmlFactory('div', {class: 'pizza'});
        const text3 = htmlFactory('div', {}, 'Contact us for more information')

        const container = htmlFactory('div', {class: 'home-container'}, text1, text2, image, text3);
        this.body.append(container);
    }

    loadMenu(){
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

   loadContact(){
    const title1 = htmlFactory('div', {}, 'Call me maybe');
    const phone = htmlFactory('div', {}, '420-360-noscope');
    const title2 = htmlFactory('div', {}, 'Lets meet up!');
    const location = htmlFactory('div', {}, 'Your moms house');

    const container = htmlFactory('div', {class: 'contact-container'}, title1, phone, title2, location);
    this.body.append(container);
}
}

export default page;