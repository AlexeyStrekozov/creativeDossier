$(window).on('load', function () {
  $('.block-wrap').mouseover(function(){
    $('.face').css({'border' : '15px solid #ebe0f1'});
  });
  $('.block-wrap').mouseleave(function(){
    $('.face').css({'border' : '4px solid #b5d3f2'});
  });

  $('.face').mouseover(function(){
    $('.block').addClass('blockHover');
    $('.block-wrap__img').addClass('hoverAll');

  });
  $('.face').mouseleave(function(){
    $('.block').removeClass('blockHover');
    $('.block-wrap__img').removeClass('hoverAll');
  });
});
