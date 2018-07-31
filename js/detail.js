$(function () {
    var headerH = $('.header').height();
    var containerH = $('.container').height();
    $('.content').css('height', (containerH - headerH) + 'px');


    $('.aside-left').css('height', (containerH - headerH - 24) + 'px');
    $('.aside-middle').css('height', (containerH - headerH - 24) + 'px');
    $('.aside-right').css('height', (containerH - headerH - 24) + 'px');


    $(window).resize(function ()// 绑定到窗口的这个事件中
    {
        getFontSize();
        var headerW = $('.header').width();
        var logoW = $('.logo').width();
        $('.nav').css('width', (headerW - logoW) + 'px');
        $('.theme').css('height', ($('.aside-middle').outerHeight(true) - $('.aside-middle-top').outerHeight(true) - $('.aside-middle-middle').outerHeight(true)) + 'px')
    });
    getFontSize();


    //显示分数
    $(".star-list li p").each(function (index, element) {
        var num = $(this).attr("tip");
        var www = num * 19;//
        $(this).css("width", www);
    });


    // console.log($('.aside-middle').outerHeight(true))
    // console.log($('.aside-middle-middle').outerHeight(true))
    // console.log($('.aside-middle-top').outerHeight(true))

    $('.theme').css('height', ($('.aside-middle').outerHeight(true) - $('.aside-middle-top').outerHeight(true) - $('.aside-middle-middle').outerHeight(true)) + 'px')
    // $('.aside-middle-bottom').css('height', ($('.aside-middle').outerHeight(true) - $('.aside-middle-top').outerHeight(true)) + 'px');
});