const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

inputRef.addEventListener("input", changesFontSize);

textRef.style.fontSize = inputRef.value + "px";
function changesFontSize(event) {
    const { value } = event.currentTarget;
    textRef.style.fontSize = `${value}px`;
}
