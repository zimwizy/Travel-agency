let slides = document.querySelectorAll(".slide");
 let currentSlide = 0;
 let slideInterval = setInterval(nextSlide, 2000);
 
 function nextSlide() {
   slides[currentSlide].classList.remove("active");
   currentSlide = (currentSlide + 1) % slides.length;
   slides[currentSlide].classList.add("active");
 }
var sections = document.querySelectorAll('.accordion-section');
var headings = document.querySelectorAll('.accordion-heading');

headings.forEach(function(heading) {
  heading.addEventListener('click', function() {
    var content = this.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      sections.forEach(function(section) {
        section.lastElementChild.style.display = 'none';
      });
      content.style.display = 'block';
    }
  });
});
    $(document).ready(function() {
    var closed = false;
    $('#menuimg').click(function(){
      closed = !closed;
      closed ? $('.mobile').fadeIn(1000) : $('.mobile').hide();      
    });
    $('#close1').click(function(){
      $('.mobile').hide();
    });
  });
  $(document).ready(function() {
    var closed = false;
    $('#imgp').click(function(){
      closed = !closed;
      closed ? $('#login').show() : $('#login').hide();
      
    });
    $('#logbtn').click(function(){
      $('#login').hide();
    });
    $('#closebtn').click(function(){
      $('#login').hide();
    });
    $('#bookbtn').click(function(){
      $('#p5').css('visibility', 'visible');
    });


  });