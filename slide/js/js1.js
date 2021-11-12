$(function(){
    var moving=$('.area');
    $('.left').click(function(){
        moving.find('ul').animate({left:-200},500,function(){
            $(this).children('li:first').insertAfter($(this).children('li:last'));
            $(this).css({left:0})
        })
    })
    $('.right').click(function(){
        moving.find('ul li:last').insertBefore(moving.find('ul li:first'));
        moving.find('ul').css({left:200*-1})
        moving.find('ul').animate({left:0},300);
    })
})