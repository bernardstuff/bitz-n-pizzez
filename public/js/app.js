$(document).ready(function(){
  $('.card').hover(function(){
    $(this).removeClass("shadow-sm");
    $(this).addClass("shadow-lg");
  },
  function () {
    $(this).removeClass("shadow-lg");
    $(this).addClass("shadow-sm");
  });
});