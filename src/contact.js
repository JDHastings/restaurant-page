import htmlFactory from './htmlFactory';

class contact{
    body = document.querySelector('.body-content');
    load(){
        const title1 = htmlFactory('div', {}, 'Call me maybe');
        const phone = htmlFactory('div', {}, '420-360-noscope');
        const title2 = htmlFactory('div', {}, 'Lets meet up!');
        const location = htmlFactory('div', {}, 'Your moms house');

        const container = htmlFactory('div', {class: 'contact-container'}, title1, phone, title2, location);
        this.body.append(container);
    }
}

export default contact;