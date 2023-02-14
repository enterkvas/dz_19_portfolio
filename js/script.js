"use strict";
// Burger menu
const nav = document.querySelector('.navigation'),
  iconBurger = document.querySelector('.burger-btn'),
  navList = document.querySelector('.menu-list'),
  container = document.querySelector('._container');
iconBurger.addEventListener("click", function(e) {
  iconBurger.classList.toggle('_active');
  navList.classList.toggle('_active');
  // container.window.scrollTo({ top: 0, behavior: 'smooth' });
});
// Burger Menu Link Items /Smooth Scrolling
// const menuLinks = document.querySelectorAll('a[href*="#"]');
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    navList.classList.toggle('_active');
    iconBurger.classList.toggle('_active');
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});
// if (menuLinks.length > 0) {
//   menuLinks.forEach(menuLink => {
//     menuLink.addEventListener('click', onMenuLinkClick)
//   })
//   function onMenuLinkClick(e){
    // const menuLink = e.target;
    // const w = document.body.clientWidth;
    // if (w < 992) {
    //   navList.classList.toggle('_active');
    //   iconBurger.classList.toggle('_active');
      // for (let menuLink of menuLinks) {
      //   menuLink.addEventListener("click", function(e) {
      //     e.preventDefault();
      //     const blockID = menuLink.getAttribute('href');
      //     document.querySelector('' + blockID).scrollIntoView({
      //       behavior: "smooth",
      //       block: "start"
      //     })
      //   })
        // e.preventDefault();
      // }
      
      // if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      //   const menuBlock = document.querySelector(menuLink.dataset.goto);
        // const menuBlockValue = menuBlock.getBoundingClientRect().top - document.querySelector('header').offsetHeight;
        // window.scrollTo({
        //   top: menuBlockValue,
        //   behavior: "smooth"
        // });
        // const menuBlockValue = menuBlock.getBoundingClientRect().top - document.querySelector('.navigation').offsetHeight;
        // window.scrollTo({ top: menuBlockValue, behavior: "smooth" });
      
    // }
    // e.preventDefault();
  

// =========== Button Up =======
function btn_up() {
  const btn_upElement = document.createElement('div');
  btn_upElement.className = 'btn_up';
  document.body.append(btn_upElement);

  btn_upElement.addEventListener('click', function (e) {

    window.scrollTo({ top: 0, behavior: 'smooth' });
    btn_upElement.classList.toggle('active');
    e.preventDefault();
  });
  function trackScroll() {
    const scrolled = window.pageYOffset;
    const coords = document.documentElement.clientHeight;

    if (scrolled > coords) { btn_upElement.classList.add('active'); }
    if (scrolled < coords) { btn_upElement.classList.remove('active'); }
  }
  window.addEventListener('scroll', trackScroll);
}
setTimeout(btn_up, 2000);