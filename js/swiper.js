// const sliderElement = document.getElementById("slider-number");
let mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: false,
  slidesPerView: 3,
  speed: 1000,
  centeredSlides: true,
  effect: "coverflow",
  grabCursor: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 400,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
  // show silde number
  //   on: {
  //     slideChange: function () {
  //       const index_currentSlide = this.realIndex;
  //       const currentSlide = this.slides[index_currentSlide];
  //       currentSlide.getAttribute("aria-label");
  //       sliderElement.innerHTML = currentSlide
  //         .getAttribute("aria-label")
  //         .replace(/ /g, "");
  //     },
  //   },
  // If we need pagination
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  //   renderBullet: function (index, className) {
  //     return '<span class="' + className + '">' + (index + 1) + "</span>";
  //   },
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
