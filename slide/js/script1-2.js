$(function(){
    var moving=$('.area'), 
        setIntervalId;
    slide();
    function slide(){
        setIntervalId=setInterval(function(){
            moving.find('ul').animate({left:-200},500,function(){
                $(this).children('li:first').insertAfter($(this).children('li:last'));
                $(this).css({left:0});
            });
        },2000);
    };
    $('.container_1').hover(function(){
        clearInterval(setIntervalId);
    },function(){
        slide();
    });

    $('.left').click(function(){
        left();
        return false;
    });
    $('.right').click(function(){
        right();
        return false;
    });
    function left(){
        moving.find('li:last').insertBefore(moving.find('li:first'));
        moving.css({left:-200}).stop().animate({left:0},500);
    };
    function right(){
        moving.animate({left:200*-1},500,function(){
            $(this).children('li:first').insertAfter($(this).children('li:last'));
            $(this).css({left:0})
        });
    };
});