/**
 * Created by Skyler DeGrote on 3/27/16.
 */

$("#mainCharacter").click(function(){
    $(".active").removeClass("active");
    $(".visible").toggle().removeClass("visible").addClass("hidden");
    $(".mainCharacter").toggle().removeClass("hidden").addClass("visible");
    $(this).addClass("active");
});

$("#majorCharacter").click(function(){
    $(".active").removeClass("active");
    $(".visible").toggle().removeClass("visible").addClass("hidden");
    $(".majorCharacter").toggle().removeClass("hidden").addClass("visible");
    $(this).addClass("active");
});

$("#minorCharacter").click(function(){
    $(".active").removeClass("active");
    $(".visible").toggle().removeClass("visible").addClass("hidden");
    $(".minorCharacter").toggle().removeClass("hidden").addClass("visible");
    $(this).addClass("active");
});

$("#sideCharacter").click(function(){
    $(".active").removeClass("active");
    $(".visible").toggle().removeClass("visible").addClass("hidden");
    $(".sideCharacter").toggle().removeClass("hidden").addClass("visible");
    $(this).addClass("active");
});

$("#extraCharacter").click(function(){
    $(".active").removeClass("active");
    $(".visible").toggle().removeClass("visible").addClass("hidden");
    $(".extraCharacter").toggle().removeClass("hidden").addClass("visible");
    $(this).addClass("active");
});