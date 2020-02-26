$(document).ready(function () {
    // $('.without-registration-btn').click(function () {
    //     $('.personal-information-box').slideDown(1000);

    // });

    // $('.with-registration-btn').click(function () {
    //     $('.personal-information-box').slideUp(1000);
    // });

    if($(".sale-checkbox").prop('checked') == true){
        $('.sales-information').css({
            "display": "block"
        });
    }else {
        $('.sales-information').css({
            "display": "none"
        });
        $('.sales-information__input').val('');
    }
    if($(".rental-checkbox").prop('checked') == true){
        $('.rental-information').css({
            "display": "block"
        });
    }else {
        $('.rental-information').css({
            "display": "none"
        });
        $('.rental-information__input').val('');
    }
    if($(".barter-checkbox").prop('checked') == true){
        $('.barter-information').css({
            "display": "block"
        });
    }else {
        $('.barter-information').css({
            "display": "none"
        });
        $('.barter-information__input').val('');
    }

    $(".sale-checkbox").on('change', function () {
        if ($(this).is(':checked')) {
           
            $('.sales-information').css({
                "display": "block"
            });
        } else {
           
            $('.sales-information').css({
                "display": "none"
            });

            $('.sales-information__input').val('');
        }
    });
    $(".rental-checkbox").on('change', function () {
        if ($(this).is(':checked')) {
           
            $('.rental-information').css({
                "display": "block"
            });
        } else {
          
            $('.rental-information').css({
                "display": "none"
            });
            $('.rental-information__input').val('');
        }
    });

    $(".barter-checkbox").on('change', function () {
        if ($(this).is(':checked')) {
          
            $('.barter-information').css({
                "display": "block"
            });
        } else {
           
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

        $('.discussion__category').select2({
            placeholder: "Kateqoriya",

        });
        $('.discussion__category').on('change', function () {
            $('.discussion__category-hidden').val($(this).val());
        });
    });



});