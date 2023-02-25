const slider = document.getElementById("slides");
const prevBtn = document.getElementById("slider-prev-btn");
const nextBtn = document.getElementById("slider-next-btn");
let indicators = document.getElementsByClassName(
  "seventh-block__settings-block__slider-container__indicator__line"
);
let slideIndex = 0;

function setActive(index) {
  for (let i = 0; i < 4; i++) {
    if (i === index) {
      indicators[i].classList.add("active");
    } else {
      indicators[i].classList.remove("active");
    }
  }
}

function slideTo(index) {
  slider.style.transform = `translateX(-${index * 25}%)`;
}

prevBtn.addEventListener("click", () => {
  slideIndex = slideIndex === 0 ? 3 : slideIndex - 1;
  slideTo(slideIndex);
  setActive(slideIndex);
});

nextBtn.addEventListener("click", () => {
  slideIndex = slideIndex === 3 ? 0 : slideIndex + 1;
  slideTo(slideIndex);
  setActive(slideIndex);
});
