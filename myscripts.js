
displaySlide();
var slideNo = 0;


function displaySlide() {
   var currents = index.getElementsByClassName("current");
 var slides = index.getElementsByClassName("extraPic");
 
  for ( var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideNo++;
  
  if (slideNo > slides.length) {slideNo = 1;}    
  
  for (i = 0; i < currents.length; i++) {
    currents[i].className = currents[i].className.replace(" now", "");
  }
  
  currents[slideNo-1].className += " now";
  slides[slideNo-1].style.display = "block";  
  
  
  setTimeout(displaySlide, 5000);
}