
// Container (section) die de artikelen bevat
const container = document.querySelector('.carousel-container');

//De buttons waarop je klikt om verder in de carousel te gaan 
const button_1 = document.querySelector('.button_1');
const button_2 = document.querySelector('.button_2');
const button_3 = document.querySelector('.button_3');
const button_4 = document.querySelector('.button_4');
const button_5 = document.querySelector('.button_5');
const button_6 = document.querySelector('.button_6');
const button_7 = document.querySelector('.button_7');
const button_8 = document.querySelector('.button_8');
const button_9 = document.querySelector('.button_9');

// Als je op de button klikt --> translateX(...em)
// Verplaats de container naar links, waardoor nieuwe artikelen in beeld komen.
button_1.addEventListener('click', e => {
    container.style.transform = 'translateX(0em)';
    container.style.transition = 'all 0.5s ease';
});

button_2.addEventListener('click', e => {
    container.style.transform = 'translateX(-21.5em)';
    container.style.transition = 'all 0.5s ease';
});

button_3.addEventListener('click', e => {
    container.style.transform = 'translateX(-42.5em)';
    container.style.transition = 'all 0.5s ease';
});

button_4.addEventListener('click', e => {
    container.style.transform = 'translateX(-63.5em)';
    container.style.transition = 'all 0.5s ease';
});

button_5.addEventListener('click', e => {
    container.style.transform = 'translateX(-84.5em)';
    container.style.transition = 'all 0.5s ease';
});

button_6.addEventListener('click', e => {
    container.style.transform = 'translateX(-105.5em)';
    container.style.transition = 'all 0.5s ease';

});

button_7.addEventListener('click', e => {
    container.style.transform = 'translateX(-126.5em)';
    container.style.transition = 'all 0.5s ease';
});

button_8.addEventListener('click', e => {
    container.style.transform = 'translateX(-144em)';
    container.style.transition = 'all 0.5s ease';
});

// Test of de connectie klopt
console.log('The link to the carousel.js file is working!');
