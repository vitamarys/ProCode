var btn = $(".header-mobile__btn");
var line1 = $(".line_1");
var line2 = $(".line_2");
var line3 = $(".line_3");
var link = $(".mobile__nav__link")
var menu = $(".mobile")
btn.click(function(){
    line1.toggleClass('active');
    line2.toggleClass('active');
    line3.toggleClass('active');
    menu.toggleClass('active');
    
})
link.click(function(){
    line1.removeClass('active');
    line2.removeClass('active');
    line3.removeClass('active');
    menu.removeClass('active');
    
})