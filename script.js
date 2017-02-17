$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  var height = $(window).height();
  $('.title-container').css({
    'transform': 'translate(0px, '+ wScroll / 2.3 +'%)',
    'opacity': (((height - 150) - wScroll) / height)
  });
  

});

