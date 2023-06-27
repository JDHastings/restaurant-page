import htmlFactory from './htmlFactory';

class home{
    body = document.querySelector('.body-content');
    load(){
        const stuff = htmlFactory('div', {class: 'container'}, "Hello World");
        
        this.body.append(stuff);
    }
}

export default home;