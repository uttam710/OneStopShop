define([
    'jquery'
  ], 
  function($) {
    'use strict';
 
    // Mobile Menu Functions
    //
    $(function(){
        $(".nav-toggle").click(function(e){
          e.preventDefault();
          $(this).addClass('open');
          $('body').addClass('show-nav');
        });
    });

    $(function(){
        $(".njs-toggle-menu--toggle").click(function(e){
          e.preventDefault();
          $(this).removeClass('open');
          $('body').removeClass('show-nav');
        });
      });

});