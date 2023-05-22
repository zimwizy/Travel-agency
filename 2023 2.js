 const par1 = document.getElementById('par1');
 const img1 = document.getElementById('imgm1');

 img1.addEventListener('mouseover', function function1(){
  par1.style.display = 'block';
  img1.style.transform = 'scale(1.2)';
  img1.style.filter = "brightness(50%)";
  img1.style.transitionDuration = '0.5s';

 }
 );
 img1.addEventListener('mouseout', function function2(){
  par1.style.display = 'none';
  img1.style.transform = 'scale(1.0)';
  img1.style.filter = "brightness(100%)";
 }
 );
 par1.addEventListener('mouseover', function function1(){
  par1.style.display = 'block';
  img1.style.transform = 'scale(1.2)';
  img1.style.filter = "brightness(50%)";
 }
 );
 par1.addEventListener('mouseout', function function2(){
  par1.style.display = 'none';
  img1.style.transform = 'scale(1.0)';
  img1.style.filter = "brightness(100%)";
 }
 );
 const par2 = document.getElementById('par2');
 const img2 = document.getElementById('imgm2');

 img2.addEventListener('mouseover', function function3(){
  par2.style.display = 'block';
  img2.style.transform = 'scale(1.2)';
  img2.style.filter = "brightness(50%)";
  img2.style.transitionDuration = '0.5s';
 }
 );
 img2.addEventListener('mouseout', function function4(){
  par2.style.display = 'none';
  img2.style.transform = 'scale(1.0)';
  img2.style.filter = "brightness(100%)";
 }
 );
 par2.addEventListener('mouseover', function function4(){
  par2.style.display = 'block';
  img2.style.transform = 'scale(1.2)';
  img2.style.filter = "brightness(50%)";
 }
 );
 par2.addEventListener('mouseout', function function4(){
  par2.style.display = 'none';
  img2.style.transform = 'scale(1.0)';
  img2.style.filter = "brightness(100%)";
 }
 );
 const par3 = document.getElementById('par3');
 const img3 = document.getElementById('imgm3');

 img3.addEventListener('mouseover', function function1(){
  par3.style.display = 'block';
  img3.style.transform = 'scale(1.2)';
  img3.style.filter = "brightness(50%)";
  img3.style.transitionDuration = '0.5s';

 }
 );
 img3.addEventListener('mouseout', function function2(){
  par3.style.display = 'none';
  img3.style.transform = 'scale(1.0)';
  img3.style.filter = "brightness(100%)";
 }
 );
 par3.addEventListener('mouseover', function function1(){
  par3.style.display = 'block';
  img3.style.transform = 'scale(1.2)';
  img3.style.filter = "brightness(50%)";
 }
 );
 par3.addEventListener('mouseout', function function2(){
  par3.style.display = 'none';
  img3.style.transform = 'scale(1.0)';
  img3.style.filter = "brightness(100%)";
 }
 );
 const par4 = document.getElementById('par4');
 const img4 = document.getElementById('imgm4');

 img4.addEventListener('mouseover', function function1(){
  par4.style.display = 'block';
  img4.style.transform = 'scale(1.2)';
  img4.style.filter = "brightness(50%)";
  img4.style.transitionDuration = '0.5s';
 }
 );
 img4.addEventListener('mouseout', function function2(){
  par4.style.display = 'none';
  img4.style.transform = 'scale(1.0)';
  img4.style.filter = "brightness(100%)";
 }
 );
 par4.addEventListener('mouseover', function function1(){
  par4.style.display = 'block';
  img4.style.transform = 'scale(1.2)';
  img4.style.filter = "brightness(50%)";
 }
 );
 par4.addEventListener('mouseout', function function2(){
  par4.style.display = 'none';
  img4.style.transform = 'scale(1.0)';
  img4.style.filter = "brightness(100%)";
 }
 );
 const par5 = document.getElementById('par5');
 const img5 = document.getElementById('imgm5');

 img5.addEventListener('mouseover', function function1(){
  par5.style.display = 'block';
  img5.style.transform = 'scale(1.2)';
  img5.style.filter = "brightness(50%)";
  img5.style.transitionDuration = '0.5s';
 }
 );
 img5.addEventListener('mouseout', function function2(){
  par5.style.display = 'none';
  img5.style.transform = 'scale(1.0)';
  img5.style.filter = "brightness(100%)";
 }
 );
 par5.addEventListener('mouseover', function function1(){
  par5.style.display = 'block';
  img5.style.transform = 'scale(1.2)';
  img5.style.filter = "brightness(50%)";
 }
 );
 par5.addEventListener('mouseout', function function2(){
  par5.style.display = 'none';
  img5.style.transform = 'scale(1.0)';
  img5.style.filter = "brightness(100%)";
 }
 );
 let slides = document.querySelectorAll(".slide");
 let currentSlide = 0;
 let slideInterval = setInterval(nextSlide, 2000);
 
 function nextSlide() {
   slides[currentSlide].classList.remove("active");
   currentSlide = (currentSlide + 1) % slides.length;
   slides[currentSlide].classList.add("active");
 }
 