const bodyElement = document.getElementById("main-body");
let imgs = [];
let imgUrls = [
  "images/top.png",
  "images/logo.svg",
  "images/slider-1.png",
  "images/slider-2.png",
  "images/slider-3.png",
  "images/slider-4.png",
  "images/slider-5.png",
  "images/slider-6.png",
  "images/slider-7.png",
  "images/slider-8.png",
  "images/slider-9.png",
  "images/slider-10.png",
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
