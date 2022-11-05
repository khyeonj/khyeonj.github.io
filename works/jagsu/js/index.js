$(document).ready(function(){
    $('.main_menu>ul>li').hover(
        function(){
            $(this).children('.sub_menu').css('display','block');
            $(this).css('borderBottom','5px solid var(--font-cSub1)');
        },
        function(){
            $(this).children('.sub_menu').css('display','none');
            $(this).css('borderBottom','none');
        }
    );
    
    //메인이미지
    $('.main_left').animate({'left':'5%'},1000);
    $('.main_right').animate({'right':'8%'},1000);

    // 막걸리 소개
    $('.makgeolli_box>div').hover(
        function(){
            $('.makgeolli_box span').css('display','block');
            $(this).find('span').css('display','none');
        },
        function(){
            $('.makgeolli_box span').css('display','none');
        }
    );

    //함께하는 메뉴

    $(window).scroll(function(){
        let st = $(this).scrollTop();
        let et = $('#explanation').offset().top;
        let met = $('#moblie_explanation').offset().top;

        if(st>=et-300 && st<=et){
            $('#explanation .exp_bg').animate({'top':'0','opacity':'1'},800,function(){
                $('#explanation .exp_title').animate({'top':'15%','opacity':'1'},800,function(){
                    $('#explanation .exp_p').animate({'opacity':'1'},800,function(){
                        $('#explanation .exp_front').animate({'bottom':'-1.0%'},400,function(){
                            $('#explanation .explanation1').animate({'bottom':'0'},600);
                            $('#explanation .explanation2').animate({'bottom':'0'},600);
                            $('#explanation .explanation3').animate({'bottom':'0'},600);
                            $('#explanation .explanation4').animate({'bottom':'0'},600);
                        });
                    });
                });
            });
        }

        if(st>=met-300 && st<=met){
            $('#moblie_explanation .exp_bg').animate({'top':'0','opacity':'1'},800,function(){
                $('#moblie_explanation .exp_title').animate({'top':'0%','opacity':'1'},800,function(){
                    $('#moblie_explanation .exp_front').animate({'bottom':'-3%'},400,function(){
                        $('#moblie_explanation .explanation1').animate({'bottom':'0'},600);
                        $('#moblie_explanation .explanation2').animate({'bottom':'0'},600);
                        $('#moblie_explanation .explanation3').animate({'bottom':'0'},600);
                        $('#moblie_explanation .explanation4').animate({'bottom':'0'},600);
                    });
                });
            });
        }
        
    });



    //모바일 메뉴
    $('.m_main_menu>li').hover(
        function(){
            $(this).children('.sub_menu').css('display','block')
            $(this).css('borderBottom','5px solid var(--font-cSub1)')
        },
        function(){
            $(this).children('.sub_menu').css('display','none')
            $(this).css('borderBottom','none')
        }
    );

    //메인이미지
    $('.mobile_main_left').animate({'left':'2.5%'},1000);
    $('.mobile_main_right').animate({'right':'5%'},1000);


    // $('.bars').click(function(){
    //     $('.m_menubars').slideDown(500);
    //     $('#side_menu li:first>a>img').attr('src','img/barclose.png');
    //     // $('#side_menu li:first').removeClass('bars');
    //     $(this).removeClass('bars')
    //     $(this).addClass('bar_open');
    // });
    // $('.bar_open').click(function(){
    //     $('.m_menubars').slideUp(500);
    //     $('#side_menu li:first>a>img').attr('src','img/bars.png');
    //     $('#side_menu li:first').removeClass('bar_open');
    //     $(this).addClass('bars');
    // });

    $('.bars').click(function(){
        $('.m_menubars').slideDown(500);
        $('.barclose').css('display','block');
        $('.bars').css('display','none');
    });
    $('.barclose').click(function(){
        $('.m_menubars').slideUp(500);
        $('.barclose').css('display','none');
        $('.bars').css('display','block');
    });



    
});