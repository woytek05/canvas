const codePresentations = document.querySelectorAll("div.code-presentation");
const codeContainers = document.querySelectorAll("div.code-container");
const codeResults = document.querySelectorAll("div.code-container:not(.exercise) + div.code-result");
const exerciseCodeContainer = document.querySelector("div.code-container.exercise");
const exerciseCodeResult = document.querySelector("div.code-container.exercise + div.code-result");
const button = document.querySelector("button.show-solution");

function checkWidth() {
    const nav = document.querySelector("nav.sidebar");
    const button = document.querySelector("button.show-solution");
    if ((~nav.classList.contains("close") && window.innerWidth < 950) ||
        (nav.classList.contains("close") && window.innerWidth < 800)) {
        codePresentations.forEach(n => n.style.flexDirection = "column");
        codeContainers.forEach(n => n.style.width = "100%");
        codeResults.forEach(n => n.style.width = "100%");
    }
    if (((~nav.classList.contains("close") && window.innerWidth < 950) ||
        (nav.classList.contains("close") && window.innerWidth < 800))  &&
         button.classList.contains("primary-color")) {
        exerciseCodeResult.style.width = "100%";
    }
    if ((~nav.classList.contains("close") && window.innerWidth >= 950) ||
        (nav.classList.contains("close") && window.innerWidth >= 800)) {
        codePresentations.forEach(n => n.style.flexDirection = "row");
        codeContainers.forEach(n => n.style.width = "50%");
        codeResults.forEach(n => n.style.width = "50%");
    }
    if (((~nav.classList.contains("close") && window.innerWidth >= 950) ||
        (nav.classList.contains("close") && window.innerWidth >= 800))  &&
         button.classList.contains("primary-color")) {
        exerciseCodeResult.style.width = "50%";
    }
    if (((~nav.classList.contains("close") && window.innerWidth >= 950) ||
        (nav.classList.contains("close") && window.innerWidth >= 800))  &&
         button.classList.contains("default-color")) {
        exerciseCodeResult.style.width = "100%";
    }
    if (~nav.classList.contains("close")) {
        body.style.minWidth = "620px";
    }
    if (nav.classList.contains("close")) {
        body.style.minWidth = "460px";
    }
    
    setTimeout(checkWidth, 100);
}

button.addEventListener("click", () => {
    exerciseCodeContainer.classList.toggle("exercise");
    if (button.classList.contains("default-color")) {
        button.classList.remove("default-color");
        button.classList.add("primary-color");
    } else {
        button.classList.remove("primary-color");
        button.classList.add("default-color");
    }  
})

checkWidth();