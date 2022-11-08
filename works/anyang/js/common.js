$(function(){
    //gnb
    $('#main').mouseenter(function(){
        $('nav').stop().slideDown(800);
    });
    $('nav').mouseleave(function(){
        $(this).stop().slideUp(800);
    });

    $('#main>li').mouseenter(function(){
        $(this).css('border-bottom','7px solid var(--font-cSub3)');
    });
    $('#main>li').mouseleave(function(){
        $('#main>li').css('border-bottom','none');
    });

    //모바일 메뉴
    $('.bars').click(function(){
        $('.sMenuBar').css('display','block').animate({'right':'0%'},500);
    });
    $('.barclose').click(function(e){
        e.preventDefault();
        $('.sMenuBar').animate({'right':'-45%'},300,function(){
            $('.sMenuBar').css('display','none');
        });
    });
    $('#sMenu>li').click(function(){
        $('.sub').css('display','none');
        $(this).children('.sub').stop().slideDown(500);
        return false
    });
    $( '.sub>li' ).click(function(){
        location.replace('apap.html');
    });
});