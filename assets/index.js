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

// Project page
let pSMB1 = document.querySelector('#shMoBtn1');
let pSMB2 = document.querySelector('#shMoBtn2');
let pSMB3 = document.querySelector('#shMoBtn3');
let pSM1 = document.querySelector('#projShowModel1');
let pSM2 = document.querySelector('#projShowModel2');
let pSM3 = document.querySelector('#projShowModel3');
let pSMBI1l = document.querySelector('prShMoBtnIcon1-b')
let pSMBI1b = document.querySelector('prShMoBtnIcon1-bl')
let pSMBI2l = document.querySelector('prShMoBtnIcon2-b')
let pSMBI2b = document.querySelector('prShMoBtnIcon2-bl')
let pSMBI3l = document.querySelector('prShMoBtnIcon3-b')
let pSMBI3b = document.querySelector('prShMoBtnIcon3-bl')


pSMB1.addEventListener('click', function () {
    if (pSM1.classList.contains('hidden')) {
        pSM1.classList.remove('hidden');
        pSM2.classList.add('hidden');
        pSM3.classList.add('hidden');
        pSMB1.classList.add('border');
        pSMB1.classList.add('border-blue-400');
        pSMB2.classList.remove('border');
        pSMB2.classList.remove('border-blue-400');
        pSMB3.classList.remove('border');
        pSMB3.classList.remove('border-blue-400');
    } else {
        return;
    }
});
pSMB2.addEventListener('click', function () {
    if (pSM2.classList.contains('hidden')) {
        pSM2.classList.remove('hidden');
        pSM1.classList.add('hidden');
        pSM3.classList.add('hidden');
        pSMB2.classList.add('border');
        pSMB2.classList.add('border-blue-400');
        pSMB1.classList.remove('border');
        pSMB1.classList.remove('border-blue-400');
        pSMB3.classList.remove('border');
        pSMB3.classList.remove('border-blue-400');
        pSMBI2b.classList.add('hidden')
        pSMBI2l.classList.remove('hidden')
        pSMBI1l.classList.add('hidden')
        pSMBI1b.classList.remove('hidden')
    } else {
        return;
    }
});
pSMB3.addEventListener('click', function () {
    if (pSM3.classList.contains('hidden')) {
        pSM3.classList.remove('hidden');
        pSM1.classList.add('hidden');
        pSM2.classList.add('hidden');
        pSMB3.classList.add('border');
        pSMB3.classList.add('border-blue-400');
        pSMB1.classList.remove('border');
        pSMB1.classList.remove('border-blue-400');
        pSMB2.classList.remove('border');
        pSMB2.classList.remove('border-blue-400');
    } else {
        return;
    }
});