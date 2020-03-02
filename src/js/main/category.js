$('.category-genre').on('change', function () {
    $('.category-genre-hidden').val($(this).val());
});

$('.category-genre').select2({
    placeholder: "JANR SEÇİN",

});
$('.category-platform').on('change', function () {
    $('.category-platform-hidden').val($(this).val());
});

$('.category-platform').select2({
    placeholder: "PLATFORMA SEÇİN",

});
$('.category-sort').on('change', function () {
    $('.category-sort-hidden').val($(this).val());
});

$('.category-sort').select2({
    placeholder: "SIRALAMA",

});
// $('.select2-selection').addClass('myDrop--2');