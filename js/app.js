
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




// build the nav
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





//to get the position of each section
const sectionPosition = (section)=>{

     return  Math.floor(section.getBoundingClientRect().top)
    
}

//to remove the active class
const isActive = (section)=>{
    section.classList.remove('your-active-class')
}


//to add active class
const addActive = (condition, section)=>{
    if(condition){
        section.classList.add('your-active-class')
    }
}

// Add class 'active' to section when the position is close to top of viewport

const activation = ()=>{
    section.forEach(section=>{
        const elementPosition = sectionPosition (section)

        inviewport = ()=> elementPosition <150 && elementPosition >= -150

        isActive(section)
        addActive(inviewport(), section)
    })
}

window.addEventListener('scroll', activation)
