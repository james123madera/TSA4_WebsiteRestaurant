// Add your custom JavaScript here
$(document).ready(function () {
    $(".view-description").click(function () {
      var description = $(this).closest('.menu-item').find('.menu-popup');
      description.addClass('show');
    });
  
    $(".close-menu").click(function () {
      var popup = $(this).closest('.menu-popup');
      popup.removeClass('show');
    });
  
    $(".return-main-menu").click(function () {
      $(".menu-popup").removeClass('show');
    });
  });
  