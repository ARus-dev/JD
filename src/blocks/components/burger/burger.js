const burger = document.querySelector('.burger')
const menu = document.querySelector('.header__menu')

burger.addEventListener('click', () => menu.classList.toggle('header__menu_active'))