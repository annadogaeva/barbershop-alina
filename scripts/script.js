'use strict';

$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        adaptiveHeight: true,
        centerMode: true,
        centerPadding: '-20px',
        focusOnSelect: true
    });
});

document.getElementById('burger').onclick = function () {
    const menuModal = document.getElementById('menuModal');
    menuModal.style.display = 'block';
};

document.getElementById('menu__close').onclick = function () {
    const menuModal = document.getElementById('menuModal');
    menuModal.style.display = 'none';
};
