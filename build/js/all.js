$(document).ready(function () {
    $('.without-registration-btn').click(function () {
        $('.personal-information-box').slideDown(1000);
        // $('.personal-information-box').delay(1000).queue(function (next) {
        //     $(this).slideDown(1000); 
        //     next();
        // });
    });

    $('.with-registration-btn').click(function () {
        $('.personal-information-box').slideUp(1000);
    });

    // $('.ios-switch').click(function () {
    //     var iosSwitch;
    //     if ($(this)[0].checked) {
    //         iosSwitch = "true";
    //         $(this).parent().parent().removeClass('ios-switch-disable');

    //     } else {
    //         iosSwitch = "false";
    //         $(this).parent().parent().addClass('ios-switch-disable');

    //     }

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
        }
    });

    function DropDown(el) {
        this.dd = el;
        this.placeholder = this.dd.children('span');
        this.opts = this.dd.find('.dd_menu > a');
        this.val = '';
        this.index = -1;
        this.initEvents();
    }
    DropDown.prototype = {
        initEvents: function () {
            var obj = this;

            obj.dd.on('click', function (event) {
                $(this).toggleClass('active');
                return false;
            });

            obj.opts.on('click', function () {
                var opt = $(this);
                obj.val = opt.text();
                obj.index = opt.index();
                obj.placeholder.text(obj.val);
            });
        },
        getValue: function () {
            return this.val;
        },
        getIndex: function () {
            return this.index;
        }
    }

    $(function () {

        function DropDown(el) {

            this.dd = el;
            this.placeholder = this.dd.children('span');
            this.opts = this.dd.find('.custom-dropdown__list > li');

            this.val = '';
            this.index = -1;
            this.initEvents();


        }
        DropDown.prototype = {
            initEvents: function () {
                var obj = this;
               
                obj.dd.on('click', function (event) {
                    $(this).toggleClass('active');
                    return false;
                });

                obj.opts.on('click', function () {
                    var opt = $(this);
                   
                    obj.val = opt.text();
                    obj.index = opt.index();
                    obj.placeholder.text(obj.val);
                
                });
            },
            getValue: function () {
                return this.val;
            },
            getIndex: function () {
                return this.index;
            }
        }

        $(function () {

            var dd = new DropDown($('#dd'));

            $(document).click(function () {
                // all dropdowns
                $('.custom-dropdown').removeClass('active');
            });

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