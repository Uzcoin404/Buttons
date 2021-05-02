$(document).ready(function(){

    $('.neon').click(function(){

        $('.water__blog').toggleClass("show");

    });

    $('.water').click(function(){

        $('.button__blog').toggleClass("show");

    });

    $('.button').click(function(){

        $('.pixel__blog').toggleClass("show");

    });

    $('.pixel').click(function(){

        $('.water__blog').toggleClass("show");
        $('.button__blog').toggleClass("show");
        $('.pixel__blog').toggleClass("show");

    });

});
