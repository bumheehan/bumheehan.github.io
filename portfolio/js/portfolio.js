var menu = document.querySelectorAll(".skillmenuitem");
for (let i=0; i < menu.length; i++) {
    menu[i].addEventListener("mouseover", function () {
        let list = document.querySelector(".skilldesc").children;
        for (let c of list) {
            c.style = "display:none";
        }
        list[i].style = "display:flex";
    });
}
