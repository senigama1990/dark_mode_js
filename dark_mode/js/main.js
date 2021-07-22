let toggle = document.querySelector('#toggle')
let container = document.querySelector('.container')
let burger = document.querySelectorAll('span')
let header = document.querySelector('.title')
toggle.onclick = () => {
    toggle.classList.toggle('active')
    container.classList.toggle('light')
    header.classList.toggle('light')
    for (let one in burger) {
        burger[one].classList.toggle('light')
    }
}