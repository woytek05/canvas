const body = document.querySelector("body");
const sidebar = body.querySelector(".sidebar");
const toggle = body.querySelector(".toggle");
const txt = body.querySelector(".text")

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});