//Burger menu
let menu = document.querySelector('#menu');
let menuBtn = document.querySelector('#burger');

menuBtn.addEventListener('click', function () {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});