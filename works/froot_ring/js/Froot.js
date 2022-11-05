$(function(){
    let $navi = $('.navi li a');
    let $box = $('.box');

    $($navi).click(function(e){
        e.preventDefault();
        let tg = $(this).attr('href');
        let $this = $(this);
        //.on 클래스 추가
        activeBtn($this);
        showTab(tg);
        mainTab();
        iceTab();
        cakeTab();
        viyottTab();
    });
    function activeBtn($this){
        $navi.removeClass('on');
        $this.addClass('on');
    }
    function showTab(tg){

        $box.css('display','none');
        $(tg).css('display','block');
        
        $box.removeClass('on');
        $(tg).addClass('on');
    }


    mainTab();
    function mainTab(){
        $('.mainBird').stop().animate({'top':'-700px','left':'-1100px'},0)
        .animate({'top':'-175px','left':'-195px'},800);
    }

    function iceTab(){
        $('.iceCream').stop().animate({'bottom':'1000px', 'right': '1043px'},0)
        .animate({'bottom':'136px', 'right': '43px'},1000, 'easeOutBounce');
    }
    
    function cakeTab(){
        $('.cakeBox').stop().animate({'opacity':'0'},0)
        .animate({'opacity':'1'},1500);
    }

    function viyottTab(){
        $('.viyottBox').mouseenter(function(){
            $('.viyottBox').stop().animate({'left': '-200px'},1200)
        });
        $('.viyottInside').mouseleave(function(){
            $('.viyottBox').stop().animate({'left': '50px'},500)
        });
    }

    
});