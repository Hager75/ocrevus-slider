const bodyElement = document.getElementById("main-body");
let imgs = [];
let imgUrls = [
  "images/top.png",
  "images/logo.svg",
  "images/slider-1.svg",
  "images/slider-2.svg",
  "images/slider-3.svg",
  "images/slider-4.svg",
  "images/slider-5.svg",
  "images/slider-6.svg",
  "images/slider-7.svg",
  "images/slider-8.svg",
  "images/slider-9.svg",
  "images/slider-10.svg",
  "images/bottom.png",
];
function loadAllImages() {
  for (i = 0; i < imgUrls.length; i++) {
    imgs.push(new Image());
    imgs[i].src = imgUrls[i];
  }
}

loadAllImages();
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(function () {
    bodyElement.classList.add("loaded");
  }, 1000);
});
