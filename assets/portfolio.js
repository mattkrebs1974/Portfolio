$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        percent = scroll_pos/(456.25);
        opacityPercent = 1 - percent;
        realOpacityPercent = opacityPercent*100;
        if (scroll_pos > -1 && scroll_pos < 456.25) {
            $("#display").css('margin-top', scroll_pos+'px');
            $("#display").css('opacity', realOpacityPercent + '%');
            $(".nav-link").css('color', 'white');
            $(".nav-link").css('background', 'rgba(0, 0, 0, 0)');
        }
        if (scroll_pos > 456.25 && scroll_pos< 586.25)
        {
            $("#display").css('opacity', '0%');
            $(".nav-link").css('color', 'white');
            $(".nav-link").css('background', 'rgba(0, 0, 0, 0)');
        } 
        if (scroll_pos > 586.25) {

           
            $(".nav-link").css('background', 'rgba(0, 0, 0, 1)');
            $(".nav-link").css('color', 'gray');

        }

        console.log("scrollPos"+scroll_pos);
    });
});

$('a').on('click', function (e) {

    if (this.hash !== '') {
        e.preventDefault();
        const hash = this.hash;

        // console.log(scrollTop);

        $('html, body').animate({ scrollTop: $(hash).offset().top }, 1000);
    }
});


