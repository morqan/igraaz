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