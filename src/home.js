import htmlFactory from './htmlFactory';

class home{
    body = document.querySelector('.body-content');
    load(){
        const text1 = htmlFactory('div', {}, 'The best pizza on the planet');
        const text2 = htmlFactory('div', {}, 'You wont find better pizza anywhere else')
        const image = htmlFactory('div', {class: 'pizza'});
        const text3 = htmlFactory('div', {}, 'Contact us for more information')

        const container = htmlFactory('div', {class: 'home-container'}, text1, text2, image, text3);
        this.body.append(container);
    }
}

export default home;