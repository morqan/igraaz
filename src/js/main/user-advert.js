$(document).ready(function () {
    // $('.without-registration-btn').click(function () {
    //     $('.personal-information-box').slideDown(1000);

    // });

    // $('.with-registration-btn').click(function () {
    //     $('.personal-information-box').slideUp(1000);
    // });

    if($(".user-sale-checkbox").prop('checked') == true){
        $('.sales-information').css({
            "display": "block"
        });
    }else {
        $('.user-sales-information').css({
            "display": "none"
        });
       
    }
    if($(".user-rental-checkbox").prop('checked') == true){
        $('.user-rental-information').css({
            "display": "block"
        });
    }else {
        $('.user-rental-information').css({
            "display": "none"
        });
      
    }
    if($(".user-barter-checkbox").prop('checked') == true){
        $('.barter-information').css({
            "display": "block"
        });
    }else {
        $('.user-barter-information').css({
            "display": "none"
        });
    }

    $(".user-sale-checkbox").on('change', function () {
        if ($(this).is(':checked')) {
           
            $('.user-sales-information').css({
                "display": "block"
            });
        } else {
           
            $('.user-sales-information').css({
                "display": "none"
            });

          
        }
    });
    $(".user-rental-checkbox").on('change', function () {
        if ($(this).is(':checked')) {
           
            $('.user-rental-information').css({
                "display": "block"
            });
        } else {
          
            $('.user-rental-information').css({
                "display": "none"
            });
         
        }
    });

    $(".user-barter-checkbox").on('change', function () {
        if ($(this).is(':checked')) {
          
            $('.user-barter-information').css({
                "display": "block"
            });
        } else {
           
            $('.user-barter-information').css({
                "display": "none"
            });
            $('.user-barter-information').find('input:radio').prop('checked', false);
        }
    });

    $("input[type='radio'][name='barter-radio']").on('change', function () {
       let barterDataID = $(this).attr('data-id');
        if ($(this).is(':checked') && barterDataID == 'on-equal-terms') {
            $('.user-barter-information__input').css({
                "display": "none"
            });
        } else if ($(this).is(':checked') && barterDataID == 'on-money-terms') {
            $('.user-barter-information__input').css({
                "display": "block"
            });
        }
    });

  


});