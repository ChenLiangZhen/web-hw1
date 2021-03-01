
$(".link_text").each(function(i){
    $(this).delay(65*i).animate({"opacity" : 1},400);
    $(this).delay(65*i).animate({"padding-bottom" : 0},400);
});

$(".link_clicker").each(function(i){
    $(this).delay(50*i).animate({"opacity" : 1},400);
    $(this).delay(50*i).animate({"padding-bottom" : 0},400);
});

$(".profile").each(function(i){
    $(this).delay(60*i).animate({"opacity" : 1},800);
    $(this).delay(60*i).animate({"padding-top" : 80},400);
});