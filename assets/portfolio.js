$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        percent = scroll_pos/(426.25);
        opacityPercent = 1 - percent;
        realOpacityPercent = opacityPercent*100;
        if (scroll_pos > -1 && scroll_pos < 426.25) {
            $("#display").css('margin-top', scroll_pos+'px');
            $("#display").css('opacity', realOpacityPercent + '%');
        } else 
        {
            $("#display").css('opacity', '0%');
        }


      

        console.log("opacityPercent"+opacityPercent)
    });
});