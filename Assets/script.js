// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction(), scrollFunction()};
    function myFunction() {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("myBar").style.width = scrolled + "%";
    }

    var mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
/*
    window.onscroll = function() {scrollFunction()};
*/

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }}

// When the user clicks on the button, scroll to the top of the document
  
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

function topFunction () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }