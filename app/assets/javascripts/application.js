// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

//Page Scroll
jQuery(document).ready(function ($) {
	 $('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
			|| location.hostname == this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - 32
				}, 1000);
				return false;
			}
		}
	});
});

// Fixed Nav
jQuery(document).ready(function ($) {
	$(window).scroll(function(){
		var scrollTop = 142;
		if($(window).scrollTop() >= scrollTop){
			$('nav').css({
				position : 'fixed',
				top : '0'
			});
		}
		if($(window).scrollTop() < scrollTop){
			$('nav').removeAttr('style');	
		}
	})
  
// Active Nav Link
  $('nav ul li a').click(function(){
         $('nav ul li a').removeClass('active');
         $(this).addClass('active');
    });
})

// hamburger menu
$(document).ready(function() {

  jQuery(function($){
     $( '.menu-btn' ).click(function(){
     $( '.responsive-menu' ).toggleClass('expand')
     })
  })

// slideshow

  $(".container > div:gt(0)").hide();

  setInterval(function() { 
    $('.container > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('.container');
  },  5000);

});









