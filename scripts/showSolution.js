const button = document.querySelector(".show-solution");
const codeContainer = document.querySelector(".code-container.exercise");

button.addEventListener("click", () => {
    codeContainer.classList.toggle("exercise");
    if (button.classList.contains("default-color")) {
        button.classList.remove("default-color");
        button.classList.add("primary-color");
    } else {
        button.classList.remove("primary-color");
        button.classList.add("default-color");
    }  
})