(function(jQuery){$.fn.BreakingNews=function(settings){var defaults={background:'#FFF',title:'NEWS',titlecolor:'#FFF',titlebgcolor:'#5aa628',linkcolor:'#333',linkhovercolor:'#5aa628',fonttextsize:16,isbold:false,border:'none',width:'100%',autoplay:true,timer:3000,modulid:'brekingnews',effect:'fade'};var settings=$.extend(defaults,settings);return this.each(function(){settings.modulid="#"+$(this).attr("id");var timername=settings.modulid;var activenewsid=1;if(settings.isbold==true)
    fontw='bold';else
    fontw='normal';if(settings.effect=='slide')
    $(settings.modulid+' ul li').css({'display':'block'});else
    $(settings.modulid+' ul li').css({'display':'none'});$(settings.modulid+' .bn-title').html(settings.title);$(settings.modulid).css({'width':settings.width,'background':settings.background,'border':settings.border,'font-size':settings.fonttextsize});$(settings.modulid+' ul').css({'left':$(settings.modulid+' .bn-title').width()+40});$(settings.modulid+' .bn-title').css({'background':settings.titlebgcolor,'color':settings.titlecolor,'font-weight':fontw});$(settings.modulid+' ul li a').css({'color':settings.linkcolor,'font-weight':fontw,'height':parseInt(settings.fonttextsize)+6});$(settings.modulid+' ul li').eq(parseInt(activenewsid-1)).css({'display':'block'});$(settings.modulid+' ul li a').hover(function()
{$(this).css({'color':settings.linkhovercolor});},function()
{$(this).css({'color':settings.linkcolor});});$(settings.modulid+' .bn-arrows span').click(function(e){if($(this).attr('class')=="bn-arrows-left")
    BnAutoPlay('prev');else
    BnAutoPlay('next');});if(settings.autoplay==true)
{timername=setInterval(function(){BnAutoPlay('next')},settings.timer);$(settings.modulid).hover(function()
{clearInterval(timername);},function()
{timername=setInterval(function(){BnAutoPlay('next')},settings.timer);});}
else
{clearInterval(timername);}
    function BnAutoPlay(pos)
    {if(pos=="next")
    {if($(settings.modulid+' ul li').length>activenewsid)
        activenewsid++;else
        activenewsid=1;}
    else
    {if(activenewsid-2==-1)
        activenewsid=$(settings.modulid+' ul li').length;else
        activenewsid=activenewsid-1;}
        if(settings.effect=='fade')
        {$(settings.modulid+' ul li').css({'display':'none'});$(settings.modulid+' ul li').eq(parseInt(activenewsid-1)).fadeIn();}
        else
        {$(settings.modulid+' ul').animate({'marginTop':-($(settings.modulid+' ul li').height())*(activenewsid-1)});}}
    $(window).resize(function(e){if($(settings.modulid).width()<360)
    {$(settings.modulid+' .bn-title').html('&nbsp;');$(settings.modulid+' .bn-title').css({'width':'4px','padding':'10px 0px'});$(settings.modulid+' ul').css({'left':4});}else
    {$(settings.modulid+' .bn-title').html(settings.title);$(settings.modulid+' .bn-title').css({'width':'auto','padding':'10px 20px'});$(settings.modulid+' ul').css({'left':$(settings.modulid+' .bn-title').width()+40});}});});};})(jQuery);


// 插件地址：http://www.jq22.com/jquery-info3285