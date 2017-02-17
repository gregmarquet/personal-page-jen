$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  $('.title-container').css({
    'transform': 'translate(0px, '+ wScroll / 2.3 +'%)'
  });

});