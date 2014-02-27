
$("a").mouseover(function(){
    $(this).css('color', 'white').css('background-color', 'red');
  }).mouseout(function(){
    $(this).css('color', 'black').css('background-color', 'transparent');
});

$('li').mouseover(function(){
    $(this).animate({marginTop: '-1em'});
  }).mouseout(function(){
    $(this).animate({marginTop: '0em'});
});

$(window).load(function(){
    $("#nav1, #nav2, #nav3, #nav4").addClass('contentBox').hide();
});

$('.button-color-1 a').click(function(){
        $("#nav1").show("slow");
        $("#nav2, #nav3, #nav4").hide();
    });
    
$('.button-color-2 a').click(function(){
        $("#nav2").show("slow");
        $("#nav1, #nav3, #nav4").hide();
    });
    
$('.button-color-3 a').click(function(){
        $("#nav3").show("slow");
        $("#nav1, #nav2, #nav4").hide();
    });
    
$('.button-color-4 a').click(function(){
        $("#nav4").show("slow");
        $("#nav1, #nav2, #nav3").hide();
    });