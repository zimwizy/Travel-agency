$('#btn').click(function(){
    $(this).fadeOut(1000);
    $('#eu').fadeOut(1000);
    $('.img').show(3000);
    setTimeout(function() {
        window.location.replace("2023.html");
      }, 4000)
})