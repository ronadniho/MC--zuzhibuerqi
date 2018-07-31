$(function () {
    var headerW = $('.header').width();
    var headerH = $('.header').height();
    var logoW = $('.logo').width();
    // $('.nav').css('width', (headerW - logoW) + 'px');
    console.log('footerH:'+$('.footer').height())
    var containerH = $('.container').height();

    var contentH = $('.content').height();
    var searchOH = $('.search').outerHeight(true);
    // console.log(searchOH)
    // $('.meau').css('height', (contentH - searchOH) + 'px');


    $(window).resize(function () {
        getFontSize();

    });
    getFontSize();


    $('.searchBtn').click(function () {
        console.log($('.searchInput').val())
        location.href = 'http://127.0.0.1:8080/search.html';
    });
    console.log('footerH:'+$('.footer').height())
    $('.content').css('height', (containerH - headerH - $('.footer').height()) + 'px');
});