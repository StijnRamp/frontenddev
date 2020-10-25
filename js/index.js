////////// DROPDOWNMENU

// Add the classes .drowdownmenu_ul, .dropdownmenu_li, .dropdownmenu_a to their respective item (ul, li's, and a's in the header) when the menu-button is pressed

// find the menu button
// when 'click'....
// add the classes

// remove the classes when the button returns to display none


// find the menu button
const dropdownmenu_button = document.querySelector('.dropdownmenu_button');


// Find the ul
let dropdownmenu_ul = document.querySelectorAll('.dropdown_JSselection_ul');
// Find the li's
let dropdownmenu_li = document.querySelectorAll('.dropdown_JSselection_li');
// Find the a's
let dropdownmenu_a = document.querySelectorAll('.dropdown_JSselection_a');

// When I click on the menu button --> do this
dropdownmenu_button.addEventListener('click', e => {

    if (dropdownmenu_ul[0].className == 'dropdown_JSselection_ul') {
        dropdownmenu_ul[0].className = 'dropdownmenu_ul';
        dropdownmenu_li[0].className += ' dropdownmenu_li';
        dropdownmenu_li[1].className += ' dropdownmenu_li';
        dropdownmenu_li[2].className += ' dropdownmenu_li';
        dropdownmenu_li[3].className += ' dropdownmenu_li';
        dropdownmenu_a[0].className += ' dropdownmenu_a';
        dropdownmenu_a[1].className += ' dropdownmenu_a';
        dropdownmenu_a[2].className += ' dropdownmenu_a';
        dropdownmenu_a[3].className += ' dropdownmenu_a';
        console.log('the if statement works 1');
    } else {
        dropdownmenu_ul[0].className = 'dropdown_JSselection_ul';
        dropdownmenu_li[0].className = 'dropdown_JSselection_li';
        dropdownmenu_li[1].className = 'dropdown_JSselection_li';
        dropdownmenu_li[2].className = 'dropdown_JSselection_li';
        dropdownmenu_li[3].className = 'dropdown_JSselection_li';
        dropdownmenu_a[0].className = 'dropdown_JSselection_a';
        dropdownmenu_a[1].className = 'dropdown_JSselection_a';
        dropdownmenu_a[2].className = 'dropdown_JSselection_a';
        dropdownmenu_a[3].className = 'dropdown_JSselection_a';
        console.log('The if statement works 2');
    };


    console.log('The click on the dropdownmenu_button is being registred!');
});


///////// REMOVE DROPDOWNMENU

// Based on the width of the screen, remove the dropdownmenu
function calculatingScreensize() {
    let screenWidth = window.innerWidth;
    if (screenWidth > 767) {
        console.log('The screen is too big for a dropdownmenu');
        dropdownmenu_ul[0].className = 'dropdown_JSselection_ul';
        dropdownmenu_li[0].className = 'dropdown_JSselection_li';
        dropdownmenu_li[1].className = 'dropdown_JSselection_li';
        dropdownmenu_li[2].className = 'dropdown_JSselection_li';
        dropdownmenu_li[3].className = 'dropdown_JSselection_li';
        dropdownmenu_a[0].className = 'dropdown_JSselection_a';
        dropdownmenu_a[1].className = 'dropdown_JSselection_a';
        dropdownmenu_a[2].className = 'dropdown_JSselection_a';
        dropdownmenu_a[3].className = 'dropdown_JSselection_a';
    } else {
        console.log('The screen is the correct size for a dropdownmenu');
    };
};

setInterval(calculatingScreensize, 50);

console.log('The link to the index.js file is working!');


///////// ZOEKBALK

// find the searchbutton

const searchbutton = document.querySelector('.searchbutton');

// Find the searchbar

const searchbar = document.querySelector('.searchbar');

// find the delete button

const delete_button = document.querySelector('.delete_button');

// if you click on the searchbutton, give the searchbar a margin-top of -33em

searchbutton.addEventListener('click', e => {
    searchbar.className = 'searchbar';
});

delete_button.addEventListener('click', e => {
    searchbar.className = 'searchbar_extendedmargin searchbar';
});


///////// NIEUWSBRIEF

// Making the 'Nieuwsbrief' pop up a form

const nieuwsbrief_button = document.querySelector('.nieuwsbrief_button');

const nieuwsbrief_section = document.querySelector('.nieuwsbrief_section');

const nieuwsbrief_kruisje = document.querySelector('.nieuwsbrief_kruisje');

// Add event to button. If clicked, you get the form

nieuwsbrief_button.addEventListener('click', e => {
    nieuwsbrief_section.className = "";
});

nieuwsbrief_kruisje.addEventListener('click', e => {
    nieuwsbrief_section.className = "nieuwsbrief_section";
})