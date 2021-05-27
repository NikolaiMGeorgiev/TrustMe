//add product
const container = document.querySelector(".list-content");

const pNameInput = document.querySelector("#product-name");
const pCountInput = document.querySelector("#count");
const pPackageType = document.querySelector("#package-type");

const pListDataInput = document.querySelector("#product-data");

const shop = document.querySelector("#shop");
const address = document.querySelector("#address");

const pForm = document.querySelector("#product-form");

const circle = document.querySelector("#circle");

pCountInput.addEventListener("input", (event) => {
    if (event.target.value < 0) {
        event.target.value = 0;
    }

    event.target.classList.remove("error");
});

pNameInput.addEventListener("input", (event) => {
    event.target.classList.remove("error");
});

shop.addEventListener("input", (event) => {
    event.target.classList.remove("error");
});

address.addEventListener("input", (event) => {
    event.target.classList.remove("error");
});

circle.addEventListener("click", () => {
    let isValidated = true;

    if (pNameInput.value.length <= 0) {
        pNameInput.classList.add("error");
        isValidated = false;
    }

    if (pCountInput.value.length <= 0 || Number(pCountInput.value <= 0)) {
        pCountInput.classList.add("error");
        isValidated = false;
    }

    if (!isValidated) return;

    const { name, type, count } = {
        name: pNameInput.value,
        type: pPackageType.value,
        count: pCountInput.value,
    };

    const selectedTxt = pPackageType.options[pPackageType.selectedIndex].text;

    const productEl = document.createElement("div");
    productEl.classList.add("list-content__item");
    productEl.innerHTML = `<div>${container.children.length + 1}. ${name}</div>
                            <div class="list-content__item__prop">
                                ${selectedTxt}
                            </div>
                            <div class="list-content__item__prop">
                                ${
                                    count >= 1000
                                        ? count / 1000 + " " + "кг"
                                        : count + " " + "гр"
                                }.
                            </div>`;

    container.appendChild(productEl);
    pListDataInput.value += name + "!" + type + "!" + count + "*";
});

pForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let isValidated = true;

    if (shop.value.length <= 0) {
        shop.classList.add("error");
        isValidated = false;
    }

    if (address.value.length <= 0) {
        address.classList.add("error");
        isValidated = false;
    }

    if (
        shop.value.length > 0 &&
        address.value.length > 0 &&
        container.children.length > 0 &&
        isValidated
    ) {
        event.target.submit();
    }
});
