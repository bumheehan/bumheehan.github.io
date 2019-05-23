$(document).ready(function () {

    window.addEventListener("scroll", function () {
        if (window.scrollY > window.innerHeight * 2) {
            ele = document.querySelector(".back");
            ele.style = "background-image: url(/res/contact.jpg)";
        } else {
            ele = document.querySelector(".back");
            ele.style = "background-image: url(/res/background.jpg)";
        }


    })




    /* 메뉴 */
    menu = document.querySelectorAll(".menuitem");

    menu[0].addEventListener("click", function () {
        var offset = $(".aboutme").offset();
        $("html, body").stop().animate({
            scrollTop: offset.top
        }, 1000);
    })
    menu[1].addEventListener("click", function () {
        var offset = $(".project").offset();
        $("html, body").stop().animate({
            scrollTop: offset.top
        }, 1000);
    })
    menu[2].addEventListener("click", function () {
        var offset = $(".contact").offset();
        $("html, body").stop().animate({
            scrollTop: offset.top
        }, 1000);
    })

    pro = document.querySelectorAll(".project_item_sub");
    pro.forEach((ele)=>{
        $(ele).hover(
          function () {
              $(this).stop().animate({height:"500px"},500);
          },
           function () {
            $(this).stop().animate({height:"250px"},500);
          }
        );

    });


});
