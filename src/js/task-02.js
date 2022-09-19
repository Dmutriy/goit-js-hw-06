const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];
const listRef = document.querySelector("#ingredients");

const itemList = ingredients.map((ingredient) => {
    const itemEl = document.createElement("li");
    itemEl.classList.add("item");
    itemEl.textContent = ingredient;
    return itemEl;
});
listRef.append(...itemList);

console.log(listRef);
