const refs = {
    divBoxes: document.querySelector("#boxes"),
    inputNu: document.querySelector("input"),
    btnCreate: document.querySelector("[data-create]"),
    btnDestroy: document.querySelector("[data-destroy]"),
};

refs.btnCreate.addEventListener("click", createEl);
refs.btnDestroy.addEventListener("click", () => {
    const markupTab = [];
    {
        const markupEl = `<div></div>`;
        markupTab.push(markupEl);
    }
    refs.divBoxes.innerHTML = markupTab.join("");
});
refs.inputNu.addEventListener("input", (event) => {
    event.currentTarget.value;
});

const markupTab = [];
function createEl() {
    for (let i = 0; i < refs.inputNu.value; i += 1) {
        const markupEl = `<div class="box__itam" style="background-color: ${getRandomHexColor()}; width: ${
            30 + i * 10
        }px; height: ${30 + i * 10}px; border-radius: 6%;"></div>`;
        markupTab.push(markupEl);
    }
    refs.divBoxes.innerHTML = markupTab.join("");
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
