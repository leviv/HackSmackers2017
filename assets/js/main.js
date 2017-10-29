$("#font").change(function() {
    //alert($(this).val());
    $('.textbox').css("font-family", $(this).val());

});

$("#font-color").change(function() {
    //alert("#" + $("#btnPicker").val());
    $('.textbox').css("color", ("#" + $("#font-color").val()));
});

$("#font-bg").change(function() {
    //alert("#" + $("#btnPicker").val());
    $('.textbox').css("background-color", ("#" + $("#font-bg").val()));
});