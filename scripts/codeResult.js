const codePresentations = document.querySelectorAll("div.code-presentation");
const codeContainers = document.querySelectorAll("div.code-container");
const codeResults = document.querySelectorAll("div.code-container:not(.exercise) + div.code-result");

function checkWidth() {
    const nav = document.querySelector("nav.sidebar");
    if ((~nav.classList.contains("close") && window.innerWidth < 950) ||
        (nav.classList.contains("close") && window.innerWidth < 800)) {
        codePresentations.forEach(n => n.style.flexDirection = "column");
        codeContainers.forEach(n => n.style.width = "100%");
        codeResults.forEach(n => n.style.width = "100%");
    }
    if ((~nav.classList.contains("close") && window.innerWidth >= 950) ||
        (nav.classList.contains("close") && window.innerWidth >= 800)) {
        codePresentations.forEach(n => n.style.flexDirection = "row");
        codeContainers.forEach(n => n.style.width = "50%");
        codeResults.forEach(n => n.style.width = "50%");
    }
    if (~nav.classList.contains("close")) {
        body.style.minWidth = "620px";
    }
    if (nav.classList.contains("close")) {
        body.style.minWidth = "460px";
    }
    
    setTimeout(checkWidth, 100);
}

checkWidth();