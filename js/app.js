

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
        list +=`<li class = ${sectionId}> <a  class ='menu__link ${sectionId}' href = "#${sectionId}">${sectionName}</a></li>`
        menu.innerHTML = list
    })



}

Navigation()
const navigation = document.getElementById('navbar__list')
const sectionPosition = (section) => {
    return Math.floor(section.getBoundingClientRect().top)
}
//to remove the active class
const isActive = (section) => {
    section.classList.remove('your-active-class')
    const sectionId = section.getAttribute('id').slice(7,8)-1
    navigation.childNodes[sectionId].classList.remove('active')

}
//to add active class
const addActive = (condition, section) => {
    if (condition) {
        section.classList.add('your-active-class')
        const sectionId = section.getAttribute('id').slice(7,8)-1
        navigation.childNodes[sectionId].classList.add('active')
    }
}

const lists = document.querySelectorAll('nav ul li')


// Add class 'active' to section when the position is close to top of viewport
const activate = () => {
    sections.forEach(section => {
        const elementPosition = sectionPosition(section)
        inviewport = () =>  elementPosition < 150 && elementPosition >= -150
        isActive(section)
        addActive(inviewport(), section)
    })
}
window.addEventListener('scroll', activate)
