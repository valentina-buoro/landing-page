
/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/*
 * Define Global Variables
*/


var section, menu, sectionArray, sectionLength;
section = document.querySelectorAll('section')
sectionArray = Array.from(section)
sectionLength = sectionArray.length
console.log(sectionLength)
menu = document.querySelector('#navbar__list')

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
const Navigation = ()=>{
    var list = ''

    sectionArray.forEach((section)=>{
        const sectionName = section.getAttribute('data-nav')
        var sectionId = section.getAttribute('id')
        //console.log( sectionName, sectionId)

        let list = document.createElement('li')
        list.innerHTML = `<a class = 'menu__link'href = "#${sectionId}">${sectionName}</a>`
        //list +=`<li><a href = "#${sectionId}">${sectionName}</a></li>`
        //menu.innerHTML = list

        menu.appendChild(list)

    })

   

}

Navigation()
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


