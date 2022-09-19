const inputEl = document.querySelector("#validation-input");

const inoutBlur = (event) => {
    const { dataset, value } = event.target;
    const requiredLength = Number(dataset.length);
    if (requiredLength === value.length) {
        event.target.classList.add("valid");
        changeClass("valid", "invalid", event.target);
    } else {
        event.target.classList.add("invalid");
        changeClass("invalid", "valid", event.target);
    }
};

function changeClass(add, remove, elem) {
    elem.classList.add(add);
    elem.classList.remove(remove);
}

inputEl.addEventListener("blur", inoutBlur);
