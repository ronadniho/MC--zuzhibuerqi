$(function(){
    var headerH = $('.header').height();
    var containerH = $('.container').height();
    $('.content').css('height',(containerH-headerH)+'px');
});