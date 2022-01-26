$(document).ready(function(){ 
  $(".fbars").click(function() {
 $("div.menu").addClass("toggled");
  });
  $(".close-menu").click(function() {
   $("div.menu").removeClass("toggled");
   });
  $(".mobile-link").click(function() {
   $("div.menu").removeClass("toggled");
   });
 }); 