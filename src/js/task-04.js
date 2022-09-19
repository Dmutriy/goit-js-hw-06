const counterValue = {
    velue: 0,
    decrement() {
        this.velue -= 1;
    },
    increment() {
        this.velue += 1;
    },
};

const valueEl = document.querySelector("#value");
const btnDecrementEl = document.querySelector(
    'button[data-action="decrement"]'
);
const btnIncrementEl = document.querySelector(
    'button[data-action="increment"]'
);

btnDecrementEl.addEventListener("click", () => {
    counterValue.decrement();
    valueEl.textContent = counterValue.velue;
});
btnIncrementEl.addEventListener("click", () => {
    counterValue.increment();
    valueEl.textContent = counterValue.velue;
});
