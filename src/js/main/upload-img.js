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