$(document).ready(function () {
    // $('.without-registration-btn').click(function () {
    //     $('.personal-information-box').slideDown(1000);

    // });

    // $('.with-registration-btn').click(function () {
    //     $('.personal-information-box').slideUp(1000);
    // });

    $(".sale-checkbox").on('change', function () {
        if ($(this).is(':checked')) {
            $(this).attr('value', 'true');
            $('.sales-information').css({
                "display": "block"
            });
        } else {
            $(this).attr('value', 'false');
            $('.sales-information').css({
                "display": "none"
            });

            $('.sales-information__input').val('');
        }
    });
    $(".rental-checkbox").on('change', function () {
        if ($(this).is(':checked')) {
            $(this).attr('value', 'true');
            $('.rental-information').css({
                "display": "block"
            });
        } else {
            $(this).attr('value', 'false');
            $('.rental-information').css({
                "display": "none"
            });
            $('.rental-information__input').val('');
        }
    });

    $(".barter-checkbox").on('change', function () {
        if ($(this).is(':checked')) {
            $(this).attr('value', 'true');
            $('.barter-information').css({
                "display": "block"
            });
        } else {
            $(this).attr('value', 'false');
            $('.barter-information').css({
                "display": "none"
            });
            $('.barter-information__input').val('');
            $('.barter-information').find('input:radio').prop('checked', false);
        }
    });

    $("input[type='radio'][name='radio']").on('change', function () {
       let barterDataID = $(this).attr('data-id');
        if ($(this).is(':checked') && barterDataID == 'on-equal-terms') {
            $('.barter-information__input').css({
                "display": "none"
            });
        } else if ($(this).is(':checked') && barterDataID == 'on-money-terms') {
            $('.barter-information__input').css({
                "display": "block"
            });
        }
    });

    $(document).ready(function () {
        $('.advert-platform').select2({
            placeholder: "Platforma",
        });

        $('.advert-platform').on('change', function () {
            $('.advert-platform-hidden').val($(this).val());
        });

        $('.advert-category').select2({
            placeholder: "Kateqoriya",

        });
        $('.advert-category').on('change', function () {
            $('.advert-category-hidden').val($(this).val());
        });
        $('.advert-city').select2({
            placeholder: "Şəhər",

        });
        $('.advert-city').on('change', function () {
            $('.advert-city-hidden').val($(this).val());
        });
        $('.advert-rental-time').select2({
            placeholder: "İcarə müddəti",

        });
        $('.advert-rental-time').on('change', function () {
            $('.advert-rental-time-hidden').val($(this).val());
        });
    });



});
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

$(document).ready(function () {
    $('.registr-form').parsley().on('field:validated', function () {
            var ok = $('.parsley-error').length === 0;
            $('.bs-callout-info').toggleClass('hidden', !ok);
            $('.bs-callout-warning').toggleClass('hidden', ok);
        })
        .on('form:submit', function () {
            return false; // Don't submit form for this demo
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
    function readURL(input1) {

        if (input1.files && input1.files[0]) {

            var reader = new FileReader();
            reader.onload = function (e) {
                $('.myFileInp__img-1').attr('src', e.target.result);
                $(".myFileInp__img-1").css("opacity", "1");
                $(".myFileInp__img-1").prev().css("opacity", "0");
            }

            reader.readAsDataURL(input1.files[0]);

        }

    }
    $("#profile-img-1").change(function(){
        readURL(this);
    });

    function readURL2(input2) {

        if (input2.files && input2.files[0]) {

            var reader2 = new FileReader();
            reader2.onload = function (e) {
                $('.myFileInp__img-2').attr('src', e.target.result);
                $(".myFileInp__img-2").css("opacity", "1");
                $(".myFileInp__img-2").prev().css("opacity", "0");
            }

            reader2.readAsDataURL(input2.files[0]);

        }

    }
    $("#profile-img-2").change(function(){
        readURL2(this);
    });


 });