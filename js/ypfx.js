$(function () {


    var scrollW = 17;
    var meauW = $('.meau').width();
    var asideLeftW = $('.aside-left').width();
    $('.aside-right').css('width', (meauW - asideLeftW - scrollW) + 'px');

    var headerH = $('.header').height();

    var containerH = $('.container').height();


    var contentH = $('.content').height();
    var searchH = $('.search').outerHeight(true);

    // $('.meau').css('height', (contentH - searchH) + 'px');


    $(window).resize(function ()// 绑定到窗口的这个事件中
    {
        getFontSize();
        var windowW = $(window).width();
        var logoW = $('.logo').width();
        // $('.nav').css('width', (windowW - logoW) + 'px');
        $('.aside-right').css('width', (meauW - asideLeftW - scrollW) + 'px');
        getContentH();
    });
    getFontSize();
    getContentH();



    function getContentH(){
        var footerH = parseFloat($('.footer').css('height').replace(/px/g, ''));
        console.log($('.container').height())
        $('.content').css('height', ($('.container').height() - headerH - footerH) + 'px');
    }


    // var headerW = $('.header').width();
    // console.log(headerW)
    // var logoW = $('.logo').width();
    // $('.nav').css('width', (headerW - logoW ) + 'px');
});

$('.aside-left').on('click', 'li', function () {
    var hasActive = $(this).hasClass('active');
    if (!hasActive) {
        $(this).addClass('active').siblings().removeClass('active');
        console.log($(this).index());
    }
});

$('.searchBtn').click(function () {
    console.log($('.searchInput').val())
    var hrefArr = location.href.split('/');
    hrefArr[hrefArr.length - 1] = 'search.html';
    location.href = hrefArr.join('/');
})