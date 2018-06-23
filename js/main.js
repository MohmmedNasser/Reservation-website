/*global $, console*/

$(document).ready(function () {
  var clicked = false;
  $('nav .nav-btn').on('click', function() {
    if(!clicked) {
      clicked = true;
      $(this).parents('nav').toggleClass('active');
      setTimeout(function() {
        clicked = false;
      }, 1000);
    }
  });


  $(document).on('click', function(e) {
    var clickHover = $(e.target);
    if(!clickHover.closest('nav').length && $('nav').hasClass('active')) {
      $('nav').removeClass('active');
    }
  });


  $(window).scroll(function () {  // .section
    if($(window).scrollTop() >= $('.our-story').offset().top - 200) {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  });


  // Slider Function
  function menuSlider() {
    var $sliderContainer = $('.menu-slider');
    var $slider = $sliderContainer.find('.slider');
    var $sliderBanner = $sliderContainer.find('.slider-banner');
    var $sliderItems = $sliderBanner.find('.slider-item');
    var itemsLength = $sliderItems.length;
    var $nextBtn = $sliderContainer.find('.next');
    var $prevBtn = $sliderContainer.find('.prev');

    var slidesToShow = 3;
    var activeSliders = slidesToShow;

    function responsiveSlides() {
      activeSliders -= slidesToShow;
      if($(window).width() <= 991 && $(window).width() > 550){
				slidesToShow = 2;
			}else if($(window).width() <= 550){
				slidesToShow = 1;
			}else{
				slidesToShow = 3;
			}
      activeSliders += slidesToShow;
    }

    responsiveSlides();

    $sliderItems.outerWidth(parseInt($slider.width() / slidesToShow) + 1);
    var itemWidth = $('.menu-slider .slider-item').outerWidth();
    var itemsWidth = itemWidth * itemsLength;
    $sliderBanner.width(itemsWidth);

    function leftCalc() {
      return itemWidth * itemMove
    }

    $(window).resize(function () {

      responsiveSlides();
      $sliderItems.outerWidth(parseInt($slider.width() / slidesToShow) + 1);

      itemWidth = $('.menu-slider .slider-item').outerWidth();
      itemsWidth = itemWidth * itemsLength;
      $sliderBanner.width(itemsWidth);

      leftCalc();
      $sliderBanner.css("left", -leftCalc());
    });


    var left = 0;
    var itemMove = 0;

    var clicked = false;

    function checkStatus() {
      if(activeSliders == itemsLength) {
        $nextBtn.addClass('disabled');
      } else {
        $nextBtn.removeClass('disabled');
      }

      if(activeSliders == slidesToShow) {
        $prevBtn.addClass('disabled');
      } else {
        $prevBtn.removeClass('disabled');
      }
    }

    checkStatus();

    $nextBtn.click(function () {
      if(!clicked) {
        if(activeSliders != itemsLength) {
          clicked = true;
          itemMove++;
          left = -leftCalc() ;
          $sliderBanner.css("left", left);
          activeSliders++
          setTimeout(function () {
            clicked = false;
          }, 400);
          checkStatus();
        }
      }
    });

    $prevBtn.click(function () {
      if(!clicked) {
        if(activeSliders > slidesToShow) {
          clicked = true;
          itemMove--;
          left = -leftCalc();
          $sliderBanner.css("left", left);
          activeSliders--;
          setTimeout(function () {
            clicked = false;
          }, 400);
          checkStatus();
        }
      }
    });

  }
  menuSlider();


  function reviewSlider() {
    var $sliderContainer = $('.review-slider');
    var $slider = $sliderContainer.find('.slider');
    var $sliderBanner = $sliderContainer.find('.slider-banner');
    var $sliderItems = $sliderBanner.find('.slider-item');
    var itemsLength = $sliderItems.length;
    var $nextBtn = $sliderContainer.find('.next');
    var $prevBtn = $sliderContainer.find('.prev');

    var slidesToShow = 1;
    var activeSliders = slidesToShow;

    /*
    function responsiveSlides() {
      activeSliders -= slidesToShow;
      if($(window).width() <= 991 && $(window).width() > 550){
				slidesToShow = 2;
			}else if($(window).width() <= 550){
				slidesToShow = 1;
			}else{
				slidesToShow = 3;
			}
      activeSliders += slidesToShow;
    }
    responsiveSlides();
    */

    $sliderItems.outerWidth(parseInt($slider.width() / slidesToShow));
    var itemWidth = $('.review-slider .slider-item').outerWidth();
    var itemsWidth = itemWidth * itemsLength;
    $sliderBanner.width(itemsWidth);

    function leftCalc() {
      return itemWidth * itemMove
    }


    $(window).resize(function () {

      // responsiveSlides();
      $sliderItems.outerWidth(parseInt($slider.width() / slidesToShow));

      itemWidth = $('.review-slider .slider-item').outerWidth();
      itemsWidth = itemWidth * itemsLength;
      $sliderBanner.width(itemsWidth);

      $sliderBanner.css("left", -leftCalc());
    });


    var left = 0;
    var itemMove = 0;

    var clicked = false;

    function checkStatus() {
      if(activeSliders == itemsLength) {
        $nextBtn.addClass('disabled');
      } else {
        $nextBtn.removeClass('disabled');
      }

      if(activeSliders == slidesToShow) {
        $prevBtn.addClass('disabled');
      } else {
        $prevBtn.removeClass('disabled');
      }
    }

    checkStatus();

    $nextBtn.click(function () {
      if(!clicked) {
        if(activeSliders != itemsLength) {
          clicked = true;
          itemMove++;
          left = -leftCalc() ;
          $sliderBanner.css("left", left);
          activeSliders++
          setTimeout(function () {
            clicked = false;
          }, 400);
          checkStatus();
        }
      }
    });

    $prevBtn.click(function () {
      if(!clicked) {
        if(activeSliders > slidesToShow) {
          clicked = true;
          itemMove--;
          left = -leftCalc();
          $sliderBanner.css("left", left);
          activeSliders--;
          setTimeout(function () {
            clicked = false;
          }, 400);
          checkStatus();
        }
      }
    });

  }
  reviewSlider();



});
