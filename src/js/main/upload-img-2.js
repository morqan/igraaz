
 $(document).ready(function() {
    //  MY PROFİLE .HTML
        
        var readURL3 = function(input3) {
            if (input3.files && input3.files[0]) {
                var reader3 = new FileReader();
    
                reader3.onload = function (e) {
                    $('.profile-pic').attr('src', e.target.result);
                }
        
                reader3.readAsDataURL(input3.files[0]);
            }
        }
        
    
        $(".file-upload").on('change', function(){
            readURL3(this);
        });
        
        $(".upload-button").on('click', function() {
           $(".file-upload").click();
        });
    
        var readURL = function(input4) {
            if (input4.files && input4.files[0]) {
                var reader4 = new FileReader();
    
                reader4.onload = function (e) {
                    $('.bg-pic').attr('src', e.target.result);
                }
        
                reader4.readAsDataURL(input4.files[0]);
            }
        }
        
    
        $(".file-upload-1").on('change', function(){
            readURL(this);
        });
        
        $(".upload-button-1").on('click', function() {
           $(".file-upload-1").click();
        });
        
    
    });