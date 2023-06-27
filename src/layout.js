import htmlFactory from './htmlFactory'

//header

// Restaurant Title
const title = htmlFactory('div', {class: 'title'}, 'Rosati\'s');

// tab buttons
const tab1 = htmlFactory('button', {class: 'home'}, 'Home');
const tab2 = htmlFactory('button', {class: 'menu'}, 'Menu');
const tab3 = htmlFactory('button', {class: 'contact'}, 'Contact');

const header = htmlFactory('header', {}, title, tab1, tab2, tab3);

// body

// grid layout
const nothing = htmlFactory('div', {class: 'none'});
const bodyContent = htmlFactory('div', {class: 'body-content'});
const nothing2 = htmlFactory('div', {class: 'none'});

const body = htmlFactory('div', {class: 'body'}, nothing, bodyContent, nothing2);

// footer
const footer = htmlFactory('footer', {}, 'Coypright 2023 JDHastings');

const content = htmlFactory('div', {id: 'content'}, header, body, footer);
document.body.append(content);