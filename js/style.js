// Gallery slideshow:
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


// Validate dropdown: gender no blank
function Validate() {
  var gender = document.getElementById("gender");
  if (gender.value == "") {
      //If left empty display error.
      alert("Please select a gender!");
      return false;
  }
  return true;
}

// Function for JS events on Projects page
function myFunction() {
  document.getElementById("first").innerHTML = "Yes, that's my first project.";
}

function myProjects() {
  alert("Projects page is loaded");
}

function myPageScroll() {
  document.getElementById("scroll").innerHTML = "More to come later.";
}

