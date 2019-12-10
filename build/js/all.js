$(document).ready(function(){        
    //для контейнера с id #IDhtmlcont - 
    Dropzone.options.IDhtmlcont = {
      paramName: "file", // имя переменной, используемой для передачи файлов
      maxFilesize: 2, // лимит размера файла в МБ
      parallelUploads: 1, //кол-во параллельных обращений к серверу
      maxFiles: 10, //макс. число файлов в данном контейнере
      accept: function(file, done) {
        //произвольная функция проверки загружаемых файлов
        if (file.type == "image/png") {
          //сообщение без ошибки, если файл забракован
          done("I don`t accept PNGs.");
        }
        //чтобы файл был принят, нужно вызвать done без параметров
        else { done(); }
      }
    };
});



$( document ).ready(function() {
    $("#bd").flatpickr({
        altInput: true,
        altFormat: "F j, Y",
        dateFormat: "Y-m-d",
        disableMobile: "true"
    });
});

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

$( document ).ready(function() {
   // Ripple-effect animation
(function($) {
    $(".ripple-effect").click(function(e){
        var rippler = $(this);

        // create .ink element if it doesn't exist
        if(rippler.find(".ink").length == 0) {
            rippler.append("<span class='ink'></span>");
        }

        var ink = rippler.find(".ink");

        // prevent quick double clicks
        ink.removeClass("animate");

        // set .ink diametr
        if(!ink.height() && !ink.width())
        {
            var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
            ink.css({height: d, width: d});
        }

        // get click coordinates
        var x = e.pageX - rippler.offset().left - ink.width()/2;
        var y = e.pageY - rippler.offset().top - ink.height()/2;

        // set .ink position and add class .animate
        ink.css({
          top: y+'px',
          left:x+'px'
        }).addClass("animate");
    })
})(jQuery);
});
$(document).ready(function() {
    function readURL(input) {

        if (input.files && input.files[0]) {

            var reader = new FileReader();
            reader.onload = function (e) {
                $('.myFileInp__img').attr('src', e.target.result);
                $(".myFileInp__img").css("opacity", "1");
                $(".myFileInp__img").prev().css("opacity", "0");
            }

            reader.readAsDataURL(input.files[0]);

        }

    }

    $("#profile-img").change(function(){
        readURL(this);
    });


 });