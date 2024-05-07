var toogle_menu = document.querySelector(".toggle-menu");
var navBar = document.querySelector("header nav ul");
var close_mark = document.querySelector(".fa-xmark");

toogle_menu.addEventListener("click", function(){
  navBar.style.cssText = "display: flex;width: 114%;height: 100vh;background-color: var(--main-color);flex-direction: column;position: absolute;top: -27px;right: -9px;box-shadow: 11px -20px 10px 10px #808080ba;opacity: 1;"
                        
})

close_mark.addEventListener("click", function(){
  navBar.style.display = "none";
})


var cardsList = document.querySelectorAll(".card")


cardsList.forEach(card => {
  card.addEventListener("click", function(){
    window.open("../HTML/buy.html", "_blank")
  })
});

