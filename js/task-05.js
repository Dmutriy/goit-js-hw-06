const nameOutputEl = document.querySelector("#name-output");
const nameInputEl = document.querySelector("#name-input");

const handleInput = (event) => {
    const { value } = event.target;
    nameOutputEl.textContent = value ? value : "Anonymous";
};

nameInputEl.addEventListener("input", handleInput);

// Напиши скрипт, який під час набору тексту
// в інпуті input#name - input(подія input),
//  підставляє його поточне значення в span#name - output.

// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
