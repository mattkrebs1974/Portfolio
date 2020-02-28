$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        percent = scroll_pos / (456.25);
        opacityPercent = 1 - percent;
        realOpacityPercent = opacityPercent * 100;
        var screenWidth = window.innerWidth;
        if (scroll_pos > -1 && scroll_pos < 456.25) {
            $("#display").css('margin-top', scroll_pos + 'px');
            $("#display").css('opacity', realOpacityPercent + '%');
            $(".nav-link").css('color', 'white');
            $(".nav-link").css('background', 'rgba(0, 0, 0, 0)');
        }
        if (scroll_pos > 456.25 && scroll_pos < 586.25) {
            $("#display").css('opacity', '0%');
            $(".nav-link").css('color', 'white');
            $(".nav-link").css('background', 'rgba(0, 0, 0, 0)');
        }
        if (scroll_pos > 586.25) {


            $(".nav-link").css('background', 'rgba(0, 0, 0, 1)');
            $(".nav-link").css('color', 'gray');

        }

       

      



        // console.log("screenWidth" + screenWidth);
    });
});

// get variables for manipulating gradient




//scrolls to the right link
$('a').on('click', function (e) {

    if (this.hash !== '') {
        e.preventDefault();
        const hash = this.hash;

        // console.log(scrollTop);

        $('html, body').animate({ scrollTop: $(hash).offset().top }, 1000);
    }
});

$('a').click(function () {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
});

// Underlines what section you are on. 
var topMenu = $(".nav"),
    topMenuHeight = topMenu.outerHeight() + 15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
        var item = $($(this).attr("href"));
        if (item.length) { return item; }

       
    });

// Bind to scroll
$(window).scroll(function () {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop)
            return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";
    // Set/remove active class
    menuItems
        .parent().removeClass("active")
        .end().filter("[href='#" + id + "']").parent().addClass("active");
  

});


function heightwidth () {

    var height= $(".image").height();
    var width = $(".image").width();
    var area = height * width;
    var pixel = area * .000282;

    console.log("height" + height);
    console.log("width" + width);
    console.log("area" + area);

    $(".flip-card-back").css("font-size", pixel+"px");



}
heightwidth();



// function heightwidth2() {

//     var height2 = $(".image2").height();
//     var width2 = $(".image2").width();
//     var area2 = height2 * width2;
//     var pixel2 = area2 * .000282;

//     console.log("height" + height2);
//     console.log("width" + width2);
//     console.log("area" + area2);

//     $(".flip-card-back2").css("font-size", pixel2 + "px");



// }
// heightwidth2();