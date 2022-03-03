AOS.init();

let hamburger = document.querySelector(".hamburger");
let navigation = document.querySelector(".navigation");
hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("close")
    navigation.classList.toggle("menu-opened")
});


let navigationLinks = document.querySelectorAll(".navigation .menu li a");

navigationLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        hamburger.classList.remove("close")
        navigation.classList.remove("menu-opened")

    })
})