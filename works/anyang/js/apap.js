$(function(){
    $('#gray_n').click(function(){
        $('#notice_box_wrap').css('display' , 'none');
        $('#red1').css('background', '#a3a3a3');
        $('#black_n h5').css('color', 'var(--font-cSub2)');

        $('#press_box_wrap').css('display' , 'block');
        $('#gray').css('background', '#d0111b');
        $('#gray_n h5').css('color', 'var(--font-color)');
    });
    $('#black_n').click(function(){
        $('#notice_box_wrap').css('display' , 'block');
        $('#red1').css('background', '#d0111b');
        $('#black_n h5').css('color', 'var(--font-color)');

        $('#press_box_wrap').css('display' , 'none');
        $('#gray').css('background', '#a3a3a3');
        $('#gray_n h5').css('color', 'var(--font-cSub2)');
    });

    // e. header
    

    //스크롤

    let st1 = $('.st1').offset().top;
    let st2 = $('.st2').offset().top;
    let st3 = $('.st3').offset().top;
    function resetBtn(){
        $('#sub_title>ul>li>a').removeClass('on');
    }
    function btnAdd(subtitle){
        $(subtitle).addClass('on');
    }
    
    $('.st1').click(function(e){
        e.preventDefault();
        let target = $(this).attr('href');
        let target_pos = $(target).offset().top;
        resetBtn();
        btnAdd('.st1');
        $('html, body').stop().animate({'scrollTop':0},1500);
    });
    $('.st2').click(function(e){
        e.preventDefault();
        let target = $(this).attr('href');
        let target_pos = $(target).offset().top;
        resetBtn();
        btnAdd('.st2');
        $('html, body').stop().animate({'scrollTop':target_pos},1500);
    });
    $('.st3').click(function(e){
        e.preventDefault();
        let target = $(this).attr('href');
        let target_pos = $(target).offset().top;
        resetBtn();
        btnAdd('.st3');
        $('html, body').stop().animate({'scrollTop':target_pos},1500);
    });
    

    //사진 클릭
    $('.pl_img1 h5').hide();
    $('.pl_img1 a').click(function(){
        let path = $(this).attr('href');
        $('.pl_left1 img').css('opacity','0').attr('src',path).animate({'opacity':'1'},500);

        $('.caption').remove();
        let h5Txt = $(this).next('h5').text();
        $('.pl_left1').append('<div class="caption"></div>');
        $('.caption').text(h5Txt);

        $('.pl_left1>h5').css('display','none');
        $('.caption').css('opacity','0').animate({'opacity':'1'} , 500);
        return false
    });

    $('.pl_img2 h5').hide();
    $('.pl_img2 a').click(function(){
        let path = $(this).attr('href');
        $('.pl_left2 img').css('opacity','0').attr('src',path).animate({'opacity':'1'},500);

        $('.caption').remove();
        let h5Txt = $(this).next('h5').text();
        $('.pl_left2').append('<div class="caption"></div>');
        $('.caption').text(h5Txt);

        $('.pl_left2>h5').css('display','none');
        $('.caption').css('opacity','0').animate({'opacity':'1'} , 500);
        return false
    });

    $('.pr_img1 h5').hide();
    $('.pr_img1 a').click(function(){
        let path = $(this).attr('href');
        $('.pr_right1 img').css('opacity','0').attr('src',path).animate({'opacity':'1'},500);

        $('.caption').remove();
        let h5Txt = $(this).next('h5').text();
        $('.pr_right1').append('<div class="caption"></div>');
        $('.caption').text(h5Txt);

        $('.pr_right1>h5').css('display','none');
        $('.caption').css('opacity','0').animate({'opacity':'1'} , 500);
        return false
    });

    $('.pr_img2 h5').hide();
    $('.pr_img2 a').click(function(){
        let path = $(this).attr('href');
        $('.pr_right2 img').css('opacity','0').attr('src',path).animate({'opacity':'1'},500);

        $('.caption').remove();
        let h5Txt = $(this).next('h5').text();
        $('.pr_right2').append('<div class="caption"></div>');
        $('.caption').text(h5Txt);

        $('.pr_right2>h5').css('display','none');
        $('.caption').css('opacity','0').animate({'opacity':'1'} , 500);
        return false
    });

    $('.pr_img3 h5').hide();
    $('.pr_img3 a').click(function(){
        let path = $(this).attr('href');
        $('.pr_right3 img').css('opacity','0').attr('src',path).animate({'opacity':'1'},500);

        $('.caption').remove();
        let h5Txt = $(this).next('h5').text();
        $('.pr_right3').append('<div class="caption"></div>');
        $('.caption').text(h5Txt);

        $('.pr_right3>h5').css('display','none');
        $('.caption').css('opacity','0').animate({'opacity':'1'} , 500);
        return false
    });
});