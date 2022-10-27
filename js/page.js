// a test function that runs when the button is clicked
function sampleFunction() {
  alert("You clicked the button");
}
// Mobile Navigaton Toggle
function navToggle() {
  let siteNav = document.getElementById('site-nav');
  let trigram = document.getElementById('trigram');
  if (siteNav.className === 'nav-wrap') {
    siteNav.classList.add('mobile');
    trigram.classList.add('tri-mobile');
  } else {
    siteNav.classList = ('nav-wrap');
    trigram.classList = ('nav-link');
  }
}

// Slideshow Functions
var slideIndex = 1; 

showSlides(slideIndex); 

function plusSlides(n) { 
  showSlides(slideIndex += n); 
}

function currentSlide(n) { 
  showSlides(slideIndex = n); 
}

function showSlides(n) { 
  var i; 
  var slides = document.getElementsByClassName("slide"); 
  var indicator = document.getElementsByClassName("indicator"); 
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length} 
  for (i = 0; i < slides.length; i++) { 
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < indicator.length; i++) { 
      indicator[i].className = indicator[i].className.replace(" active", ""); 
  }
  slides[slideIndex-1].style.display = "block"; 
  indicator[slideIndex-1].className += " active"; 
}

