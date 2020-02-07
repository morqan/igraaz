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