

let sections, menu, sectionArray, sectionLength;
sections = document.querySelectorAll('section')
sectionArray = Array.from(sections)
sectionLength = sectionArray.length
menu = document.querySelector('#navbar__list')

// build the nav
const Navigation = () => {
    let list = ''

    sectionArray.forEach((section) => {
        const sectionName = section.getAttribute('data-nav')
        const sectionId = section.getAttribute('id')
        //console.log( sectionName, sectionId)
        //list = document.createElement('li')
        //list.innerHTML =  `  <a class ='menu__link ${sectionId}' href ="#${sectionId}">${sectionName}</a>`
        list +=`<li class = ${sectionId}> <a  class ='menu__link ${sectionId}' href = "#${sectionId}">${sectionName}</a></li>`
        menu.innerHTML = list

        //menu.appendChild(list)
        //console.log(sectionId)
    })



}

Navigation()

const sectionPosition = (section) => {
    return Math.floor(section.getBoundingClientRect().top)
}
//to remove the active class
const isActive = (section) => {
    section.classList.remove('your-active-class')

}
//to add active class
const addActive = (condition, section) => {
    if (condition) {
        section.classList.add('your-active-class')
    }
}

const lists = document.querySelectorAll('nav ul li')

// Add class 'active' to section when the position is close to top of viewport
const activate = () => {
    let current = ''
    let sectionName = ''
    sections.forEach(section => {
        const elementPosition = sectionPosition(section)
        //console.log(elementPosition)
        inviewport = () => { elementPosition < 150 && elementPosition >= -150}
        isActive(section)
        addActive(inviewport, section)
        current = section.getAttribute('id')
    })
    let curren = ''
    sections.forEach(section=>{
        const sectionTop = section.offsetTop
        console.log(sectionTop)
        const sectionHeight = section.clientHeight;
        if(scrollY >= sectionTop){
            curren = section.getAttribute('id')
        }
    })
    console.log(curren)
    lists.forEach(list=>{
        list.classList.remove('active')
        if(list.classList.contains(curren)){
            list.classList.add('active')
        }
    })

}
window.addEventListener('scroll', activate)
