/**
 * Created by Skyler DeGrote on 3/27/16.
 */

$("#mainCharacter").click(function(){
    $(".active").removeClass("active");
    $(".visible").toggle().removeClass("visible").addClass("hidden");
    $(".mainCharacter").toggle().removeClass("hidden").addClass("visible");
    $(this).addClass("active");
});