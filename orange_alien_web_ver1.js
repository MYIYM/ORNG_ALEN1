$(function() {

  $('.all').fadeIn(1000);

// 虚無くんの点滅
var opacity1 = function() {
  $('#fadeing1').animate({'opacity':'0.6'},1000,function(){
    $('#fadeing1').animate({'opacity':'1'},1000).dequeue();
    setTimeout(opacity1, 1000);
  });
}
opacity1();

// home
$('.home').click(function() {
  if ( $('.home').hasClass('active') ) {

  ;

  } else {

    $('.active').removeClass('active');
    $('.home').addClass('active');

  	$('.mains').animate({'margin-left':'10px','opacity':'0'},150,function(){
      $('.mains').removeClass('block');
      $('.home-main').addClass('block');
      $('.mains').animate({'margin-left':'0px','opacity':'1'},150).dequeue();
	  });

  }
});

// about
$('.about').click(function() {
  if ( $('.about').hasClass('active') ) {

  ;

  } else {
    $('.active').removeClass('active');
    $('.about').addClass('active');

  	$('.mains').animate({'margin-left':'10px','opacity':'0'},150,function(){
      $('.mains').removeClass('block');
      $('.about-main').addClass('block');
      $('.mains').animate({'margin-left':'0px','opacity':'1'},150).dequeue();
	  });
  }
});



// ----s
$('.----s').click(function() {
  if ( $('.----s').hasClass('active') ) {

  ;

  } else {

    $('.active').removeClass('active');
    $('.----s').addClass('active');

  	$('.mains').animate({'margin-left':'10px','opacity':'0'},150,function(){
      $('.mains').removeClass('block');
      $('.----s-main').addClass('block');
      $('.mains').animate({'margin-left':'0px','opacity':'1'},150).dequeue();
	  });
  }
});

});
