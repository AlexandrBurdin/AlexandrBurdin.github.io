let burger = document.querySelector('.burger');
let menu = document.querySelector('.menu');
let back = document.querySelector('body');
let link = document.querySelectorAll('.link');

burger.onclick = function() {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    back.classList.toggle('lock');
}

for (let elem of link) {
    elem.onclick = function() {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        back.classList.toggle('lock');
    }
}