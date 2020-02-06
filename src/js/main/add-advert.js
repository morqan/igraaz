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