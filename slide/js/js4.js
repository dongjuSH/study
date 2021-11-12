const flex=$('.slide_wrap'),slide=flex.find('>.flex_wrapper>a'),prevBtn=flex.find('.left'),nextBtn=flex.find('.right');
let current=0;
slide.hover(function(){
    slide.removeClass('active');
    $(this).addClass('active');
},function(){
    slide.removeClass('active');
});
prevBtn.click(function(e){
    e.preventDefault();
    let prevSlide=slide.eq(current);
    slide.removeClass('active');
    prevSlide.addClass('active');
    current--;
    if(current==-slide.length){current=0;}
});
nextBtn.click(function(e){
    e.preventDefault();
    let nextSlide=slide.eq(current);
    slide.removeClass('active');
    nextSlide.addClass('active');
    current++;
    if(current==slide.length){current=0;}
});