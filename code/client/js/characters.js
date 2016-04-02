/**
 * Created by Skyler DeGrote on 3/27/16.
 */

$("#mainCharacter").click(function(){
    $(".active").removeClass("active");
    $(".visible").toggle().removeClass("visible").addClass("hidden");
    $(".mainCharacter").toggle().removeClass("hidden").addClass("visible");
    $(this).addClass("active");
});


$('.popup').click(function(event) {
    var width  = 575,
        height = 400,
        left   = ($(window).width()  - width)  / 2,
        top    = ($(window).height() - height) / 2,
        url    = this.href,
        opts   = 'status=1' +
            ',width='  + width  +
            ',height=' + height +
            ',top='    + top    +
            ',left='   + left;

    window.open(url, 'twitter', opts);

    return false;
});
