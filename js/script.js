"use strict";
// Burger menu
const nav = document.querySelector('.navigation'),
   iconBurger = document.querySelector('.burger-btn'),
   navList = document.querySelector('.menu');
iconBurger.addEventListener("click", function(e) {
   iconBurger.classList.toggle('_active');
   navList.classList.toggle('_active');
   window.scrollTo({ top: 0, behavior: 'smooth' });
});