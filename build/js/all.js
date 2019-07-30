$(document).ready(function(){
    $('.main__carousel').owlCarousel({
        loop:true,
        dotsContainer: '#carousel-custom-dots',
        navContainer:'#carousel-custom-nav',
        navText : ['ƏVVƏLKİ','SONRAKI'],
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            768:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
  });

  $(document).ready(function() {
    $(".myOwl__dot").click(function () {
        $(".myOwl__dot").removeClass("myOwl__dot--active");
        $(this).addClass("myOwl__dot--active");   
    });
 });
