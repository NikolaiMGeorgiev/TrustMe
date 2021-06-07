const urlParams = window.location.href
    .split("?")[1]
    .split("&")
    .map((p) => (p = p.split("=")))
    .reduce((acc, val) => {
        const [key, value] = val;
        acc[key] = value;
        return acc;
    }, {});

const products = urlParams.product_data
    .split("*")
    .filter((prod) => !!prod)
    .map((prod) => {
        prod = prod.split("%");
        return {
            name: prod[0],
            type: prod[1].substring(2),
            count: Number(prod[2].substring(2)),
        };
    });

const totalPrice = document.querySelector("#total-weight");
const shop = document.querySelector("#shop");
const address = document.querySelector("#address");

const container = document.querySelector(".column__list");

const totalWeight = products
    .map((prod) => prod.count)
    .reduce((acc, val) => acc + val, 0);

totalPrice.innerText = `Тегло: ${
    totalWeight >= 1000
        ? (totalWeight / 1000).toFixed(2) + " " + "кг."
        : totalWeight + " " + "гр."
}`;
shop.innerText = `Магазин: ${urlParams.shop}`;
address.innerText = `Адрес за доставка: ${urlParams.address}`;

products.forEach((prod, i) => {
    const { name, type, count } = prod;

    const item = document.createElement("div");
    item.classList.add("column__list__item");
    item.innerHTML = `<div class="column__list__item__name">
                        ${i + 1}. ${name}
                    </div>
                    <div class="column__list__item__prop">
                        ${
                            type === "bulk"
                                ? "насипно"
                                : type === "package"
                                ? "пакет"
                                : type === "bottle"
                                ? "бутилка"
                                : ""
                        }
                    </div>
                    <div class="column__list__item__prop">
                        ${
                            count >= 1000
                                ? (count / 1000).toFixed(2) + " " + "кг."
                                : count + " " + "гр."
                        }
                    </div>`;

    container.appendChild(item);
});
