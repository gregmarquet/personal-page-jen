$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  var height = $(window).height();

  var skillsPreBlockOffsetTop = $('.pre-block-1').offset().top;
  var blogPreBlockOffsetTop = $('.pre-block-2').offset().top;
  var bioPreBlockOffsetTop = $('.pre-block-3').offset().top;
  var preBlockHeight = $('.pre-block').height();
  var separatorScrollDist = preBlockHeight - 100;

  $('.title-container').css({
    'transform': 'translate(0px, '+ wScroll / 2.3 +'%)',
    'opacity': (((height) - wScroll) / height)
  });

  if(wScroll > (skillsPreBlockOffsetTop + preBlockHeight * 0.25)){
    $('.pre-block-1 h1').css({
      'opacity': (((separatorScrollDist) - (wScroll - skillsPreBlockOffsetTop)) / separatorScrollDist)  
    });
  } else {
    $('.pre-block-1 h1').css({
      'opacity': 1 
    });
  }

  if(wScroll > (blogPreBlockOffsetTop + preBlockHeight * 0.25)){
    $('.pre-block-2 h1').css({
      'opacity': (((separatorScrollDist) - (wScroll - blogPreBlockOffsetTop)) / separatorScrollDist)  
    });
  } else {
    $('.pre-block-2 h1').css({
      'opacity': 1 
    });
  }

  if(wScroll > (bioPreBlockOffsetTop + preBlockHeight * 0.25)){
    $('.pre-block-3 h1').css({
      'opacity': (((separatorScrollDist) - (wScroll - bioPreBlockOffsetTop)) / separatorScrollDist)  
    });
  } else {
    $('.pre-block-3 h1').css({
      'opacity': 1 
    });
  }

});

