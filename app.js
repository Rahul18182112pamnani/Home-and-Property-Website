const menu = document.querySelector('.menu')
const hideMenu = document.querySelector('.hide-links')
const headerItems = document.querySelector('.header')

window.addEventListener('DOMContentLoaded', () => {
  hideMenu.classList.remove('show-links')
})

menu.addEventListener('click', () => {
  hideMenu.classList.toggle('show-links')
  hideMenu.classList.remove('menu')
  console.log(hideMenu)
})