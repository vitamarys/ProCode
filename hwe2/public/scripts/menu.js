$(".tab-trigger").click(function(){
   
    var id = $(this).attr("data-tab"),
    content = $('.tabs__block[data-tab="'+ id +'"]');
    $('.tab-trigger.active').removeClass('active'); 
    $(this).addClass('active'); 
    
    $('.tab-content.active').removeClass('active'); 
    content.addClass('active');
   
   
})