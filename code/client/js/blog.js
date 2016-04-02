/**
 * Created by Skyler DeGrote on 3/17/16.
 */
$( document ).ready(function() {
    console.log( "ready!" );


    // TAGS
    $("#characterTag").click(function(){
        $(".active").removeClass("active");
        $(".visible").toggle().removeClass("visible").addClass("hidden");
        $(".character").toggle().removeClass("hidden").addClass("visible");
        $(this).addClass("active");
    });
    $("#chapterTag").click(function(){
        $(".active").removeClass("active");
        $(".visible").toggle().removeClass("visible").addClass("hidden");
        $(".chapter").toggle().removeClass("hidden").addClass("visible");
        $(this).addClass("active");
    });
    $("#sceneTag").click(function(){
        $(".active").removeClass("active");
        $(".visible").toggle().removeClass("visible").addClass("hidden");
        $(".scene").toggle().removeClass("hidden").addClass("visible");
        $(this).addClass("active");
    });
    $("#quoteTag").click(function(){
        $(".active").removeClass("active");
        $(".visible").toggle().removeClass("visible").addClass("hidden");
        $(".quote").toggle().removeClass("hidden").addClass("visible");
        $(this).addClass("active");
    });
    $("#ideaTag").click(function(){
        $(".active").removeClass("active");
        $(".visible").toggle().removeClass("visible").addClass("hidden");
        $(".idea").toggle().removeClass("hidden").addClass("visible");
        $(this).addClass("active");
    });
    $("#feedbackTag").click(function(){
        $(".active").removeClass("active");
        $(".visible").toggle().removeClass("visible").addClass("hidden");
        $(".feedback").toggle().removeClass("hidden").addClass("visible");
        $(this).addClass("active");
    });


    // DATES
    $("#march16tag").click(function(){
        $(".active").removeClass("active");
        $(".visible").toggle().removeClass("visible").addClass("hidden");
        $(".march16").toggle().removeClass("hidden").addClass("visible");
        $(this).addClass("active");
    });
    $("#april16tag").click(function(){
        $(".active").removeClass("active");
        $(".visible").toggle().removeClass("visible").addClass("hidden");
        $(".april16").toggle().removeClass("hidden").addClass("visible");
        $(this).addClass("active");
    });
    $("#may16tag").click(function(){
        $(".active").removeClass("active");
        $(".visible").toggle().removeClass("visible").addClass("hidden");
        $(".may16").toggle().removeClass("hidden").addClass("visible");
        $(this).addClass("active");
    });

    // RESET
    $("#tagsReset").click(function(){
        $(".active").removeClass("active");
        $(".hidden").toggle().removeClass("hidden").addClass("visible");
        $("#blogHomeLink").addClass("active");
    });
    $("#datesReset").click(function(){
        $(".active").removeClass("active");
        $(".hidden").toggle().removeClass("hidden").addClass("visible");
        $("#blogHomeLink").addClass("active");
    });





});




