/**
 * File: style.css
 * Name: Mohammed Ba Bakr
 * Student Id: 301124356
 * Date: 12-02-2021
 */


$(document).ready(function(){

    $(".section-services .service .trigger").click(function(){
        $(this).parent().find(".service-content").stop().slideToggle();
    });

    $("#contact-form").submit(function(e) {
        e.preventDefault();
        var name=$("#cf-name").val();
        var email=$("#cf-name").val();
        var msg=$("#cf-name").val();

        console.log(name,email,msg);

        window.location.replace("/");
    });

});