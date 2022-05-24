

let sections, menu, sectionArray, sectionLength;
sections = document.querySelectorAll('section')
sectionArray = Array.from(sections)
sectionLength = sectionArray.length
console.log(sectionLength)
menu = document.querySelector('#navbar__list')

// build the nav
const Navigation = () => {
    let list = ''

    sectionArray.forEach((section) => {
        const sectionName = section.getAttribute('data-nav')
        var sectionId = section.getAttribute('id')
        //console.log( sectionName, sectionId)
        let list = document.createElement('li')
        list.innerHTML = `<a class = 'menu__link ${sectionId}'href = "#${sectionId}">${sectionName}</a>`
        //list +=`<li><a href = "#${sectionId}">${sectionName}</a></li>`
        //menu.innerHTML = list

        menu.appendChild(list)
    })



}

Navigation()


//to get the position of each section
const sectionPosition = (section) => {

    return Math.floor(section.getBoundingClientRect().top)

}
//to remove the active class
const isActive = (section) => {
    section.classList.remove('your-active-class')
    //list.classList.remove('active')
}
//to add active class
const addActive = (condition, section) => {
    if (condition) {
        section.classList.add('your-active-class')

    }
}


const lists = document.querySelectorAll('li')
// Add class 'active' to section when the position is close to top of viewport
const activation = () => {
    let current = ''
    sections.forEach(section => {
        //height
        const elementPosition = sectionPosition(section)
        inviewport = () => elementPosition < 150 && elementPosition >= -150
        isActive(section)
        addActive(inviewport(), section)
        current = section.getAttribute('id')
    })
    
    const listArray = Array.from(lists)
    listArray.forEach(list => { 
        list.classList.remove('active')
        list.addEventListener('click', function myNavFunction(){
            return list.classList.add('active') 
        })
        /*list.onclick = function myNavFunction(){
             return list.classList.add('active') 
         }*/
    }) 

}

window.addEventListener('scroll', activation)


// add classlist to naviagtion as per review
/*document.querySelector("li").onclick = //function() {myNavFunction()};
function myNavFunction(){
    var element = document.querySelector("li");
    element.classList.add("active");
}*/

const listActive = (list) => {
    list.classList.remove('active')

}
//to add active class

//const lists = document.querySelectorAll('li')
/*const listArray = Array.from(lists)
listArray.forEach(list => { 
    list.addEventListener('click', function myNavFunction(){
        return list.classList.add('active') 
    })
    /*list.onclick = function myNavFunction(){
         return list.classList.add('active') 
     }
})*/

