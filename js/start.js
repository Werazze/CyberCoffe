jQuery(document).ready(function($){
  
  $('.fs-menu li a:contains("play")').addClass('animate__animated animate__flash animate__infinite infinite animate__slower 3s');
  
  $('.fs-menu li a[href^="#"], .mm-menu li a[href^="#"], .mmb-play a').click(function(){
    let anchor = $(this).attr('href');
    $('html, body').animate({
    scrollTop:  $(anchor).offset().top
    }, 600);
  });
  
  $('.coast-tabs-nav li').each(function(tb){
    let tabindex = tb;
    $(this).click(function(){
      $('.coast-tabs li:eq('+tabindex+')').addClass('active-tab').siblings().removeClass('active-tab');
      $('.coast-tabs-nav li:eq('+tabindex+')').addClass('active-nav').siblings().removeClass('active-nav');
    });
  });
 
  $('.mmb-open span').on('click',function(){
		$('.mm').addClass('is-shown');
		$('body').addClass('overflow-hidden');
	});
  $('.mm-close, .mm-menu li a').on('click',function(){
		$('.mm').removeClass('is-shown');
    $('body').removeClass('overflow-hidden');
	});
  
  
  $(window).scroll(function(){
    if($(this).scrollTop()>200){
      $('.mob-fixed-menu-btns').addClass('is-fixed');
    }
    else if ($(this).scrollTop()<200){
      $('.mob-fixed-menu-btns').removeClass('is-fixed');
    }
  });
  
  
  $('.type_usual .booking-coast-desk, .booking3466').on('click',function(){
		$('.popupcallback').addClass('is-shown');
    $('body').addClass('overflow-hidden');
		/*$('.callback-title span').empty().html('Комфорт');*/
		$('.fofmcallback input[name=callbackbookingtype]').val('Комфорт');
	});
  $('.type_vip .booking-coast-desk').on('click',function(){
    $('.popupcallback').addClass('is-shown');
    $('body').addClass('overflow-hidden');
		/*$('.callback-title span').empty().html('Люкс');*/
    $('.fofmcallback input[name=callbackbookingtype]').val('Люкс');
	});
  $('.type_boot .booking-coast-desk').on('click',function(){
    $('.popupcallback').addClass('is-shown');
    $('body').addClass('overflow-hidden');
		/*$('.callback-title span').empty().html('Буткемп');*/
    $('.fofmcallback input[name=callbackbookingtype]').val('Буткемп');
	});
  $('.type_playstation .booking-coast-desk').on('click',function(){
    $('.popupcallback').addClass('is-shown');
    $('body').addClass('overflow-hidden');
		/*$('.callback-title span').empty().html('Play Station');*/
    $('.fofmcallback input[name=callbackbookingtype]').val('Play Station');
	});
  
  $('.close_modalcallback').click(function (){
    $('.popupcallback').removeClass('is-shown');
    $('body').removeClass('overflow-hidden');
  });
  
  $(document).on('click', '.fofmcallback input:checkbox', function() {
    if($(this).is(':checked')){
      $('.fofmcallback input[type=submit]').removeAttr('disabled');
      $('.callback-btn.btn-parallelogram').removeClass('disabled');
    } else {
      $('.fofmcallback input[type=submit]').attr('disabled','disabled');
      $('.callback-btn.btn-parallelogram').addClass('disabled');
    } 
  });
  
});