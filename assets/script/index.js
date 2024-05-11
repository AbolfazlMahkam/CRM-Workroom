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

// Support Box
let sBtn = document.querySelector('#supportBtn');
// let reSBtn = document.querySelector('#resupportBtn');
let sBx = document.querySelector('#supportBx');
let sCls = document.querySelector('#supportClose');
let sSprt = document.querySelector('#sendSupport')

sBtn.addEventListener('click', function () {
    if (sBx.classList.contains('hidden')) {
        sBx.classList.remove('hidden');
    } else {
        return;
    }
});

// reSBtn.addEventListener('click', function () {
//     if (sBx.classList.contains('hidden')) {
//         sBx.classList.remove('hidden');
//     } else {
//         return;
//     }
// });

sCls.addEventListener('click', function () {
    if (sBx.classList.contains('hidden')) {
        return;
    } else {
        sBx.classList.add('hidden');
    }
});

sSprt.addEventListener('click', function () {
    if (sBx.classList.contains('hidden')) {
        return;
    } else {
        sBx.classList.add('hidden');
    }
});