$(document).ready(function(){ 
  $(".menu-container").click(function() {
    $(".menu").addClass("toggled");
  });
  }); 

  $(document).ready(function(){ 
    $(".close-menu").click(function() {
      $(".menu").removeClass("toggled");
    });
    }); 