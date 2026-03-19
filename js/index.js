function renderPersonas() {
    const container = document.getElementById("persona-page");
    const sortValue = document.getElementById("sort-select")?.value || "default";

    let sorted = [...personas];

    switch (sortValue) {
        case "name-asc":
            sorted.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "name-desc":
            sorted.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case "price-asc":
            sorted.sort((a, b) => {
                const priceA = parseInt(a.price.replace(/[¥,]/g, ""));
                const priceB = parseInt(b.price.replace(/[¥,]/g, ""));
                return priceA - priceB;
            });
            break;
        case "price-desc":
            sorted.sort((a, b) => {
                const priceA = parseInt(a.price.replace(/[¥,]/g, ""));
                const priceB = parseInt(b.price.replace(/[¥,]/g, ""));
                return priceB - priceA;
            });
            break;
        case "arcana":
            sorted.sort((a, b) => a.arcana.localeCompare(b.arcana));
            break;
        default:
            break;
    }

    container.innerHTML = "";

    sorted.forEach(persona => {
        const div = document.createElement("div");
        div.classList.add("persona");
        div.innerHTML = `
            <img src="${persona.image}" alt="${persona.name}">
            <article class="persona-info">
                <h2><a href="pages/product.html?id=${persona.id}">${persona.name}</a></h2>
                <p>Arcana: ${persona.arcana}</p>
                <span>${persona.price}</span>
            </article>
            <article class="persona-options">
                <button class="add-to-cart-btn" data-id="${persona.id}">
                    Buy now..?
                </button>
            </article>
        `;

        div.querySelector(".add-to-cart-btn").addEventListener("click", (e) => {
            addToCart(persona.id, e.currentTarget);
        });

        container.appendChild(div);
    });
}

renderPersonas();