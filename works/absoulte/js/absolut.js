$(function(){
    $('#absolute').click(function(){
        $('#m_left').stop().animate({'margin-left':'-1300px'},800);
        $('#absolute').stop().animate({'margin-right':'-1450px'},800);
        $('#absolute_shadow').stop().animate({'margin-right':'-1900px'},800);
        $('#m_right').stop().animate({'margin-right':'-1300px'},800);
        $('#m_cursor').stop().animate({'margin-right':'-1300px'},800);
        $('#main_wrap').stop().animate({'opacity':0},1000,function(){
            $(this).css('display','none');
        });

        $('#open_wrap').fadeIn(1500);
    });


    $('.btn1').click(function(){
        $('#more_wrap').stop().animate({'height' : '884px','margin-top':'-442px'},1000);
    });
    $('.close1').click(function(){
        $('#more_wrap').animate({'height' : '0','margin-top':'0'},500,function(){
            $('#video_wrap').stop().animate({'height' : '0'},500);
        });
    });
    

    $('#arrow1').click(function(){
        $('#m_warhol_wrap').stop().animate({'left' : '0px'},1000, 'easeOutBounce');
    });
    $('.close1_1').click(function(){
        $('#more_wrap').stop().animate({'height' : '0','margin-top':'0'},500,function(){
            $('#m_warhol_wrap').stop().animate({'left' : '1727px'},500);
            $('#video_wrap').stop().animate({'height' : '0'},500);
        });
    });
    $('.back').click(function(){
        $('#video_wrap').stop().animate({'height' : '0'},0,function(){
            $('#m_warhol_wrap').stop().animate({'left' : '1727px'},500);
        });
    });
    $('#arrow2').click(function(){
        $('#video_wrap').stop().animate({'height' : '338px'},1000, 'easeOutBounce');
    });
    


    $('.btn2').click(function(){
        $('#frame2').stop().animate({'height' : '969px','padding-top':'100px'},1000);
    });
    $('.close3').click(function(){
        $('#frame2').animate({'height' : '0','margin-top':'0'},500);
    });
    
    let list = $('#sub_banner2')
        $('.next').click(function(){
            $('#sub_banner2 ul:first').appendTo(list);
            list.css('marginLeft',0);
            list.animate({'marginLeft':'-640px'},2500);
        });

        let timer = setInterval(nextArrow,3000);
        function nextArrow(){
            $('.next').trigger('click');
        };

        $(list).hover(
            function(){
                clearInterval(timer);
            },
            function(){
                timer = setInterval(nextArrow,3000);
            }
        );


    $('#sb1').mouseenter(function(){
        $('#sbh1').animate({'height':'750px'},1500);
    });
    $('#sbh1').mouseleave(function(){
        $('#sbh1').animate({'height':'0px'},500);
    });
    
    $('#sb2').mouseenter(function(){
        $('#sbh2').animate({'height':'750px'},1500);
    });
    $('#sbh2').mouseleave(function(){
        $('#sbh2').animate({'height':'0px'},500);
    });
    
    $('#sb3').mouseenter(function(){
        $('#sbh3').animate({'height':'750px'},1500);
    });
    $('#sbh3').mouseleave(function(){
        $('#sbh3').animate({'height':'0px'},500);
    });

    $('#sb4').mouseenter(function(){
        $('#sbh4').animate({'height':'750px'},1500);
    });
    $('#sbh4').mouseleave(function(){
        $('#sbh4').animate({'height':'0px'},500);
    });

    $('#sb5').mouseenter(function(){
        $('#sbh5').animate({'height':'750px'},1500);
    });
    $('#sbh5').mouseleave(function(){
        $('#sbh5').animate({'height':'0px'},500);
    });

    $('#sb6').mouseenter(function(){
        $('#sbh6').animate({'height':'750px'},1500);
    });
    $('#sbh6').mouseleave(function(){
        $('#sbh6').animate({'height':'0px'},500);
    });

    $('#sb7').mouseenter(function(){
        $('#sbh7').animate({'height':'750px'},1500);
    });
    $('#sbh7').mouseleave(function(){
        $('#sbh7').animate({'height':'0px'},500);
    });

    $('#sb8').mouseenter(function(){
        $('#sbh8').animate({'height':'750px'},1500);
    });
    $('#sbh8').mouseleave(function(){
        $('#sbh8').animate({'height':'0px'},500);
    });


});