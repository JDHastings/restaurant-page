// Make the DOM layout here

const content = document.createElement('div');
content.setAttribute('id', 'content');
document.body.append(content);

//header
const header = document.createElement('header');
content.append(header);

// Restaurant Name
const title = document.createElement('div');
title.classList.add('title');
title.textContent = 'Rosati\'s';
header.append(title);


// tab buttons
const tab1 = document.createElement('button');
const tab2 = document.createElement('button');
const tab3 = document.createElement('button');
tab1.classList.add('home');
tab2.classList.add('menu');
tab3.classList.add('contact');
tab1.textContent = 'Home';
tab2.textContent = 'Menu';
tab3.textContent = 'Contact';
header.append(tab1);
header.append(tab2);
header.append(tab3);


const body = document.createElement ('div');
body.classList.add('body');
body.textContent = "Hey, I\'m the Body!";
content.append(body);




const footer = document.createElement('footer');
content.append(footer);
