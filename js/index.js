$(function(){
    // 첫화면 휠이벤트
    let elem = '#main';
    function slide1(){
        $('#main').bind('mousewheel', function(e) {
            e.preventDefault();
            let moveTop = $(window).scrollTop();
            if (e.originalEvent.wheelDelta >= 0) {
                e.preventDefault();
            }
            else {
                try{
                moveTop=$('#intro').offset().top+80;
                $('html, body').stop().animate({scrollTop:moveTop},800);
            }catch(e){}
            }
        });
    }
    slide1();
    $(window).resize(slide1);
    $(window).scroll(slide1());
    $('#intro').bind('mousewheel', function(e) {
        if (e.originalEvent.wheelDelta >= 0) {
            try{
                moveTop=$('#main').offset().top-50;
                $('html, body').stop().animate({scrollTop:moveTop},800);
            }catch(e){}
        }
        else {
            
        }
    });

        
    $(window).scroll(function(){
        //스크롤시 nav
        let current = $(this).scrollTop();
        let intro = $('#intro').offset().top;
        if(current > intro - 200){
            $('nav').fadeIn(800).css('display','block');
        }else {
            $('nav').fadeOut(800).css('display','none');
        }

        //스크롤시 nav_sub 여부 및 글씨 컬러
        let aboutMe = $('#aboutMe').offset().top;
        let slider = $('#slider').offset().top;
        let works1 = $('.works1').offset().top;
        let works2 = $('.works2').offset().top;
        let works3 = $('.works3').offset().top;
        let works4 = $('.works4').offset().top;
        let works5 = $('.works5').offset().top;
        let promotion = $('.promotion').offset().top;
        let epilogue = $('#epilogue').offset().top;

        //aboutme
        if(current > intro - 200 && current < slider - 100){
            $('.nav_aboutme>a').css('color','#FCAB00');
        }else {
            $('.nav_aboutme>a').css('color','var(--font-cSub2)');
        }

        //works
        if(current > slider - 100 && current < epilogue - 200){
            $('.nav_sub_wrap').fadeIn(500).css('display','block');
            $('.project>a').css('color','#FCAB00');
        }else {
            $('.nav_sub_wrap').fadeOut(500).css('display','none');
            $('.project>a').css('color','var(--font-cSub2)');
        }

        //서울탁주
        if(current > works1 - 200 && current < works2 - 200){
            $('.nav_jagsu>a').css('color','#FCAB00');
        }else {
            $('.nav_jagsu>a').css('color','var(--font-cSub2)');
        }
        //안양문화예술재단
        if(current > works2 - 200 && current < works3 - 200){
            $('.nav_anyang>a').css('color','#FCAB00');
        }else {
            $('.nav_anyang>a').css('color','var(--font-cSub2)');
        }
        //SK-Ⅱ
        if(current > works3 - 200 && current < works4 - 200){
            $('.nav_sk2>a').css('color','#FCAB00');
        }else {
            $('.nav_sk2>a').css('color','var(--font-cSub2)');
        }
        //델리라또
        if(current > works4 - 200 && current < works5 - 200){
            $('.nav_delilato>a').css('color','#FCAB00');
        }else {
            $('.nav_delilato>a').css('color','var(--font-cSub2)');
        }
        //잼이꾸덕
        if(current > works5 - 200 && current < promotion - 200){
            $('.nav_zam>a').css('color','#FCAB00');
        }else {
            $('.nav_zam>a').css('color','var(--font-cSub2)');
        }
        //프로모션
        if(current > promotion - 200 && current < epilogue - 200){
            $('.nav_promotion>a').css('color','#FCAB00');
        }else {
            $('.nav_promotion>a').css('color','var(--font-cSub2)');
        }

        //epilogue
        if(current > epilogue - 200){
            $('.nav_epilogue>a').css('color','#FCAB00');
        }else {
            $('.nav_epilogue>a').css('color','var(--font-cSub2)');
        }


        // 각 works 메인페이지 스크롤
        let works1Main = $('.works1_main').offset().top;
        let works2Main = $('.works2_main').offset().top;
        let works3Main = $('.works3_main').offset().top;
        let works4Main = $('.works4_main').offset().top;
        let works5Main = $('.works5_main').offset().top;

        if(current > works1Main - 200){
            $('.works1_main').children('img').animate({'bottom':'0'},13000);
        }
        if(current > works2Main - 200){
            $('.works2_main').children('img').animate({'bottom':'0'},13000);
        }
        if(current > works3Main - 200){
            $('.works3_main').children('img').animate({'bottom':'0'},14000);
        }
        if(current > works4Main - 200){
            $('.works4_main').children('img').animate({'bottom':'0'},13000);
        }
        if(current > works5Main - 200){
            $('.works5_main').children('img').animate({'bottom':'0'},15000);
        }
    });


    //gnb초기화
    function resetBtn(){
        $('.nav_wrap>ul>li>a').removeClass('on');
        $('.nav_sub>li>a').removeClass('on');
    }
    //gnb .on추가하는 함수
    function btnAdd(nav_wrap){
        $(nav_wrap).addClass('on');
    }
    function btnAddSub(nav_sub_wrap){
        $(nav_sub_wrap).addClass('on');
    }

    // nav클릭시 스크롤 이동
    $('.home>a').click(function(e){
        e.preventDefault();
        let target = $(this).attr('href');
        let target_pos = $(target).offset().top;
        resetBtn();
        btnAdd('.home a');
        $('html, body').stop().animate({'scrollTop':'0'},1500);
    });
    $('.nav_aboutme>a').click(function(e){
        e.preventDefault();
        let target = $(this).attr('href');
        let target_pos = $(target).offset().top+50;
        resetBtn();
        btnAdd('.nav_aboutme a');
        $('html, body').stop().animate({'scrollTop':target_pos},1500);
    });
    $('.project>a').click(function(e){
        e.preventDefault();
        let target = $(this).attr('href');
        let target_pos = $(target).offset().top;
        resetBtn();
        btnAdd('.project a');
        $('html, body').stop().animate({'scrollTop':target_pos},1500);
    });
    $('.nav_epilogue>a').click(function(e){
        e.preventDefault();
        let target = $(this).attr('href');
        let target_pos = $(target).offset().top+50;
        resetBtn();
        btnAdd('.nav_epilogue a');
        $('html, body').stop().animate({'scrollTop':target_pos},1500);
    });
    

    //nav sub클릭시 스크롤 이동
    $('.nav_jagsu>a').click(function(e){
        e.preventDefault();
        let target = $(this).attr('href');
        let target_pos = $(target).offset().top+10;
        resetBtn();
        btnAddSub('.nav_jagsu a');
        $('html, body').stop().animate({'scrollTop':target_pos},1500);
    });
    $('.nav_anyang>a').click(function(e){
        e.preventDefault();
        let target = $(this).attr('href');
        let target_pos = $(target).offset().top+10;
        resetBtn();
        btnAddSub('.nav_anyang a');
        $('html, body').stop().animate({'scrollTop':target_pos},1500);
    });
    $('.nav_sk2>a').click(function(e){
        e.preventDefault();
        let target = $(this).attr('href');
        let target_pos = $(target).offset().top+10;
        resetBtn();
        btnAddSub('.nav_sk2 a');
        $('html, body').stop().animate({'scrollTop':target_pos},1500);
    });
    $('.nav_delilato>a').click(function(e){
        e.preventDefault();
        let target = $(this).attr('href');
        let target_pos = $(target).offset().top+10;
        resetBtn();
        btnAddSub('.nav_delilato a');
        $('html, body').stop().animate({'scrollTop':target_pos},1500);
    });
    $('.nav_zam>a').click(function(e){
        e.preventDefault();
        let target = $(this).attr('href');
        let target_pos = $(target).offset().top+10;
        resetBtn();
        btnAddSub('.nav_zam a');
        $('html, body').stop().animate({'scrollTop':target_pos},1500);
    });
    $('.nav_promotion>a').click(function(e){
        e.preventDefault();
        let target = $(this).attr('href');
        let target_pos = $(target).offset().top;
        resetBtn();
        btnAddSub('.nav_promotion a');
        $('html, body').stop().animate({'scrollTop':target_pos},1500);
    });


    //nav_sub
    $('.project>a').mouseenter(function(){
            $('.nav_sub_wrap').fadeIn(500).css('display','block');
    });

    $('.nav_sub_wrap').mouseleave(function(){
        $('.nav_sub_wrap').fadeOut(500).css('display','none');
    });


    //slider

    let BackBanner = $('.BackBanner')
    let sliderBanner = $('.sliderBanner')
    let sliderBanner_mobile = $('.sliderBanner_mobile')

    $('.arrowBtn_right a').click(function(e){
        e.preventDefault();
        // back
        $('.BackBanner>li:first-child').stop().animate({'marginLeft':'-27.75vw'},500,function(){
            $(this).appendTo(BackBanner).removeAttr('style')
        });
        BackBanner.stop().animate({'marginLeft':'0'},500);

        //pc
        $('.sliderBanner>li:first-child').stop().animate({'marginLeft':'-33.22vw'},500,function(){
            $(this).appendTo(sliderBanner).removeAttr('style')
        });
        sliderBanner.stop().animate({'marginLeft':'0'},500);

        //mobile
        $('.sliderBanner_mobile>li:first-child').stop().animate({'marginLeft':'-7.18vw'},500,function(){
            $(this).appendTo(sliderBanner_mobile).removeAttr('style')
        });
        sliderBanner_mobile.stop().animate({'marginLeft':'0'},500);
    });
    $('.arrowBtn_left a').click(function(e){
        e.preventDefault();
        // back
        $('.BackBanner>li:last-child').prependTo(BackBanner);
        BackBanner.css('marginLeft','-27.75vw');
        BackBanner.stop().animate({'marginLeft': '0'},500);
        
        //pc
        $('.sliderBanner>li:last-child').prependTo(sliderBanner);
        sliderBanner.css('marginLeft','-33.22vw');
        sliderBanner.stop().animate({'marginLeft': '0'},500);
        
        //mobile
        $('.sliderBanner_mobile>li:last-child').prependTo(sliderBanner_mobile);
        sliderBanner_mobile.css('marginLeft','-7.18vw');
        sliderBanner_mobile.stop().animate({'marginLeft': '0'},500);
    });



});


