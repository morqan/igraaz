$(document).ready(function () {
    $("#forumDiscussInput").bind("keyup", function() {
        var text = $(this).val().toLowerCase();
        var items = $(".forum__discuss--topic");
    
        //first, hide all:
        items.parent().parent().hide();
    
        //show only those matching user input:
        items.filter(function () {
            return $(this).text().toLowerCase().indexOf(text) > -1;
        }).parent().parent().show();
    });
});

