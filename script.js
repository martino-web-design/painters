
// --- Window Scroll function to show nav ---
/* -- Parallax Effect ---
const winHeight = window.innerHeight;
const nav = document.querySelector('#navbar');

document.addEventListener('scroll', addScrollListener);

function removeScrollListener(){
  document.removeEventListener('scroll', addScrollListener);
}

function addScrollListener(){
  const scrolled = window.scrollY;
  console.log(scrolled,"s");
  console.log(winHeight,"w");


  if(scrolled > winHeight){

    nav.style.zIndex = "1000";
    return removeScrollListener();
  }
}
*/

$(document).ready(function(){

//--- Smooth Scrolling to link section ---
 var scrollLink = $('.smooth'); // css class add to link tags
 scrollLink.click(function(e){
   e.preventDefault();
   $('body,html').animate({scrollTop: $(this.hash).offset().top-100}, 1000)
  }); // end smooth scroll

// --- Window Scroll func.---
  $(window).scroll(function(){

    const nav = document.querySelector('nav');
    const img = document.querySelector('.navCara');
    const main = document.querySelector('main');
    
// --- window scrolling Add Active Nav Class ---
  var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function(){

      var sectionOffset= $(this.hash).offset().top -150;

      if(sectionOffset <= scrollbarLocation){
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }

  }); // end scrollLink func.
}); // end window (main) scroll function


});//end of JQuery doc ready

// --- Menu collapse after target selected ---
const navB = document.querySelector('#navbarSupportedContent ul');
const navDrop = document.querySelector('#navbarSupportedContent');
navB.addEventListener('click',function(){
  if(window.innerWidth < 576){
  navDrop.classList.toggle('show');
  }
});
