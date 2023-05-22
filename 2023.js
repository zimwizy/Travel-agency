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

  $("#btns").click(function(){
    $('.load').show() && $('.cabin').hide() && $('#btns').hide();
    setTimeout(function() {
      window.location.replace("search.html");
    }, 3000)
  });

  var closed = false;
  $('#menuimg').click(function(){
    closed = !closed;
    closed ? $('.mobile').show() : $('.mobile').hide();
  });

  
 