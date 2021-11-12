$(function (){
    var open_btn = $(".menu_btn"),
        close_btn = $(".close_btn"),
        panels = $(".panel"),
        links = $(".litem"),
        lines = $(".line"),
        data_content = $(".data__content"),
        data_sub = $(".data__sub"),
        footer = $(".footer");

    var tl = new TimelineLite({paused:true});

    tl.to(panels, .5, {width: "50%"})
        .to(open_btn, .5, {opacity:0, visibility: "hidden", "z-index":0}, "-=.5")
        .to(data_content, .5, {y:0, opacity: 1})
        .to(data_sub, .5, {y:0, opacity: 1}, "-=.25")
        .staggerTo(links, .3, {y:0}, .05, "-=.75")
        .to(lines, .5, {opacity:1})
        .to(footer, .5, {opacity:1}, "-=.5");

    open_btn.click(function (e){
        e.preventDefault();
        tl.play();
    });
    close_btn.click(function (e){
        e.preventDefault();
        tl.reverse();
    });
});