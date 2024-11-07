let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('times-icon');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  if (window.scrollY > 0) {
    menu.classList.remove('times-icon');
    navbar.classList.remove('active');
  }
}

var swiper = new Swiper("home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  }
});

var swiper = new Swiper(".review-slider", {
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  }
});