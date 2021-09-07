$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:100,
    margin:10,
    dots:true,
    nav:true,
    dotsEach:true,
    items:1,

})



//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




//scroll menu
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 500) {
	   // $(".navbar").css("background" , "#eee");
     $(".navbar").css("background-image" , "url('images/curve1.png')");
      $(".sp").css( { color : "#000" } );
	  }

	  else{
		  $(".navbar").css("background" , "transparent");
      $(".sp").css( { color : "#fff" } );
	  }
  })
})