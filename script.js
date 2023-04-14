const navEl = document.getElementById("mobile-menu-btn");
const nav = document.getElementsByTagName("nav");

navEl.addEventListener("click", () => {
    nav[0].classList.toggle("active");
});
