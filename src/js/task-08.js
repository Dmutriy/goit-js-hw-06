const formel = document.querySelector(".login-form");
formel.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Заповнені не всі поля");
    }

    console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
}
