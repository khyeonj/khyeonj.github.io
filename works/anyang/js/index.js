$(function(){

    $('#gray_n').click(function(e){
        e.preventDefault();
        $('#notice_box_wrap').css('display' , 'none');
        $('#red1').css('background', '#a3a3a3');
        $('#black_n h5').css('color', 'var(--font-cSub2)');

        $('#press_box_wrap').css('display' , 'block');
        $('#gray').css('background', '#d0111b');
        $('#gray_n h5').css('color', 'var(--font-color)');
    });
    $('#black_n').click(function(e){
        e.preventDefault();
        $('#notice_box_wrap').css('display' , 'block');
        $('#red1').css('background', '#d0111b');
        $('#black_n h5').css('color', 'var(--font-color)');

        $('#press_box_wrap').css('display' , 'none');
        $('#gray').css('background', '#a3a3a3');
        $('#gray_n h5').css('color', 'var(--font-cSub2)');
    });

    //메인배너
    let i=0;
    let speed = 800;
    let timing = 3000;
    let $mainBanner = $('#main_banner');
    let $banner = $('#banner');
    let $bannerA = $('#banner li a')
    let $btnGroup = $('#btnGroup li');

    let wid = $bannerA.width();
    let num = $btnGroup.length ;

    doSlide();
    function doSlide(){
        $btnGroup.click(function(e){
            e.preventDefault();
            let index = $(this).index();
            i=index;
            $btnGroup.children('a').removeClass('on');
            $(this).children('a').addClass('on');

            $banner.animate({'marginLeft':-wid*i},speed);
        });
    }
    autoPlay();
    function autoPlay(){
        setInterval(function(){
            i++;
            if(i==num) i=0;
            $btnGroup.children('a').removeClass('on');
            $btnGroup.eq(i).children('a').addClass('on');

            $banner.animate({'marginLeft':-wid*i},speed);
        },timing);
    }

    // e. header


    
    $('#o_box1_h').hover(
        function(){
            $('#o_box1_h').css('opacity','1');
        },
        function(){
            $('#o_box1_h').css('opacity','0');
        }
    );
    $('#o_box2_h').hover(
        function(){
            $('#o_box2_h').css('opacity','1');
        },
        function(){
            $('#o_box2_h').css('opacity','0');
        }
    );
    $('#o_box3_h').hover(
        function(){
            $('#o_box3_h').css('opacity','1');
        },
        function(){
            $('#o_box3_h').css('opacity','0');
        }
    );
    $('#o_box4_h').hover(
        function(){
            $('#o_box4_h').css('opacity','1');
        },
        function(){
            $('#o_box4_h').css('opacity','0');
        }
    );
    $('#o_box5_h').hover(
        function(){
            $('#o_box5_h').css('opacity','1');
        },
        function(){
            $('#o_box5_h').css('opacity','0');
        }
    );




    //운영기관
    let operationBox = $('.oBoxWrap')

    $('.oRightBtn').click(function(e){
        e.preventDefault();
        //마진으로 보낸 후 맨 뒤로 보내야함
        $('.oBoxWrap>div:first-child').stop().animate({'marginLeft':'-348px'},500,function(){
            $(this).appendTo(operationBox).removeAttr('style')
        });
        operationBox.stop().animate({'marginLeft':'0'},500);
    });
    $('.oLeftBtn').click(function(e){
        e.preventDefault();
        $('.oBoxWrap>div:last-child').prependTo(operationBox);
        operationBox.css('marginLeft','-348px');
        operationBox.stop().animate({'marginLeft': '0'},500);
    });


});