const header = document.querySelector("header");
const navbara = document.querySelector(".navbar a");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);

    header.classList.toggle("changed", window.scrollY >2400 && window.scrollY < 5000);
});
