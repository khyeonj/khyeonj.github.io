$(function(){
    $('.main li:nth-child(1) a').mouseenter(function(){
        $('.sub').css('display','none');
        $('.sub1').css('display','block');
    });
    $('.main li:nth-child(2) a').mouseenter(function(){
        $('.sub').css('display','none');
        $('.sub2').css('display','block');
    });
    $('.main li:nth-child(3) a').mouseenter(function(){
        $('.sub').css('display','none');
        $('.sub3').css('display','block');
    });
    $('.main li:nth-child(4) a').mouseenter(function(){
        $('.sub').css('display','none');
        $('.sub4').css('display','block');
    });
    $('.sub').mouseleave(function(){
        $('.sub').css('display','none');
    });
    // e. full_header

    $('.bars').click(function(){
        $('.mobile_menu').fadeIn(600);
    });
    $('.mobile_close').click(function(){
        $('.mobile_menu').fadeOut(600, function(){$('.mobile_sub').slideUp(0);});
    });
    $('.mMenu>li>a').click(function(){
        $('.mobile_sub').slideUp(0);
        $(this).parent('li').children('.mobile_sub').slideDown(600);
    });
    // e. mobile_header



    let i =0; //index와 연결해서 생각. 0번째
    let len = $('#panel>li').length;
    let isAnimated = false;
    let timer;

    start(i);

    // 6. 이전버튼, 다음버튼, toggle버튼 클릭했을 때 이벤트연결
    $('.prev').click(function(e){
        e.preventDefault();
        i = $('#panel>li.on').index();
        //index값 바뀜 : 3 2 1 0 => i가 0과 같아지면, i를 4(li의 length)으로 초기화
        if(i==0){
            i=len-1;
        }else{
            i--;
        }
        stop();
        doPrev(i);
    });

    $('.next').click(function(e){
        e.preventDefault();
        i = $('#panel>li.on').index();
        //index값 바뀜 : 0 1 2 3 => i가 4(li의 length)와 같아지면, i를 0으로 초기화
        if(i==len-1){
            i=0;
        }else{
            i++;
        }
        stop();
        doNext(i);
    });

    // 1. prev 함수, next 함수
    function doPrev(i){
        if(!isAnimated){
            isAnimated = true;
            prevSlide(i);
            activeBtn(i);
        }
    }
    function doNext(i){
        if(!isAnimated){
            isAnimated = true;
            nextSlide(i);
            activeBtn(i);
        }
    }

    $('.start').click(function(e){
        e.preventDefault();
        //동작하는 함수
        start(i);
    });
    $('.stop').click(function(e){
        e.preventDefault();
        //멈추는 함수
        stop();
    });

    $('#navi>li').click(function(e){
        e.preventDefault();
        let curNum = $('#panel>li.on').index();
        i=$(this).index();

        stop();
        if(curNum>i){
            doPrev(i);
        }else if(curNum<i){
            doNext(i);
        }
    });

    // 2. 이전 패널이 이동하는 함수, 다음 패널이 이동하는 함수
    function prevSlide(i){
        $('#panel>li').not('.on').css('left','-100%');
        $('#panel>li.on').stop().animate({'left':'100%'},1000,function(){
            $(this).removeClass('on');
        });
        $('#panel>li').eq(i).stop().animate({'left':'0%'},1000, function(){
            $(this).addClass('on');
            isAnimated = false;
        });
    }
    function nextSlide(i){
        $('#panel>li').not('.on').css('left','100%');
        $('#panel>li.on').stop().animate({'left':'-100%'},1000,function(){
            $(this).removeClass('on');
        });
        $('#panel>li').eq(i).stop().animate({'left':'0%'},1000, function(){
            $(this).addClass('on');
            isAnimated = false;
        });
    }

    // 3. 버튼활성화 함수
    function activeBtn(i){
        $('#navi>li>a').removeClass('on');
        $('#navi>li').eq(i).children('a').addClass('on');
    }

    // 4. 자동롤링이 되는 함수
    function start(i){
        $('.start').hide();
        $('.stop').show();

        timer = setInterval(function(){
            if(i==len-1){
                i=0;
            }else{
                i++;
            }
            doNext(i);
        },2000);
    }
    // 5. 자동롤림이 멈추는 함수
    function stop(){
        $('.start').show();
        $('.stop').hide();
        clearInterval(timer);
    }

    // e.slider

    $(window).scroll(function(){
        let scroll = $(this).scrollTop();
        let skinStep1 = $('.skinStep1').offset().top-1000;
        let skinStep2 = $('.skinStep2').offset().top-1000;
        let skinStep3 = $('.skinStep3').offset().top-1400;

        if(scroll>skinStep1){
            $('.skinStep1').animate({'opacity':'1','top':'14vw' },1000);
        }
        if(scroll>skinStep2){
            $('.skinStep2').animate({'opacity':'1','top':'40vw' },1000);
        }
        if(scroll>skinStep3){
            $('.skinStep3').animate({'opacity':'1','bottom':'14vw' },1000);
        }
    });

    // e. skinstep


    let k=0;
    let speed = 1000;
    let timing = 2000;
    let $brandWrap = $('.brand_wrap');
    let $brand = $('.brand');
    let $brandNavi = $('.brand_navi li');

    let wid = $brandWrap.width();
    let num = $brandNavi.length ;

    doSlide();
    function doSlide(){
        $brandNavi.click(function(e){
            e.preventDefault();
            let index = $(this).index();
            k=index;
            $brandNavi.children('a').removeClass('on');
            $(this).children('a').addClass('on');

            $brand.animate({'marginLeft':-wid*k},speed);
        });
    }
    autoPlay();
    function autoPlay(){
        setInterval(function(){
            k++; 
            if(k==num) k=0;
            $brandNavi.children('a').removeClass('on');
            $brandNavi.eq(k).children('a').addClass('on');

            $brand.animate({'marginLeft':-wid*k},speed);
        },timing);
    }

    // e. brandstory


    $('.step').hover(
        function(){
            $('.step_txt>img').css('opacity','1');
            $(this).find('.step_txt>img').css('opacity','0.5');
            $('.detail_btn').css('display','none');
            $(this).children('.detail_btn').css('display','block');
            $(this).find('.red').css('color','var(--font-cSub1)').css('font-weight','bold');
            $(this).find('.steptitle').css('color','var(--font-cSub1)').css('font-weight','bold');
        },
        function(){
            $('.step_txt>img').css('opacity','1');
            $('.detail_btn').css('display','none');
            $(this).find('.red').css('color','#888').css('font-weight','normal');
            $(this).find('.steptitle').css('color','var(--font-color)').css('font-weight','normal');
        }
    );
});