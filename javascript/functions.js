$(document).ready(function(){

  $("div.left .skill-names i").click(function(){
        $("div.left .uil-angle-down").css({'-webkit-transform' : 'rotate(180deg)', 
        'transform: ' : 'rotate(180deg)',' -webkit-transition': '0.25s linear'});
        $("div.right .uil-angle-down").css({'-webkit-transform' : 'rotate(360deg)', 
        'transform: ' : 'rotate(360deg)',' -webkit-transition': '0.25s linear'});
        $("div.right .skill-progress-bars").css("display","none");
        $("div.left .skill-progress-bars").css("display","block");
    })

   $("div.right .skill-names i").click(function(){
        $("div.right .uil-angle-down").css({'-webkit-transform' : 'rotate(180deg)', 
        'transform: ' : 'rotate(180deg)',' -webkit-transition': '0.25s linear'});
        $("div.left .uil-angle-down").css({'-webkit-transform' : 'rotate(360deg)', 
        'transform: ' : 'rotate(360deg)',' -webkit-transition': '0.25s linear'});
        $("div.left .skill-progress-bars").css("display","none");
        $("div.right .skill-progress-bars").css("display","block");
    })

   $(".selection-qualification-left").click(function(){

         $(".qualification-education").css("display","block");
         $(".qualification-work").css("display","none");
    })

    $(".selection-qualification-right").click(function(){

         $(".qualification-work").css("display","block");
          $(".qualification-education").css("display","none");
    })
});


