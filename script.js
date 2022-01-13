$(document).ready(function(){
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Student", "Developer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Student", "Developer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});

$(window).scroll(function() {
    if($(window).scrollTop()) {
        $(".nav-shadow").addClass("purple");
        $(".logo").addClass("purple");
        $(".logo span").addClass("purple");
        $(".navbar").addClass("purple");
        $(".navbar ul li").addClass("purple");
        $(".nav-link").addClass("purple");
        $(".nav-link:hover").addClass("purple");

    }
    else {
        $(".nav-shadow").removeClass("purple");
        $(".logo").removeClass("purple");
        $(".logo span").removeClass("purple");
        $(".navbar").removeClass("purple");
        $(".navbar ul li").removeClass("purple");
        $(".nav-link").removeClass("purple");
        $(".nav-link:hover").removeClass("purple");
    }
});