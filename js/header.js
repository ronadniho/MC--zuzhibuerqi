$(function () {

    var headerW = $('.header').width();
    var windowW = $(window).width();
    console.log(windowW)
    console.log(headerW)
    var logoW = $('.logo').width();
    $('.nav').css('width', (headerW - logoW ) + 'px');
});