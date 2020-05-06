
// ANIMATE CARD
function scrollWaypointInit( items, trigger ) {
    items.each( function() {
      var element = $(this),
          osAnimationClass = element.data("animation"),
          osAnimationDelay = element.attr('data-animation-delay');
   
      element.css({
          '-webkit-animation-delay':  osAnimationDelay,
          '-moz-animation-delay':     osAnimationDelay,
          'animation-delay':          osAnimationDelay
      });
   
      var trigger = ( trigger ) ? trigger : element;
   
      trigger.waypoint(function() {
          element.addClass('animated').addClass(osAnimationClass);
      },{
         // triggerOnce: true,
          offset: '80%'
      });
    });
  }
  
  //Call the init
  
  $(document).ready(function(){
  
  scrollWaypointInit( $('.animateMe') );
  
  });






  
// Scroll Button //

const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

//Definir la taille de l'écran: 
if (document.body)
{
var larg = (document.body.clientWidth);
var haut = (document.body.clientHeight);
}
var limit = haut -700;
console.log(haut);
console.log(limit);



function scrollFunction() {
  if (window.pageYOffset > 250 ) { // Show backToTopButton
    if(!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
    else if (window.pageYOffset > limit){
    backToTopButton.style.position ="fixed";
    }
    else if (window.pageYOffset < limit ){
      backToTopButton.style.position ="fixed";
      }
  }
  else { // Hide backToTopButton
    if(backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function() {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

// function backToTop() {
//   window.scrollTo(0, 0);
// }

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 750;
  let start = null;
  
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};
