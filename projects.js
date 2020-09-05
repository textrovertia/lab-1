var number = 1;
displaySlides(number);

function addSlides(n) {


  displaySlides(number += n);
}

// Thumbnail image controls
function presentSlide(n) {
  displaySlides(number = n);
}

function displaySlides(n) {
  var i;
  var slides = document.getElementsByClassName("myprojects3");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {number = 1}
  if (n < 1) {number = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[number-1].style.display = "block";
  dots[number-1].className += " active";
}