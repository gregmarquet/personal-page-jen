$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  var height = $(window).height();

  var offsetTop = $('.pre-block-1').offset().top;
  var preBlockHeight = $('.pre-block-1').height();
  var separatorScrollDist = preBlockHeight - 100;

  $('.title-container').css({
    'transform': 'translate(0px, '+ wScroll / 2.3 +'%)',
    'opacity': (((height) - wScroll) / height)
  });

  if(wScroll > (offsetTop + preBlockHeight * 0.25)){
    $('.pre-block-1 h1').css({
      'opacity': (((separatorScrollDist) - (wScroll - offsetTop)) / separatorScrollDist)  
    });
  } else {
    $('.pre-block-1 h1').css({
      'opacity': 1 
    });
  }

});

