define([
    'jquery',
    'slick'
  ], 
  function($) {
    'use strict';
  
  //Header background colour on scroll
  $(document).ready(function(){
    $(window).on("scroll",function() {
      if($(this).scrollTop() > 300) {
        $(".header.content").addClass("solid");
      }
      else {
        $(".header.content").removeClass("solid");
      }
    });
  });



    //Footer menu
    $(function(){
      $(".footer-menu .footer-menu__link").click(function(e){
        e.preventDefault();
        $(this).toggleClass('link__close');
        $(".footer-menu ul ul").slideUp();
        if ($(this).next().is(":hidden")){
        $(this).next().slideDown();
        }
      });
    });

    //FAQ Accordions
    $(function() {
      $('.accordion__title').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('accordion__close');
        $(".accordion__content").slideUp();
        if ($(this).next().is(":hidden")){
        $(this).next().slideDown();
        }
      });
    });

    //slick slider - images
    $(document).ready(function () {
      $('.template__carousel.products .product-items').slick({
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        infinite: false,
        responsive: [
          {
            breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
          },
          {
            breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
          }
        ]
      });
    });

        //slick slider - recent blog posts
        $(document).ready(function () {
          $('.template__carousel.feat-art .amblog-list').slick({
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            autoplay: false,
            infinite: false,
            responsive: [
              {
                breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                  }
              }
            ]
          });
        });
  
  });