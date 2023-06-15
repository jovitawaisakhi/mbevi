
const allSlide = document.querySelectorAll(".slide");
allSlide.forEach((currSlide, index) => {
  currSlide.style.transform = `translateX(${index * 100}%)`;
});

const nextButton = document.querySelector(".btn-next");

let currPosition = 0;
let max = allSlide.length - 1;

nextButton.addEventListener("click", function () {

  if (currPosition === max) {
    currPosition = 0;
  } else {
    currPosition++;
  }

  allSlide.forEach((currSlide, index) => {
    currSlide.style.transform = `translateX(${100 * (index - currPosition)}%)`;
  });
});

const prevButton = document.querySelector(".btn-prev");

prevButton.addEventListener("click", function () {

  if (currPosition === 0) {
    currPosition = max;
  } else {
    currPosition--
  }

  allSlide.forEach((currSlide, index) => {
    currSlide.style.transform = `translateX(${100 * (index - currPosition)}%)`;
  });
});